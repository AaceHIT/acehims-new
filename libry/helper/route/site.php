<?php
//*** Site » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class Site extends Route {

	// ◇ PROPERTY
	public static $lang;
	protected static $directory;
	protected static $ehttp;
	private static $page;
	private static $spet;





	// ◇ ----- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- CALL STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}




	// ◇ ---- PROPERTY • Get Class Property » Boolean | Mixed
	public static function property($property, $req = 'GET') {
		if (Vars::isEmpty($property) || Vars::isEmpty($req)) {
			return false;
		}

		// • GET
		elseif ($req === 'GET') {
			if (Vars::isString($property)) {
				if ($property == 'PROPERTIES') {
					return get_class_vars(__CLASS__);
				}
				if (isset(self::$$property)) {
					return self::$$property;
				} else {
					return parent::property($req);
				}
			}

			// • ARRAY
			elseif (Vars::isArray($property)) {
				$o = [];
				foreach ($property as $value) {
					if (isset(self::$$value)) {
						$o[$value] = self::$$value;
					}
				}
				return $o;
			}
		}
		// • SET
		elseif ($req === 'SET') {
		}

		return false;
	}





	// ◇ ----- INITIALIZE • ... » Boolean
	public static function initialize($setting = [], $libraryOfSubdomain = []) {

		// • Verify that platform is Site
		if (!parent::isSite()) {
			return false;
		}



		// • Set Language (from setting or url)
		if (ArrayX::isKeyNotEmpty($setting, 'lang')) {
			self::$lang = LangQ::set($setting['lang']);
			unset($setting['lang']);
		} else {
			self::$lang = LangQ::is('DATA');
		}



		// • Initialize & Set SPET
		if (ArrayX::isKeyNotEmpty($setting, 'spet')) {
			self::$spet = $setting['spet'];
			unset($setting['spet']);
		} else {
			self::$spet = false;
		}



		// • Initialize & Set Directory (append lang path, if available in settings)
		if (Vars::isEmpty(self::$directory)) {
			self::$directory = ObjectX::make();
			self::$directory->append = '';
		}

		if (ArrayX::isKeyNotEmpty($setting, 'langpath') && $setting['langpath']) {
			if (self::$lang !== 'en' && Vars::isNotEmpty(self::$lang)) {
				self::$directory->append = self::$lang . DS;
			}
			unset($setting['langpath']);
		}

		self::$directory->layoutzr = ORIG['layout'] . self::$directory->append;
		self::$directory->pagezr = ORIG['page'] . self::$directory->append;
		self::$directory->slicezr = ORIG['slice'] . self::$directory->append;



		// • Set HTTP Error Page (from setting)
		if (ArrayX::isKeyNotEmpty($setting, 'ehttp')) {
			self::$ehttp = $setting['ehttp'];
			unset($setting['ehttp']);
		} else {
			self::$ehttp = ORIG['page'] . 'ehttp.php';
		}



		// • Initialize/Re-Initialize Route
		if (Vars::isNotEmpty($setting)) {
			parent::initialize($setting, $libraryOfSubdomain);
		}


		// • Codify
		parent::codify();


		// • Initialize, Prepare & Set Page Object
		if (Vars::isEmpty(self::$page)) {
			self::$page = ObjectX::make();
		}

		// • Page Title
		if (parent::$codify->model === 'index') {
			self::$page->title = 'Home';
			self::$page->is = 'Home';
		} else {
			self::$page->title = StringX::crop(self::$uri, '/');
			self::$page->title = StringX::swapLast(self::$page->title, '/', ' » ');
			self::$page->title = StringX::swap(self::$page->title, '/', ' | ');
		}
		self::$page->title = StringX::swap(self::$page->title, '-', ' ');
		self::$page->title = StringX::swap(self::$page->title, '_', ' ');

		if (Vars::isEmpty(self::$page->is)) {
			self::$page->is = ucwords(self::$page->title);
		}

		if (!empty(parent::$project['title'])) {
			self::$page->title .= ' • ' . parent::$project['title'];
		}
		if (!empty(parent::$project['brand'])) {
			self::$page->title .= ' - ' . parent::$project['brand'];
		}
		self::$page->title = ucwords(self::$page->title);


		// • Return True
		return true;
	}





	// ◇ ----- MAKER • The Maker »
	public static function maker($res = []) {

		// • Meta
		$res['meta']['uri'] = parent::$uri;
		$res['meta']['link'] = parent::$link->is;
		$res['meta']['model'] = parent::$codify->name;
		$res['meta']['method'] = parent::$codify->method;


		// • HTTP Error
		if (Vars::isEmpty($res['meta']['ehttp'])) {
			$res['meta']['ehttp'] = self::$ehttp;
		}


		// • Document
		if (Vars::isEmpty($res['meta']['document'])) {
			$res['meta']['document'] = self::$page->is;
		}


		// • Page
		if (Vars::isEmpty($res['meta']['page'])) {
			$res['meta']['page'] = self::$directory->pagezr . parent::$codify->model;
			if (parent::$codify->method !== 'landing') {
				$res['meta']['page'] .= DS . strtolower(parent::$codify->method);
			}
			$res['meta']['page'] .= '.php';
		}


		// • Title
		if (Vars::isEmpty($res['meta']['title'])) {
			$res['meta']['title'] = self::$page->title;
		}


		// • Content
		if (Vars::isEmpty($res['content'])) {
			$res['content'] = [];
		}

		return $res;
	}





	// ◇ ----- RENDER • Render Content »
	public static function render($filename, $content, $meta) {
		if (FileX::is($filename)) {
			return require $filename;
		}

		// • HTTP 404
		else {
			if (FileX::is($meta->ehttp)) {
				return require $meta->ehttp;
			} elseif (FileX::is(LIBRARY['vendor'] . 'tydi' . DS . '404.php')) {
				return require(LIBRARY['vendor'] . 'tydi' . DS . '404.php');
			} else {
				$accent = array_merge(HTTPX::get('DATA'), ['type' => '404']);
				if (Env::is('DEV')) {
					return HTTPX::error('PRINT', $accent);
				} else {
					return HTTPX::error('HTML', $accent);
				}
			}
		}
	}





	// ◇ ----- LAUNCH • Auto Launch »
	public static function launch() {
		$dataset = [];
		$organizr = parent::organizr();
		if (FileX::is($organizr)) {
			$object = 'Sitezr';
			$method = lcfirst(parent::$codify->name);
			$caller = new $object;
			if (method_exists($caller, $method)) {
				$dataset = $caller::$method();
			}
		} else {
			// TODO: Trigger Error, Possibly
		}

		$maker = ArrayX::toObj(self::maker($dataset));

		// • IF $spet is false
		if (Vars::isFalse(self::$spet)) {
			return self::render($maker->meta->page, $maker->content, $maker->meta);
		}

		// • IF $spet is true
		else {
			$path = self::$directory->pagezr;
			$file = FileX::base($maker->meta->page, true);
			$tag = ObjectX::combine($maker->meta, $maker->content);

			$spet = new SpetQ;
			$spet->initialize($file, $tag, $path);

			if (Vars::isNotEmpty($maker->layout)) {
				foreach ($maker->layout as $slice => $boolean) {
					$spet->layout($slice);
				}
			}

			$spet->render();
			$spet->display();
		}
		return true;
	}





	// ◇ ----- IS • ... »
	public static function is($req = 'SITE', $method = 'REQUEST') {

		// • Check if Platform is SITE
		if ($req === 'SITE') {
			return parent::isSite();
		}

		// • Check from Parent class
		else {
			return parent::is($req, $method);
		}
	}





	// ◇ ----- SPET • Set $spet » Boolean
	public static function spet($req = true) {
		if (Vars::isBoolean($req)) {
			self::$spet = $req;
		}
		return true;
	}

} // End Of Class ~ Site