<?php
class PatientModel extends AaceModel {

	// • ==== construct →
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('user', 'IS');
		$this->adoptTable($table);
	}




	// • ==== static →
	public static function static() {
		return new self();
	}



	// • ==== findMedical→
	public function findMedical($filter) {
		$column = AaceUtil::selectColumn(['medical']);
		return $this->oFindOne($filter, $column);
	}




	// • ==== findMedicalByPatientID →
	public function findMedicalByPatientID($puid) {
		$column = AaceUtil::selectColumn(['medical']);
		return $this->oFindByID($puid, $column);
	}



	// • ==== findMedicalByPatientBIND →
	public function findMedicalByPatientBIND($tuid) {
		$column = AaceUtil::selectColumn(['medical']);
		return $this->oFindByBIND($tuid, $column);
	}





	// • ==== createPatient →
	public function createPatient(array $input, $yield) {
		SetQ::isArrayToJSON($input['hmo']);
		SetQ::isArrayToJSON($input['medical']);
		SetQ::isArrayToJSON($input['guardian']);
		SetQ::isNullOrEmpty($input['role'], 'PATIENT');
		SetQ::isNullOrEmpty($input['type'], 'STANDARD');
		SetQ::isNullOrEmpty($input['kind'], 'PERSON');
		SetQ::isNullOrEmpty($input['mid'], AaceUtil::generateMID());
		SetQ::isNullOrEmpty($input['username'], RandomQ::username(8));
		if (ArrayX::isNotKeyOrEmpty($input, 'password')) {
			$input['password'] = RandomQ::password();
			$input['flag'] = 'PASSWORD_GENERATED';
		}
		SetQ::isKeyNotEmptyReplace($input, 'password', CryptX::password($input['password']));
		return $this->oCreate($input, $yield);
	}




	// • ---- FIND ALL •
	public function findAll($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` LIKE "%PATIENT%"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}




	// • ---- FIND ALL IPD •
	public function findAllIPD($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` LIKE "%PATIENT%" AND `patient` = "IPD"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}




	// • ---- FIND ALL OPD •
	public function findAllOPD($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` LIKE "%PATIENT%" AND `patient` = "OPD"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}




	// • ---- FIND ALL ANTENATAL •
	public function findAllANT($column = '*', $sort = 'SORT') {
		$filter = 'WHERE `role` LIKE "%PATIENT%" AND `patient` = "ANTENATAL"';
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}




	// • ---- FILTER PATIENT ID •
	public function filterPatientID($patientID) {
		if (StringX::begin($patientID, 'MID')) {
			$filter['mid'] = $patientID;
		} else {
			$filter = $this->filterUserID($patientID);
		}
		return $filter;
	}




	// • ---- FAMILY •
	public function family($patientID, $column = '*') {
		$filter = $this->filterPatientID($patientID);
	}

} //> end of Model ~ Patient