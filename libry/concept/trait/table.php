<?php
//*** TableTrait » Tydi™ Framework © 2023 ∞ AO™ • @iamodao • www.osawere.com ∞ Apache License ***//
trait TableTrait {

	// ◇ ===== createTable → create table
	public function createTable($table, $engine = 'InnoDB', $safely = true, $yield = 'BOOL') {
		$sql = SQLTable::create($table, $engine, $safely);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ===== findTable → find table
	public function findTable($table, $database, $yield = 'ROW') {
		$sql = SQLTable::search($table, $database);
		return $this->dbco->query($sql, $yield);
	}





	// ◇ ===== findTables → find all tables
	public function findTables($database, $yield = 'ROWS') {
		$sql = SQLTable::all($database);
		return $this->dbco->query($sql, $yield);
	}





	// ◇ ===== isTable → check for table existence » Boolean
	public function isTable($table, $database = null) {
		if (Vars::noData($database) && !empty($this->database)) {
			$database = $this->database;
		}
		$row = $this->findTable($table, $database);
		if (!empty($row['table']) && $row['table'] === $table) {
			return true;
		}
		return false;
	}





	// ◇ ===== verifyTable → verify if a table exists » [boolean, error]
	public function verifyTable($table, $database = null) {
		if (Vars::hasData($table)) {
			if (!$this->isTable($table, $database)) {
				oversight('Database', 'Unavailable Table', $table);
			}
			return true;
		}
		return false;
	}





	// ◇ ===== renameTable → rename a table
	public function renameTable($table, $rename, $yield = 'BOOL') {
		$sql = SQLTable::rename($table, $rename);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ===== reIndexTable → reset table index
	public function reIndexTable($table, $column = 'auid', $yield = 'BOOL') {
		$sql = SQLTable::reIndex($table, $column);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ===== clearTable → wipe table rows
	public function clearTable($table, $ignoreFK = true, $yield = 'BOOL') {
		$sql = SQLTable::truncate($table, $ignoreFK);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ===== adoptTable → use table »
	public function adoptTable($table = null) {
		if (Vars::hasData($table)) {
			return $this->oTable($table, 'BOTH');
		}
		return false;
	}





	// ◇ ===== dropTable → delete table
	public function dropTable($table, $safely = true, $yield = 'BOOL') {
		$sql = SQLTable::drop($table, $safely);
		return $this->dbco->exec($sql, $yield);
	}





	// ◇ ===== setupTable → setup table and data if available
	public function setupTable($table) {
		$database = $this->dbco->property('name', 'GET');
		if (!$this->isTable($table, $database)) {
			$isTableSQL = ORIG['SET'] . 'table' . DS . $table . '.php';
			if (FileX::is($isTableSQL)) {
				$isTableSetup = $this->dbco->exec(require($isTableSQL), 'BOOL');
			}

			$isTableDataSQL = ORIG['SET'] . 'data' . DS . $table . '.php';
			if (FileX::is($isTableDataSQL)) {
				$isTableDataSetup = $this->dbco->exec(require($isTableDataSQL), 'BOOL');
			}

			if ($isTableSetup === true || $isTableDataSetup === true) {
				return true;
			}
		}
		return false;
	}







	// ◇ ==== oTableCreate →
	public function oTableCreate($engine = 'InnoDB', $safely = true, $yield = 'BOOL') {
		$table = $this->oTable();
		if (Vars::hasData($table)) {
			return $this->createTable($table, $engine, $safely, $yield);
		}
		return false;
	}




	// ◇ ==== oTableDrop →
	public function oTableDrop($safely = true, $yield = 'BOOL') {
		$table = $this->oTable();
		if (Vars::hasData($table)) {
			return $this->dropTable($table, $safely, $yield);
		}
		return false;
	}


} //> end of TableTrait