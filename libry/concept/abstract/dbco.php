<?php
//*** DBCO » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

abstract class DBCO {

	// ◇ PROPERTY
	protected $persist;
	protected $driver;
	protected $type;
	protected $host;
	protected $name;
	protected $user;
	protected $password;
	protected $dbo;
	protected $guid = 'AUTO';
	protected $tables = [];





	// ◇ ---- __call • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- __callStatic • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- CONSTRUCT •
	public function __construct($config = null) {
		$this->guid = 'AUTO';
		if (Vars::isNotEmpty($config)) {
			$this->ignite($config);
		}
	}





	// ◇ ----- TABLE •
	public function table($table) {
		if (ArrayX::isKey($this->tables, $table)) {
			return $this->tables[$table];
		}
		return $table;
	}





	// ◇ ----- PARAM • Get Parameters from Set » Array
	protected function param($set) {
		$param = SQL::collect($set, 'PARAM');
		if (Vars::noData($param)) {
			return [];
		}
		return $param;
	}





	// ◇ ----- SQL • Get SQL from Set » String
	protected function sql($set) {
		$sql = SQL::collect($set, 'SQL');
		if (Vars::noData($sql)) {
			return '';
		}
		return $sql;
	}





	// ◇ ----- ERROR • Error Handler
	public function error($error, $method = '') {
		$error = array_merge($error, ['HAS_ERROR' => true]);
		if (Vars::isNotEmpty($method) && ArrayX::isNotKey($error, 'object')) {
			$method = __CLASS__ . '→' . $method . '()';
			$error['object'] = $method;
		}
		return Route::handler(ErrorX::data($error), 'DB_ERROR');
	}





	// ◇ ----- VERIFY •
	public function verify() {
		if (Vars::isEmpty($this->host)) {
			return $this->error(['code' => 'C428DB', 'detail' => 'Connection :: Server Required']);
		} elseif (Vars::isEmpty($this->type)) {
			return $this->error(['code' => 'C428DB', 'message' => 'Connection :: Type Required']);
		} elseif (Vars::isEmpty($this->persist)) {
			return $this->error(['code' => 'C428DB', 'message' => 'Connection :: Persist Required']);
		} elseif (Vars::isEmpty($this->user)) {
			return $this->error(['code' => 'C428DB', 'message' => 'Connection :: User Required']);
		} elseif (Vars::isEmpty($this->password)) {
			return $this->error(['code' => 'C428DB', 'message' => 'Connection :: Password Required']);
		} elseif (Vars::isEmpty($this->driver)) {
			return $this->error(['code' => 'C428DB', 'message' => 'Connection :: Driver Required']);
		}
		return true;
	}





	// ◇ ----- PROPERTY • Set Specific Properties & Get Properties
	public function property($var, $req) {

		// • SET
		if ($req === 'SET') {
			if (Vars::isNotEmptyArray($var)) {
				$objects = ['host', 'driver', 'persist', 'user', 'password', 'type', 'name', 'tables', 'table'];
				if (count($var) == 1) {
					$label = ArrayX::firstKey($var);
					if (ArrayX::isValue($objects, $label)) {
						$this->$label = $var[$label];
					}
				} else {
					foreach ($objects as $object) {
						if (ArrayX::isKeyNotEmpty($var, $object)) {
							$this->$object = $var[$object];
						}
					}
				}
			}
			return true;
		}


		// • GET
		if ($req === 'GET') {
			if (Vars::isString($var) && isset($this->$var)) {
				return $this->$var;
			}

			// • ARRAY
			elseif (Vars::isArray($var)) {
				$o = [];
				foreach ($var as $value) {
					if (isset($this->$value)) {
						$o[$value] = $this->$value;
					}
				}
				return $o;
			}

			// % Return if isset
			elseif (isset($this->$var)) {
				return $this->$var;
			}
		}
	}





