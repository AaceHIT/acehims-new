<?php
class StaffModel extends UserO {

	// • ==== construct →
	public function __construct() {
		$dba = Env::property('config')['database']['aace'];
		if (Vars::noData($dba)) {
			oversight(__CLASS__, 'configuration error');
		}
		$this->connect($dba);
		parent::__construct('user');
	}




	// • ==== static →
	public static function static() {
		return new self();
	}




 // • ==== findAllReferrer →
	public function findAllReferrer($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%REFERRER%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}












	// • ---- FIND ALL •
	public function findAll($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}





	// • ---- FIND ALL DOCTOR •
	public function findAllDoctor($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%DOCTOR%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}




	// • ---- FIND ALL NURSE •
	public function findAllNurse($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%NURSE%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}





	// • ---- FIND ALL PHARMACIST •
	public function findAllPharmacist($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%PHARMACY%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}





	// • ---- FIND ALL LABORATORIST •
	public function findAllLaboratorist($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%LABORATORY%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}




	// • ---- FIND ALL RADIOLOGY •
	public function findAllRadiologist($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%RADIOLOGY%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}





	// • ---- FIND ALL ACCOUNTANT •
	public function findAllAccountant($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%ACCOUNTANT%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}





	// • ---- FIND ALL RECEPTIONIST •
	public function findAllReceptionist($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` <> "PATIENT" AND `role` LIKE "%RECEPTION%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}



} //> end of StaffModel