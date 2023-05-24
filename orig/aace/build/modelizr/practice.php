<?php
class PracticeModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('practice', 'IS');
		$this->adoptTable($table);
	}




	// • ---- STATIC •
	public static function static() {
		return new self();
	}

} //> end of PracticeModel