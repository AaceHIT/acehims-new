<?php
class HMOModel extends AaceModel {

	// • ==== construct →
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('hmo', 'IS');
		$this->adoptTable($table);
	}





	// • ==== static →
	public static function static() {
		return new self();
	}

} //> end of HMOModel