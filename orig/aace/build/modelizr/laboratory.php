<?php
class LaboratoryModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('laboratory', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ Laboratory