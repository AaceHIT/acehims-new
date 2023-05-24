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





	// • ---- CHANGE-PASSWORD •
	public function changePassword($puid, $password) {
		$filter['puid'] = $puid;
		return parent::updatePassword($filter, $password);
	}

} //> end of Model ~ User