<?php
class FamilyModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('family', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ Family