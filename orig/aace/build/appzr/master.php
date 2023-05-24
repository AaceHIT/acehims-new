<?php
//*** MasterApp » Tydi™ Framework © 2023 ∞ AO™ • @iamodao • www.osawere.com ∞ Apache License ***//
class MasterApp extends Appzr {

	// • property
	private $auth;



	// • ==== initialize →
	public function initialize() {
		if (!AaceUtil::restrictMaster()) {
			$this->auth = new AuthModel;
			$this->modelizr = new AaceModel;
			$this->setActiveUser($this->auth);
			$this->meta['title'] = AaceUtil::cleanTitle($this->meta['title']);
		}
	}




	// • ==== landing →
	public function landing() {
	}




	// • ==== practiceList →
	public function practiceList() {
		$table = 'practice';
		$this->useTable($table);
		$record = $this->modelizr->oFindAll();
		$this->setRecord($record);
		$this->meta['breadcrumb']['secondary'] = 'List of Practice';
		$this->frontend['table'] = $table;
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ==== practiceDetail →
	public function practiceDetail() {
		$table = 'practice';
		$this->useTable($table);
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->modelizr->oFindByID($puid);
			$this->setRecord($record);
		}
		$this->frontend['view'] = 'detail_practice';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ==== practiceCreate →
	public function practiceCreate() {
		$table = 'practice';
		$this->useTable($table);
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'description'];
			$input = DataQ::isPost($param);
			$input['author'] = $this->activeUserBIND;
			if ($this->modelizr->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Create Practice';
		$this->frontend['form'] = 'create_practice';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ==== practiceUpdate →
	public function practiceUpdate() {
		$table = 'practice';
		$this->useTable($table);
		$param = ['id'];
		$input = DataQ::isGet($param);
		$puid = DataQ::stackOne($input, 'puid');
		if (Vars::hasData($puid)) {
			$record = $this->modelizr->oFindByID($puid);
			$this->setRecord($record);
		}
		if (App::isPost()) {
			$param = ['title', 'acronym', 'code', 'description'];
			$input = DataQ::isPost($param);
			$resolve = $this->modelizr->oUpdateByID($puid, $input, 'STRING');
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update Practice';
		$this->frontend['form'] = 'update_practice';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of MasterApp