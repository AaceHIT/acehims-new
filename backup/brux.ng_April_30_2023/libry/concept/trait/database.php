<?php
//*** Database Trait » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
// * TODO: Implement for other DB types from SQL
trait DatabaseTrait {

	// ◇ ---- createDatabase • Create Database
	public function createDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::create($database, $safely);
		if (Vars::hasData($sql)) {
			return $this->dbco->exec($sql);
		}
		return false;
	}





	// ◇ ---- findDatabase • Search for a Database
	public function findDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::search($database);
		if (Vars::hasData($sql)) {
			return $this->dbco->query($sql, 'ROW');
		}
		return false;
	}





	// ◇ ---- isDatabase • Check if Database Exist
	public function isDatabase($database = null, $safely = true) {
		$row = $this->findDatabase($database);
		if (!empty($row['database']) && $row['database'] == $database) {
			return true;
		}
		return false;
	}





	// ◇ ---- Adopt • Search Database
	public function adoptDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::adopt($database);
		if (Vars::hasData($sql)) {
			return $this->dbco->exec($sql);
		}
		return false;
	}






	// ◇ ---- Drop • Delete Database
	public function dropDatabase($database = null, $safely = true) {
		$sql = SQLDatabase::drop($database, $safely);
		if (Vars::hasData($sql)) {
			return $this->dbco->exec($sql);
		}
		return false;
	}

} // End Of Trait ~ Database