<?php
class EncounterModel extends AaceModel {

	// • ==== construct →
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('encounter', 'IS');
		$this->adoptTable($table);
	}





	// • ==== static →
	public static function static() {
		return new self();
	}




	// • ==== findByAppointment →
	public function findByAppointment($tuid, $column = '*') {
		$filter['appointment'] = $tuid;
		return $this->oFindOne($filter, $column);
	}




	// • ==== findAllByPatient →
	public function findAllByPatient($tuid, $column = '*') {
		$filter['patient'] = $tuid;
		return $this->oFindEvery($filter, $column);
	}



	// • ==== findAllByNurse →
	public function findAllByNurse($tuid, $column = '*') {
		$filter['nurse'] = $tuid;
		return $this->oFindEvery($filter, $column);
	}




	// • ==== findAllByConsultant →
	public function findAllByConsultant($tuid, $column = '*') {
		$filter['consultant'] = $tuid;
		return $this->oFindEvery($filter, $column);
	}




	// • ==== findAllByPractice →
	public function findAllByPractice($tuid, $column = '*') {
		$filter['practice'] = $tuid;
		return $this->oFindEvery($filter, $column);
	}




	// • ==== findAllLikeComplaint →
	public function findAllLikeComplaint($keyword, $column = '*') {
		$filter = "WHERE `complaint` LIKE '%{$keyword}%'";
		return $this->oFindEvery($filter, $column);
	}

} //> end of EncounterModel
