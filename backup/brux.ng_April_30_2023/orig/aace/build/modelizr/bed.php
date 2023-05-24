<?php
class BedModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('bed', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ Bed