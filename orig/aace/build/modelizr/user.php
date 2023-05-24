<?php
class UserModel extends UserO {

	// • ---- CONSTRUCT •
	public function __construct() {
		$dba = Env::property('config')['database']['aace'];
		if (Vars::noData($dba)) {
			oversight(__CLASS__, 'configuration error');
		}
		$this->connect($dba);
		parent::__construct('user');
	}





	// • ---- STATIC •
	public static function static() {
		return new self();
	}

} //> end of UserModel