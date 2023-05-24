<?php
class PatientApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $patient;





	// • ---- INITIALIZE •
	public function initialize() {
		AaceUtil::restrictAuth();
		$this->auth = new AuthModel;
		$this->patient = new PatientModel;
		$this->setActiveUser($this->auth);
		AaceUtil::cleanTitle($this->meta['title']);
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}





	// • ---- DASHBOARD •
	public function dashboard() {
		AaceUtil::restrictPatient();
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- CREATE •
	public function create() {
		if (App::isPost()) {
			$param = [
				'fullname', 'firstname', 'lastname', 'middlename', 'phone', 'email', 'password', 'birthdate', 'gender', 'nationality', 'nin', 'mid', 'username', 'gender', 'relationship', 'nationality',
				'bio', 'religion', 'occupation', 'family', 'vip', 'corporate', 'living', 'origin', 'hmo', 'medical', 'contact', 'guardian', 'nok', 'group',
				'department', 'type', 'flag', 'status', 'kind', 'role', 'referrer', 'cameraPhoto'
			];
			$input = DataQ::isPost($param);
			// Utilizr::uploadCameraOrPhoto($input, 'dp', ['base64' => 'cameraPhoto']);
			$input['author'] = $this->activeUserBIND;
			if ($this->patient->createPatient($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Create Patient';
		$this->frontend['form'] = 'create_patient';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ---- DETAIL •
	public function detail() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->patient->oFindByID($puid);
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['view'] = 'detail_patient';
		$this->meta['breadcrumb']['secondary'] = 'Patient Record';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LIST •
	public function list() {
		$record = $this->patient->findAll();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'patient';
		$this->meta['breadcrumb']['secondary'] = 'List of All Patient';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- IPD •
	public function ipd() {
		$record = $this->patient->findAllIPD();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'patient';
		$this->meta['breadcrumb']['secondary'] = 'List of In Patient';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- OPD •
	public function opd() {
		$record = $this->patient->findAllOPD();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'patient';
		$this->meta['breadcrumb']['secondary'] = 'List of Out Patient';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- ANT •
	public function antenatal() {
		$record = $this->patient->findAllANT();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'patient';
		$this->meta['breadcrumb']['secondary'] = 'List of Antenatal Patient';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of PatientApp