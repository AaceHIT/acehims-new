<?php
class XHRApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $patient;
	private $encounter;
	private $vital;




	// • ==== initialize →
	public function initialize() {
		$this->auth = new AuthModel;
		$this->patient = new PatientModel;
		$this->encounter = new EncounterModel;
		$this->vital = new VitalModel;
		$this->modelizr = new AaceModel;
		$this->setActiveUser($this->auth);
		$this->setLayout('xhr');
	}




	// • ==== landing →
	public function landing() {
	}




	// • ===== fallback →
	public function fallback($method = null, $class = null) {
		if (Vars::hasData($method)) {
			$this->logic['method'] = $method;
			$this->logic['class'] = $class;
		}
		$this->objectify();
		return DesignQ::xhr($this->designer());
	}




	// • ==== encounterPatientRecord →
	public function encounterPatientRecord() {
		$param = ['patient'];
		$filter = DataQ::isGet($param);
		if (DataQ::isRowAnyColumn($filter, $param)) {
			SetQ::keySwap($filter, 'patient', 'tuid');
			$record = $this->patient->oFindOne($filter);
			$this->setRecord($record);
			$this->setXHR('encounter_record_profile');
		}
		$this->objectify();
		return DesignQ::xhr($this->designer());
	}




	// • ==== encounterPatientMedicalRecord →
	public function encounterPatientMedicalRecord() {
		$param = ['patient'];
		$filter = DataQ::isGet($param);
		if (DataQ::isRowAnyColumn($filter, $param)) {
			SetQ::keySwap($filter, 'patient', 'tuid');
			$record = $this->patient->oFindOne($filter);
			$this->setRecord($record);
			$this->setXHR('encounter_record_medical');
		}
		$this->objectify();
		return DesignQ::xhr($this->designer());
	}




	// • ==== encounterPractice →
	public function encounterPractice() {
		$this->secondaryBreadcrumb('Encounter');
		$this->primaryBreadcrumb('Department');
		$render = AaceUtil::isRenderGet();




		$param = ['encounter'];
		$filter = DataQ::isGet($param);
		if (DataQ::isRowAnyColumn($filter, $param)) {
			SetQ::keySwap($filter, 'encounter', 'tuid');

			if ($render === 'save') {

				$paramSave = ['consultant', 'practice'];
				$input = DataQ::isPost($paramSave);
				$resolve = $this->encounter->oUpdate($filter, $input, 'STRING');
				if ($resolve === 'UPDATED') {
					$response = 'success';
				} else {
					$response = 'failure';
				}
				echo $response;

			} elseif ($render === 'default') {
				$record = $this->encounter->oFindOne($filter);
				$this->setRecord($record);
				$this->setXHR('encounter_record_practice');
			} elseif ($render === 'edit') {
				$record = $this->encounter->oFindOne($filter);
				$this->setRecord($record);
				$this->setXHR('encounter_update_practice');
			}
		}
		$this->objectify();
		return DesignQ::xhr($this->designer());
	}


	public function encounterSave() {
		$input = HTTPX::data('POST');
		Vars::trace($input);
	}




	// • ==== encounterPatientMedicalUpdate →
	public function encounterPatientMedicalUpdate() {
		$param = ['patient', 'encounter'];
		$filter = DataQ::isGet($param);
		if (DataQ::isRowAnyColumn($filter, $param)) {
			SetQ::keySwap($filter, 'patient', 'tuid');
			SetQ::isRowColumnFilter($filter, 'tuid');
			$record = $this->patient->findMedical($filter);
			$this->setRecord($record);
			$this->setXHR('encounter_update_medical');
		}
		$this->objectify();
		return DesignQ::xhr($this->designer());
	}




	// • ==== encounterPatientMedicalSave →
	public function encounterPatientMedicalSave() {
		$filter = DataQ::isGet(['patient']);
		SetQ::keySwap($filter, 'patient', 'puid');
		if (DataQ::isRowColumn($filter, 'puid')) {
			$puid = DataQ::stackOne($filter, 'puid');
			$param = ['medical'];
			$input = DataQ::isPost($param);
			$resolve = $this->patient->oUpdateByID($puid, $input, 'STRING');
			if ($resolve === 'UPDATED') {
				$response = 'success';
			} else {
				$response = 'failure';
			}
			echo $response;
		}
	}




























	// • ==== GET DATA →
	public function dataGet() {
		$req = DataQ::isGet(['req']);
		if (DataQ::isRowColumn($req, 'req')) {
			$req = strtoupper($req['req']);
		}

		if ($req === 'REFERRER') {
			$table = 'user';
			$this->setTable($table);
			$filter['role'] = 'REFERRER';
			$record = $this->modelizr->oFindAll(['tuid', 'firstname']);
			// $record = $this->modelizr->oFindEvery($filter);
			// $record = 'NO_RESULT';
			$record = $this->rowAsJSON($record);
			return JSONX::display($record);
		}
	}


















	// • ==== encounterPatientVitalRecord →
	public function encounterPatientVitalRecord() {
		$param = ['encounter'];
		$filter = DataQ::isGet($param);
		if (DataQ::isRow($filter)) {
			$record = $this->vital->oFindEvery($filter);
			$this->setRecord($record, 'JSON');
			$this->setXHR('encounter_patient_record_vital');
		}
		$this->objectify();
		return DesignQ::xhr($this->designer());
	}




	// • ==== encounterPatientVitalCreate →
	public function encounterPatientVitalCreate() {
		$this->setXHR('encounter_patient_create_vital');
		$this->objectify();
		return DesignQ::xhr($this->designer());
	}

} //> end of XHRApp