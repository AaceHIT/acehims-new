<?php
class MedicineApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $medicine;





	// • ---- INITIALIZE •
	public function initialize() {
		AOUtil::restrictAuthToAdmin();
		$this->auth = new AuthModel;
		$this->medicine = new MedicineModel;
		$this->meta['title'] = AOUtil::cleanTitle($this->meta['title']);
		$this->logic['sessionUser'] = $this->auth->sessionUser('DATA');
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AOUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}






	// • ---- CREATE •
	public function create() {
		if (App::isPost()) {
			$param = ['title', 'generic', 'code', 'description', 'type', 'storage', 'price', 'effect', 'vendor'];
			$input = DataQ::isPost($param);
			$input['oauthid'] = $this->logic['sessionUser']['tuid'];
			if ($this->medicine->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->frontend['form'] = 'create_medicine';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- UPDATE •
	public function update() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->medicine->oFindByID($puid);
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		if (App::isPost()) {
			$param = ['title', 'generic', 'code', 'description', 'type', 'storage', 'price', 'effect', 'vendor'];
			$input = DataQ::isPost($param);
			$resolve = $this->medicine->oUpdateByID($puid, $input, 'STRING');
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update Medicine';
		$this->frontend['form'] = 'update_medicine';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LIST •
	public function list() {
		$record = $this->medicine->oFindAll();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'medicine';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- DETAIL •
	public function detail() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->medicine->oFindByID($puid);
			if ($record === 'NO_RESULT') {
				$this->logic['norecord'] = true;
			} elseif (DataQ::isRowColumn($record, 'puid')) {
				$this->content['record'] = $record;
			}
		}
		$this->frontend['view'] = 'detail_medicine';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- DELETE •
	public function delete() {
		if (App::isGet()) {
			$param = ['id'];
			$input = DataQ::isGet($param);
			SetQ::keySwap($input, 'puid', 'suid');
			$suid = DataQ::stackOne($input, 'suid');
			if (Vars::hasData($suid) && $this->medicine->oDeleteByRowID($suid, 'STRING') === 'DELETED') {
				$this->frontend['notify'] = 'medicine_deleted';
			} else {
				RedirectX::instant(AOUtil::link('medicine/list'));
			}
		}
		$this->meta['breadcrumb']['secondary'] = 'Delete Company';
		$this->logic['linkback'] = 'medicine/list';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of MedicineApp