<?php
//*** Modelizr Trait » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
trait ModelizrTrait {

	// ◇ ---- CALL-STATIC •
	public static function __callStatic($method, $argument) {
		if (StringX::begin($method, 'i')) {
			$methodO = 'o' . StringX::cropBegin($method, 'i');
			$instance = new self();
			if (method_exists($instance, $methodO)) {
				if (Vars::isNotEmptyArray($argument)) {
					return $instance->$methodO(...$argument);
				}
				return $instance->{$methodO}();
			}
		}
		return oversight(__CLASS__, 'Method Statically Unreachable', $method);
	}




	// ◇ ---- CONNECT •
	public function connect($dba = null) {
		if (Vars::noData($dba) && Vars::hasData($this->dba)) {
			$dba = $this->dba;
		}

		// » get the database name
		if (isset($dba['name'])) {
			$database = $dba['name'];
			unset($dba['name']);
		}

		// » create a connection to mysql server
		$this->initialize($dba);

		// » verify or create, & adopt database
		if (Vars::hasData($database)) {
			if ($this->isDatabase($database) === false) {
				$this->createDatabase($database);
			}
			if ($this->isDatabase($database) === true) {
				$this->database = $database;
			}
			$this->adoptDatabase($this->database);
		}
	}




	// ◇ ---- INSTANCE •
	public function instance($table) {
		$instance = new self();
		if (Vars::hasData($table)) {
			// • verify & adopt table
			$table = $this->oTable($table, 'IS');
			$instance->verifyTable($table);
			$instance->adoptTable($table);
		}
		return $instance;
	}




	// ◇ ---- STATIC •
	public static function static() {
		return new self();
	}

} //> End Of Trait ~ Modelizr