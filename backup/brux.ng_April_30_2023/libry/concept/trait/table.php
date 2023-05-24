<?php
//*** Table Trait » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
trait TableTrait {
	// * TODO: Implement for other DB types from SQL

	// ◇ ---- Create Table •
	public function createTable($table, $engine = 'InnoDB', $safely = true, $yield = 'BOOL') {
		$sql = SQLTable::create($table, $engine, $safely);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ---- Find Table • Find a Table
	public function findTable($table, $database, $response = 'ROW') {
		$sql = SQLTable::search($table, $database);
		return $this->dbco->query($sql, $response);
	}





	// ◇ ---- Find All • Find all Tables
	public function findAllTable($database) {
		$sql = SQLTable::all($database);
		return $this->dbco->query($sql, 'ROWS');
	}





	// ◇ ---- isTable •
	public function isTable($table, $database = null) {
		if (Vars::noData($database) && Vars::is($this->database)) {
			$database = $this->database;
		}
		$row = $this->findTable($table, $database);
		if (!empty($row['table']) && $row['table'] === $table) {
			return true;
		}
		return false;
	}





	// ◇ ---- verifyTable •
	public function verifyTable($table, $database = null) {
		if (Vars::hasData($table)) {
			if (!$this->isTable($table, $database)) {
				oversight('Database', 'Unavailable Table', $table);
			}
			return true;
		}
		return false;
	}





	// ◇ ---- rename • Rename Table
	public function renameTable($table, $rename, $yield = 'BOOL') {
		$sql = SQLTable::rename($table, $rename);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ---- reIndex • Reset Table Index
	public function reIndexTable($table, $column = 'auid', $yield = 'BOOL') {
		$sql = SQLTable::reIndex($table, $column);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ---- clear • Truncate/Clear Table
	public function clearTable($table, $ignoreFK = true, $yield = 'BOOL') {
		$sql = SQLTable::truncate($table, $ignoreFK);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ---- Adopt •
	public function adoptTable($table = null) {
		if (Vars::hasData($table)) {
			return $this->oTable($table, 'BOTH');
		}
		return false;
	}





	// ◇ ---- Drop • Delete Table
	public function dropTable($table, $safely = true, $yield = 'BOOL') {
		$sql = SQLTable::drop($table, $safely);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ----- oSETUP •
	public function oSetup($table) {
		$database = $this->dbco->property('name', 'GET');
		if (!$this->isTable($table, $database)) {
			$install = ORIG['SET'] . 'table' . DS . $table . '.php';
			if (FileX::is($install)) {
				$this->dbco->exec(require($install));
			}

			$data = ORIG['SET'] . 'data' . DS . $table . '.php';
			if (FileX::is($data)) {
				$this->dbco->exec(require($data));
			}
		}
		return true;
	}

} // End Of Trait ~ Table