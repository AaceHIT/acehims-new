<?php
class AppointmentModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('appointment', 'IS');
		$this->adoptTable($table);
	}





	// • ---- STATIC •
	public static function static() {
		return new self();
	}




	public function findAllByPatient($PatientTUID, $column = '*') {
		$filter['patient'] = $PatientTUID;
		return $this->oFindEvery($filter, $column);
	}

} //> end of AppointmentModel
