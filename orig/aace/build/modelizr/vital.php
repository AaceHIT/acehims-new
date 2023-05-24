<?php
class VitalModel extends AaceModel {

	// • ==== construct →
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('vital', 'IS');
		$this->adoptTable($table);
	}



	// • ==== static →
	public static function static() {
		return new self();
	}

} //> end of VitalModel