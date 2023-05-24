<?php
class AuthModel extends AuthO {

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





	// • ---- PATIENT-REGISTRATION •
	public function patientRegistration(array $input, $yield = 'puid') {
		SetQ::isArrayToJSON($input['hmo']);
		SetQ::isArrayToJSON($input['medical']);
		SetQ::isArrayToJSON($input['guardian']);
		SetQ::isNullOrEmpty($input['department'], 'PATIENT');
		SetQ::isNullOrEmpty($input['type'], 'STANDARD');
		return $this->oCreate($input, $yield);
	}





	// • ---- UPDATE-SESSION-USER •
	public function updateSessionUser($puid, $input, $yield = 'STRING') {
		$filter['puid'] = $puid;
		return parent::updateSessionUser($filter, $input, $yield);
	}





	// • ---- CHANGE-PASSWORD •
	public function changePassword($puid, $input, $yield = 'STRING') {
		$filter['puid'] = $puid;
		return parent::changePassword($filter, $input, $yield);
	}





	// • ---- IS-DEPARTMENT •
	public function isDepartment($department, $check = 'STRICT') {
		if ($check === 'STRICT') {
			return $this->isSessionUser('department', $department, true);
		}
		return $this->isSessionUser('department', $department, false);
	}





	// • ---- USER-APP-LANDING •
	public function userAppLanding($department = null) {
		if (!$this->isLoggedIn()) {
			return 'auth/login';
		}
		if (Vars::hasData($department)) {
			$department = strtoupper($department);
		} else {
			$department = $this->sessionUser('department');
		}
		if ($department === 'ADMIN') {
			$uri = 'admin/dashboard';
		} elseif ($department === 'PATIENT') {
			$uri = 'patient/dashboard';
		} elseif ($department === 'RECEPTION') {
			$uri = 'reception/dashboard';
		} elseif ($department === 'NURSE') {
			$uri = 'nurse/dashboard';
		} else {
			$uri = 'dashboard';
		}
		return $uri;
	}

} //> end of AuthModel