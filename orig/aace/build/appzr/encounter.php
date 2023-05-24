<?php
class EncounterApp extends Appzr {

	// • property
	private $auth;
	private $encounter;




	// • ==== initialize →
	public function initialize() {
		AaceUtil::restrictAuth();
		$this->auth = new AuthModel;
		$this->modelizr = new EncounterModel;
		$this->setActiveUser($this->auth);
		AaceUtil::cleanTitle($this->meta['title']);
	}




	// • ==== landing →
	public function landing() {
		$uri = AaceUtil::link('encounter/list');
		AaceUtil::redirect($uri);
	}




	// • ==== today → encounters created today
	public function today() {
		$filter = 'WHERE DATE(`created`) = CURDATE()';
		$record = $this->modelizr->oFindEvery($filter);
		$this->setRecord($record);
		$this->setTable('encounter');
		$this->secondaryBreadcrumb("Today's Encounter");
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}



	// • ==== list → all encounter
	public function list() {
		$param = ['patient'];
		$filter = DataQ::isGet($param);
		if (DataQ::isRowAnyColumn($filter, $param)) {

			// » Filter By Patient
			if (DataQ::isRowColumn($filter, 'patient')) {
				$patient = DataQ::stackOne($filter, 'patient');
				$record = $this->modelizr->findAllByPatient($patient);
			}

			// » Filter
			else {
				// * TODO: Filter
			}
		}

		// » Find All
		else {
			$record = $this->modelizr->oFindAll();
		}

		$this->setRecord($record);
		$this->setTable('encounter');
		$this->secondaryBreadcrumb('List of Encounter');
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ==== detail →
	public function detail() {
		$param = ['id', 'bind', 'appointment'];
		$filter = DataQ::isGet($param);
		if (DataQ::isRowAnyColumn($filter, $param)) {
			$record = $this->modelizr->oFindOne($filter);
			$this->setRecord($record);
		}
		if ($record === 'NO_RESULT') {
			$uri = AaceUtil::link('encounter/list');
			RedirectX::instant($uri);
		}
		$this->setView('detail_encounter');
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ---- CHECK IN •
	public function checkIn() {
		$param = [
			'appointment', 'patient'
		];
		$input = DataQ::isGet($param);
		$input['author'] = $this->activeUserBIND;
		$input['nurse'] = $this->activeUserBIND;
		if (DataQ::isRowColumn($input, 'appointment') && DataQ::isRowColumn($input, 'patient')) {
			$appointment = AppointmentModel::static()->oFindByBIND($input['appointment']);
			if (DataQ::isRowColumn($appointment, 'complaint')) {
				$input['complaint'] = $appointment['complaint'];
			}
			if (DataQ::isRowColumn($appointment, 'practice')) {
				$input['practice'] = $appointment['practice'];
			}
			if (DataQ::isRowColumn($appointment, 'appointee')) {
				$input['consultant'] = $appointment['appointee'];
			}
			$encounter = $this->modelizr->oCreate($input, 'puid');
			if (DataQ::isRowColumn($encounter, 'puid')) {
				$uri = AaceUtil::link('encounter/', ['id' => $encounter['puid']]);
				AppointmentModel::static()->oUpdateByBIND($input['appointment'], ['status' => 'ENCOUNTERED']);
			} else {
				$uri = AaceUtil::link('appointment/list');
			}
			RedirectX::instant($uri);
		}
	}

} //> end of EncounterApp