<?php
class CompanyModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('company', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ Company