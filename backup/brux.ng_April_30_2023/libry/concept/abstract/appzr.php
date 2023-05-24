<?php
//*** App Organizr » alpha-0.0.23 • Tydi™ → AO™ / @iamodao / www.osawere.com - © 2023 | Apache License ***/
abstract class Appzr {

	// ◇ PROPERTY •
	protected $modelizr;
	protected $controlizr;
	public $path;
	public $link;
	public $frontend;
	public $content;
	public $meta;
	public $logic;





	// ◇ ---- ABSTRACT METHOD •
	abstract public function initialize();
	abstract public function landing();





	// ◇ ---- CHILD • Child Method »
	public function child($method, ...$argument) {
		if (method_exists($this, $method)) {
			return $this->$method(...$argument);
		}
		return false;
	}





	// ◇ ---- CONSTRUCT •
	public function __construct() {
		$app = new App;
		$this->path = PD;
		$this->link = $app::property('link');
		$this->link->url = $app::property('url');
		$this->link->uri = $app::property('uri');


		// • meta
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
			'table' => null
		];

		$this->initialize();
	}





	// ◇ ---- OBJECTIFY • Turn content, meta, logic & layout into Object »
	public function objectify() {
		$this->meta = Vars::objectify($this->meta);
		$this->content = Vars::objectify($this->content);
		$this->logic = Vars::objectify($this->logic);
		$this->frontend = Vars::objectify($this->frontend);
	}





	// ◇ ---- DESIGNER • Prepare design data »
	public function designer(){
		$design = [];
		$design['meta'] = $this->meta;
		$design['content'] = $this->content;
		$design['logic'] = $this->logic;
		$design['frontend'] = $this->frontend;
		return $design;
	}





	// ◇ ---- FALLBACK •
	public function fallback($method = null, $class = null) {
		if (Vars::hasData($method)) {
			$this->logic['method'] = $method;
			$this->logic['class'] = $class;
		}
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} // End Of Abstract ~ Appzr