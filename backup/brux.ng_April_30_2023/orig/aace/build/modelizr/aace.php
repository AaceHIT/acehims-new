<?php
class AaceModel extends DatabaseAbstract {

	// • USE
	use ModelizrTrait;




	// • ---- CONSTRUCT •
	public function __construct() {
		$dba = Env::property('config')['database']['aace'];
		if (Vars::noData($dba)) {
			oversight(__CLASS__, 'configuration error');
		}
		$this->connect($dba);
	}

} //> end of Model ~ Aace