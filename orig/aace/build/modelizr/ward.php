<?php
class WardModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('ward', 'IS');
		$this->adoptTable($table);
	}




	// • ---- STATIC •
	public static function static() {
		return new self();
	}

} //> end of Model ~ Ward