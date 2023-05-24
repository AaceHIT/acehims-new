<?php
class StaffApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $staff;




	// • ==== INITIALIZE →
	public function initialize() {
		if (!AaceUtil::restrictAdmin()) {
			$this->auth = new AuthModel;
			$this->staff = new StaffModel;
			$this->setActiveUser($this->auth);
			$this->meta['title'] = AaceUtil::cleanTitle($this->meta['title']);
		}
	}




	// • ==== LANDING →
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		AaceUtil::redirect($uri);
	}






	// • ==== CREATE
	public function create() {
		if (App::isPost()) {
			$param = AaceUtil::formElement('CREATE_STAFF');
			$input = DataQ::isPost($param);
			$input['author'] = $this->activeUserBIND;
			if ($this->staff->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->secondaryBreadcrumb('Create Staff');
		$this->setForm('create_staff');
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- DETAIL •
	public function detail() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->staff->oFindByID($puid);
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['view'] = 'detail_staff';
		$this->meta['breadcrumb']['secondary'] = 'Staff Record';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LIST •
	public function list() {
		$record = $this->staff->findAll();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Staff';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ---- DOCTOR •
	public function listDoctor() {
		$record = $this->staff->findAllDoctor();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'department-staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Doctors';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- NURSE •
	public function listNurse() {
		$record = $this->staff->findAllNurse();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'department-staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Nurses';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- PHARMACIST •
	public function listPharmacist() {
		$record = $this->staff->findAllPharmacist();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'department-staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Pharmacist';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LABORATORIST •
	public function listLaboratorist() {
		$record = $this->staff->findAllLaboratorist();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'department-staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Laboratorist';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LABORATORIST •
	public function listRadiologist() {
		$record = $this->staff->findAllRadiologist();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'department-staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Radiologist';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LABORATORIST •
	public function listAccountant() {
		$record = $this->staff->findAllAccountant();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'department-staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Accountant';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LABORATORIST •
	public function listReceptionist() {
		$record = $this->staff->findAllReceptionist();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'department-staff';
		$this->meta['breadcrumb']['secondary'] = 'List of Receptionist';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of StaffApp