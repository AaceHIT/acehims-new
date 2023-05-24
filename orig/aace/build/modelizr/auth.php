<?php
class AuthModel extends AuthO {

	// • ==== construct →
	public function __construct() {
		$dba = Env::property('config')['database']['aace'];
		if (Vars::noData($dba)) {
			oversight(__CLASS__, 'configuration error');
		}
		$this->connect($dba);
		parent::__construct('user');
	}




	// • ==== static →
	public static function static() {
		return new self();
	}




	// • ==== patientSignup →
	public function patientSignup(array $input, $yield = 'puid') {
		SetQ::isArrayToJSON($input['hmo']);
		SetQ::isArrayToJSON($input['medical']);
		SetQ::isArrayToJSON($input['guardian']);
		SetQ::isNullOrEmpty($input['role'], 'PATIENT');
		SetQ::isNullOrEmpty($input['type'], 'STANDARD');
		SetQ::isNullOrEmpty($input['mid'], AaceUtil::generateMID());
		return $this->oCreate($input, $yield);
	}




	// • ==== updatePassword →
	public function updatePassword($puid, $input, $yield = 'STRING') {
		$filter['puid'] = $puid;
		return parent::changePassword($filter, $input, $yield);
	}








	// • ---- UPDATE-SESSION-USER •
	public function updateSessionUser($puid, $input, $yield = 'STRING') {
		$filter['puid'] = $puid;
		return parent::updateSessionUser($filter, $input, $yield);
	}















} //> end of AuthModel