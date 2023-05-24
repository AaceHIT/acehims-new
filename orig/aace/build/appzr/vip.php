<?php
class VIPApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $vip;





	// • ---- INITIALIZE •
	public function initialize() {
		AaceUtil::restrictAdmin();
		$this->auth = new AuthModel;
		$this->vip = new VIPModel;
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
			if ($this->vip->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Create VIP';
		$this->frontend['form'] = 'create_vip';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- UPDATE •
	public function update() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->vip->oFindByID($puid);
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'email', 'phone', 'website', 'address', 'contact'];
			$input = DataQ::isPost($param);
			$resolve = $this->vip->oUpdateByID($puid, $input, 'STRING');
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update VIP';
		$this->frontend['form'] = 'update_vip';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LIST •
	public function list() {
		$record = $this->vip->oFindAll();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'vip';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- DETAIL •
	public function detail() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->vip->oFindByID($puid);
			if ($record === 'NO_RESULT') {
				$this->logic['norecord'] = true;
			} elseif (DataQ::isRowColumn($record, 'puid')) {
				$this->content['record'] = $record;
			}
		}
		$this->frontend['view'] = 'detail_vip';
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
			if (Vars::hasData($suid) && $this->vip->oDeleteByRowID($suid, 'STRING') === 'DELETED') {
				$this->frontend['notify'] = 'vip_deleted';
			} else {
				RedirectX::instant(AaceUtil::link('vip/list'));
			}
		}
		$this->meta['breadcrumb']['secondary'] = 'Delete VIP';
		$this->logic['linkback'] = 'vip/list';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of VIPApp