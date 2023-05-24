<?php
//*** Database Abstract » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

abstract class DatabaseAbstract {

	// ◇ Property
	protected $dbco;
	protected $table;
	protected $database;





	// ◇ Use
	use CRUDTrait;
	use TableTrait;
	use DatabaseTrait;





	// ◇ ---- __call • Non-Existent Method » Error
	public function __call($method, $argument) {

		// • Check :: Run database class's method ~ [$oPDO->query()]
		if (is_object($this->dbco) && method_exists($this->dbco, $method)) {
			return $this->dbco->$method(...$argument);
		}

		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- Initialize • ... »
	public function initialize($config = null) {
		// * TODO: Implement driver check on $config and improve method

		$this->dbco = new oPDO($config);
	}





	// ◇ ---- oTable • ... »
	public function oTable($table = null, $req = 'IS') {

		// » Return the table
		if (Vars::noData($table)) {
			return $this->table;
		}

		// » Set the table
		elseif ($req === 'SET') {
			$this->table = $this->dbco->table($table);
			return true;
		}

		// » Return table
		elseif ($req === 'IS') {
			return $this->dbco->table($table);
		}

		// » Set and return the table
		elseif ($req === 'BOTH') {
			$this->table = $this->dbco->table($table);
			return $this->table;
		}

		return false;
	}





	// ◇ ---- oDatabase • ... »
	public function oDatabase() {
		// » Return the database
		if (Vars::noData($database)) {
			return $this->dbco->property('name', 'GET');
		}
		return false;
	}





	// ◇ ----- oMODEL •
	public function oModel($table) {
		$table = $this->oTable($table, 'IS');
		if ($this->oSetup($table)) {
			$this->oTable($table, 'IS');
		}
		return $this;
	}




	// ◇ ---- ABSTRACT •
	abstract public function connect();
	abstract public function instance($table);
	abstract public static function static();

} // End Of Abstract ~ Database