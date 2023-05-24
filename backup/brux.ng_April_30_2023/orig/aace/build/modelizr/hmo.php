<?php
class HMOModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('hmo', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ HMO