	// ◇ ----- DBO •
	public function dbo($var = null) {

		// » Return DBO
		if (Vars::noData($var)) {
			return $this->dbo;
		}

		// » Check if $this->dbo is valid
		elseif ($var === 'VALIDATE') {
			return $this->validate($this->dbo, 'DBO');
		}

		// » Set DBO
		elseif ($this->validate($var, 'DBO')) {
			$this->dbo = $var;
			return $this->dbo;
		}

		return false;
	}





	// ◇ ----- GUID •
	public function guid($guid = null) {
		if (Vars::noData($guid)) {
			$guid = $this->guid;
		}
		return $guid;
	}





	// ◇ ----- CREATE • Create Record
	public function create($table, $input, $yield = 'puid', $guid = null) {
		$guid = $this->guid($guid);
		if ($this->type === 'SQL') {
			$set = SQL::create($table, SQL::guid($input, $guid));
			return $this->prepare($this->sql($set), $yield, $this->param($set));
		}
		return false;
	}





	// ◇ ----- SEARCH • Find & Read Record
	public function search($table, $filter, $column, $limit = 20, $yield = 'ROWS', $sort = 'SORT') {
		if ($this->type === 'SQL') {
			$set = SQL::search($table, $filter, $column, $limit, $sort);
			return $this->prepare($this->sql($set), $yield, $this->param($set));
		}
		return false;
	}





	// ◇ ----- EXIST • Check if Record Exist » BOOLEAN
	public function exist($table, $filter, $column = 'auid') {
		if (Vars::isArray($column)) {
			if (ArrayX::isKeyNumeric($column)) {
				$column = ArrayX::firstValue($column);
			} else {
				$column = ArrayX::firstKey($column);
			}
		}
		$row = $this->search($table, $filter, $column, 1);
		if (DataQ::isRowColumn($row, $column)) {
			return true;
		}
		return false;
	}





	// ◇ ----- COUNT • Count Record Found » NUMERIC
	public function count($table, $filter, $column = 'auid') {
		return $this->search($table, $filter, $column, 'NO_LIMIT', 'COUNT', 'NO_SORT');
	}





	// ◇ ----- UPDATE • Update Record
	public function update($table, $filter, $input, $yield = 'BOOL', $limit = 1) {
		if ($this->type === 'SQL') {
			$set = SQL::update($table, $filter, $input, $limit);
			$sql = $this->sql($set);
			$param = $this->param($set);
			if ($yield === 'BOOL' || $yield === 'COUNT' || $yield === 'STRING') {
				return $this->prepare($sql, $yield, $param);
			} else {
				$update = $this->prepare($sql, 'COUNT', $param);
				if (Vars::isNumeric($update) && $update > 0) {
					if ($yield === 'ROW' || $yield === 'ROWS') {
						$column = ArrayX::keys($filter);
					} else {
						$column = $yield;
					}
					if ($limit == 1) {
						$yield = 'ROW';
					} else {
						$yield = 'ROWS';
					}
					return $this->search($table, $filter, $column, $limit, 'NO_SORT', $yield);
				}
				return $update;
			}
		}
		return false;
	}





	// ◇ ----- DELETE • Delete Record
	public function delete($table, $filter, $limit = 1, $yield = 'BOOL') {
		if ($this->type === 'SQL') {
			$set = SQL::delete($table, $filter, $limit);
			return $this->prepare($this->sql($set), $yield, $this->param($set));
		}
		return false;
	}





	// ◇ ----- ABSTRACT •
	abstract public function initialize($config = null);
	abstract public function ignite($config = null);
	abstract public function validate($object, $req);
	abstract public function connect(&$dbo = null);
	abstract public function disconnect(&$dbo = null);
	abstract public function prepare($sql, $yield, array $param = [], $dbo = null);
	abstract public function exec($sql, $dbo = null);
	abstract public function query($sql, $yield, $dbo = null);
	abstract public function multi(array $querySet, $dbo = null);
	abstract public function lastID($column = 'auid', $dbo = null);
	abstract public function commit($yield = null, $dbo = null);
	abstract public function transact($dbo = null);
	abstract public function rollback($dbo = null);

} // End Of Class ~ DBCO