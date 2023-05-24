<?php
//*** DatabaseTrait » Tydi™ Framework © 2023 ∞ AO™ • @iamodao • www.osawere.com ∞ Apache License ***//
trait DatabaseTrait {

	// ◇ ===== createDatabase → create database
	public function createDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::create($database, $safely);
		if (Vars::hasData($sql)) {
			return $this->dbco->exec($sql);
		}
		return false;
	}





	// ◇ ===== findDatabase → search for a database
	public function findDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::search($database);
		if (Vars::hasData($sql)) {
			return $this->dbco->query($sql, 'ROW');
		}
		return false;
	}





	// ◇ ===== isDatabase → check if database exist
	public function isDatabase($database = null, $safely = true) {
		$row = $this->findDatabase($database);
		if (!empty($row['database']) && $row['database'] == $database) {
			return true;
		}
		return false;
	}





	// ◇ ===== Adopt → search database
	public function adoptDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::adopt($database);
		if (Vars::hasData($sql)) {
			return $this->dbco->exec($sql);
		}
		return false;
	}






	// ◇ ===== Drop → delete database
	public function dropDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::drop($database, $safely);
		if (Vars::hasData($sql)) {
			return $this->dbco->exec($sql);
		}
		return false;
	}

} //> end of DatabaseTrait