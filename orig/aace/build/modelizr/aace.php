<?php
class AaceModel extends DatabaseAbstract {

	// • use
	use ModelizrTrait;




	// • ==== construct →
	public function __construct() {
		$dba = Env::property('config')['database']['aace'];
		if (Vars::noData($dba)) {
			oversight(__CLASS__, 'configuration error');
		}
		$this->connect($dba);
	}

} //> end of Model ~ Aace