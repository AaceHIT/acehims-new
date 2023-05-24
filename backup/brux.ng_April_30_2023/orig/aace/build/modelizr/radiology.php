<?php
class RadiologyModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('radiology', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ Radiology