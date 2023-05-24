<?php
//*** Appzr - App Organizer » Tydi™ Framework © 2023 ∞ AO™ • @iamodao • www.osawere.com ∞ Apache License ***//
abstract class Appzr {

	// ◇ PROPERTY
	public $path;
	public $link;
	public $frontend;
	public $content;
	public $meta;
	public $logic;
	protected $modelizr;
	protected $controlizr;
	protected $activeUserBIND;
	protected $activeUserPUID;




	// ◇ ===== abstract method →
	abstract public function initialize();
	abstract public function landing();




	// ◇ ===== child → handler - child method »
	public function child($method, ...$argument) {
		if (method_exists($this, $method)) {
			return $this->$method(...$argument);
		}
		return false;
	}




	// ◇ ===== construct →
	public function __construct() {
		$app = new App;
		$this->path = PD;
		$this->link = $app::property('link');
		$this->link->url = $app::property('url');
		$this->link->uri = $app::property('uri');

		// ∞ meta
		$module = $app::$codify->model;
		$action = $app::$codify->method;
		$title = $app->title();
		$breadcrumb = [];
		if ($module !== strtolower('index')) {
			$breadcrumb['primary'] = ucwords(StringX::uppercaseToSpace($module));
		}
		if ($action !== strtolower('landing')) {
			$breadcrumb['secondary'] = ucwords(StringX::uppercaseToSpace($action));
		}
		$this->meta = [
			'title' => $title,
			'action' => $action,
			'module' => $module,
			'breadcrumb' => $breadcrumb,
		];

		$this->content = [];
		$this->logic = [];
		$this->frontend = [
			'layout' => 'primary',
			'form' => null,
			'view' => null,
			'table' => null,
			'xhr' => null
		];

		$this->initialize();
	}




	// ◇ ===== objectify → turn properties to object »
	public function objectify() {
		$this->meta = Vars::objectify($this->meta);
		$this->logic = Vars::objectify($this->logic);
		$this->content = Vars::objectify($this->content);
		$this->frontend = Vars::objectify($this->frontend);
	}




	// ◇ ===== designer → prepare design data »
	public function designer() {
		$design = [];
		$design['meta'] = $this->meta;
		$design['logic'] = $this->logic;
		$design['content'] = $this->content;
		$design['frontend'] = $this->frontend;
		return $design;
	}




	// ◇ ===== fallback →
	public function fallback($method = null, $class = null) {
		if (Vars::hasData($method)) {
			$this->logic['method'] = $method;
			$this->logic['class'] = $class;
		}
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// ◇ ==== useTable → Set table for modelizr »
	public function useTable($table) {
		$table = $this->modelizr->oTable($table, 'IS');
		return $this->modelizr->adoptTable($table);
	}



	// ◇ ==== rowAsObject → Convert row to Object »
	public function rowAsObject($row) {
		if ($row === 'NO_RESULT') {
			return ObjectX::make();
		}
		return ObjectX::to($row);
	}




	// ◇ ==== rowAsJSON → Convert row to JSON »
	public function rowAsJSON($row) {
		if ($row === 'NO_RESULT') {
			return JSONX::make();
		}
		return JSONX::to($row);
	}




	// ◇ ==== primaryBreadcrumb → Set or Get primary breadcrumb »
	public function primaryBreadcrumb($breadcrumb = null) {
		if (Vars::hasData($breadcrumb)) {
			$this->meta['breadcrumb']['primary'] = ucwords($breadcrumb);
		}
	}




	// ◇ ==== secondaryBreadcrumb → Set or Get secondary breadcrumb »
	public function secondaryBreadcrumb($breadcrumb = null) {
		if (Vars::hasData($breadcrumb)) {
			$this->meta['breadcrumb']['secondary'] = ucwords($breadcrumb);
		}
	}




	// ◇ ==== setRecord → Set content record »
	public function setRecord($record, $req = null) {
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		if ($req === 'OBJECT') {
			$record = $this->rowAsObject($record);
		}
		if ($req === 'JSON') {
			$record = $this->rowAsJSON($record);
		}
		$this->content['record'] = $record;
	}




	// ◇ ==== setRecordAsObject → Set content record »
	public function setRecordAsObject($record) {
		return $this->setRecord($record, 'OBJECT');
	}




	// ◇ ==== setRecordAsJSON → Set content record »
	public function setRecordAsJSON($record) {
		return $this->setRecord($record, 'JSON');
	}




	// ◇ ==== setActiveUser → Set session/active user »
	public function setActiveUser($authModelizr) {
		$this->logic['activeUser'] = $authModelizr->sessionUser('DATA');
		$this->activeUserBIND = $this->logic['activeUser']['tuid'];
		$this->activeUserPUID = $this->logic['activeUser']['puid'];
	}




	// ◇ ==== setLayout → Set frontend layout »
	public function setLayout($layout) {
		if (Vars::hasData($layout)) {
			$this->frontend['layout'] = strtolower($layout);
		}
	}




	// ◇ ==== setForm → Set frontend form »
	public function setForm($form) {
		if (Vars::hasData($form)) {
			$this->frontend['form'] = strtolower($form);
		}
	}




	// ◇ ==== setTable → Set frontend table »
	public function setTable($table) {
		if (Vars::hasData($table)) {
			$this->frontend['table'] = strtolower($table);
		}
	}




	// ◇ ==== setView → Set frontend view »
	public function setView($view) {
		if (Vars::hasData($view)) {
			$this->frontend['view'] = strtolower($view);
		}
	}




	// ◇ ==== setXHR → Set frontend xhr »
	public function setXHR($xhr) {
		if (Vars::hasData($xhr)) {
			$this->frontend['xhr'] = strtolower($xhr);
		}
	}

} //> end of Appzr