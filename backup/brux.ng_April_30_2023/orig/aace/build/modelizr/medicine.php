<?php
class MedicineModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('medicine', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ Medicine