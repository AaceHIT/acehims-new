<?php
class PatientModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('user', 'IS');
		$this->adoptTable($table);
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