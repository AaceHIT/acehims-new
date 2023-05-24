<?php
class WardApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $ward;
	private $bed;





	// • ---- INITIALIZE •
	public function initialize() {
		AaceUtil::restrictAdmin();
		$this->auth = new AuthModel;
		$this->ward = new WardModel;
		$this->bed = new BedModel;
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
			$param = ['title', 'acronym', 'code', 'description'];
			$input = DataQ::isPost($param);
			$input['author'] = $this->logic['sessionUser']['tuid'];
			if ($this->ward->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->frontend['form'] = 'create_ward';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- MANAGE •
	public function manage() {
		$record = $this->ward->oFindAll();
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'ward';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- BED-CREATE •
	public function bedCreate() {
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'description', 'oward'];
			$input = DataQ::isPost($param);
			$input['author'] = $this->logic['sessionUser']['tuid'];
			if ($this->bed->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->frontend['form'] = 'create_bed';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- UPDATE •
	public function update() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->ward->oFindByID($puid);
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'description'];
			$input = DataQ::isPost($param);
			$resolve = $this->ward->oUpdateByID($puid, $input, 'STRING');
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update Ward';
		$this->frontend['form'] = 'update_ward';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- BED-UPDATE •
	public function bedUpdate() {
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->bed->oFindByID($puid);
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'description', 'oward'];
			$input = DataQ::isPost($param);
			$resolve = $this->bed->oUpdateByID($puid, $input, 'STRING');
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update Bed';
		$this->frontend['form'] = 'update_bed';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- MANAGE BED •
	public function bedManage() {
		$search = DataQ::isGet(['ward']);
		if (ArrayX::isKeyNotEmpty($search, 'ward')) {
			$filter['oward'] = $search['ward'];
			$record = $this->bed->oFindEvery($filter);
		} else {
			$record = $this->bed->oFindAll();
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'bed';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of WardApp