<?php
class VIPModel extends AaceModel {

	// • ---- CONSTRUCT •
	public function __construct() {
		parent::__construct();
		$table = $this->oTable('vip', 'IS');
		$this->adoptTable($table);
	}

} //> end of Model ~ VIP