<?php
class HMOApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $hmo;





	// • ---- INITIALIZE •
	public function initialize() {
		AaceUtil::restrictAdmin();
		$this->auth = new AuthModel;
		$this->hmo = new HMOModel;
		$this->meta['title'] = AaceUtil::cleanTitle($this->meta['title']);
		$this->logic['sessionUser'] = $this->auth->sessionUser('DATA');
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}






	// • ---- CREATE •
	public function create() {
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'email', 'phone', 'website', 'address', 'contact'];
			$input = DataQ::isPost($param);
			$input['author'] = $this->logic['sessionUser']['tuid'];
			if ($this->hmo->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Create HMO';
		$this->frontend['form'] = 'create_hmo';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- UPDATE •
	public function update() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->hmo->oFindByID($puid);
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'email', 'phone', 'website', 'address', 'contact'];
			$input = DataQ::isPost($param);
			$resolve = $this->hmo->oUpdateByID($puid, $input, 'STRING');
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update HMO';
		$this->frontend['form'] = 'update_hmo';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LIST •
	public function list() {
		$record = $this->hmo->oFindAll();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'hmo';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- DETAIL •
	public function detail() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->hmo->oFindByID($puid);
			if ($record === 'NO_RESULT') {
				$this->logic['norecord'] = true;
			} elseif (DataQ::isRowColumn($record, 'puid')) {
				$this->content['record'] = $record;
			}
		}
		$this->frontend['view'] = 'detail_hmo';
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
			if (Vars::hasData($suid) && $this->hmo->oDeleteByRowID($suid, 'STRING') === 'DELETED') {
				$this->frontend['notify'] = 'hmo_deleted';
			} else {
				RedirectX::instant(AaceUtil::link('hmo/list'));
			}
		}
		$this->meta['breadcrumb']['secondary'] = 'Delete HMO';
		$this->logic['linkback'] = 'hmo/list';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of HMOApp