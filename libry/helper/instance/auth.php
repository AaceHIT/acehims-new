<?php
//*** AuthO - Authentication » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
require_once(LIBRY['INSTANCE'] . 'user.php');
class AuthO extends UserO {







	// ◇ ---- CHANGE-PASSWORD •
	public function changePassword($filter, $password, $yield = 'STRING') {
		if (!$this->isLoggedIn()) {
			return false;
		}
		return parent::changePassword($filter, $password, $yield);
	}





	// ◇ ---- IS-SESSION-USER •
	public function isSessionUser($req, $value, $strict = false) {
		if (!$this->isLoggedIn()) {
			return false;
		}

		// » for role
		if ($req === 'role') {
			$role = $this->sessionUser('role');
			if (!$strict) {
				return StringX::contain($role, $value);
			} elseif ($role === $value) {
				return true;
			}
		}

		// » FOR OTHERS
		else {
			$sessionUser = $this->sessionUser('DATA');

			if (isset($sessionUser[$req])) {
				if (!$strict) {
					if ($sessionUser[$req] == $value) {
						return true;
					}
				} else {
					if ($sessionUser[$req] === $value) {
						return true;
					}
				}
			}

		}
		return false;
	}







	// ◇ ==== isFlag → tag • ... » []
	public function isFlag($req) {
		return $this->isSessionUser('flag', $req, true);
	}







	// ◇ ---- UPDATE-SESSION-USER •
	public function updateSessionUser($filter, $input, $yield = 'STRING') {
		if (!$this->isLoggedIn()) {
			return false;
		}
		return $this->oUpdateOne($filter, $input, $yield);
	}











	// ◇ ==== login →
	public function login($userID, $password) {
		SetQ::isNullOrEmpty($userid, null);
		SetQ::isNullOrEmpty($password, null);
		$user = $this->oFindByUserID($userID, 'AUTH');
		if (DataQ::isRowColumn($user, 'password')) {
			if (!CryptX::isPassword($password, $user['password'])) {
				return 'ERROR_INVALID_PASSWORD';
			}
			SetQ::keyDrop($user, 'password');
		}
		return $user;
	}




	// ◇ ==== logout →
	public function logout() {
		if (isset($_SESSION['SessionUserID'])) {
			unset($_SESSION['SessionUserID']);
		}
		if (isset($_SESSION['SessionUserFilter'])) {
			unset($_SESSION['SessionUserFilter']);
		}
		return true;
	}




	// ◇ ==== sessionize →
	public function sessionize($id, $type = 'PUID') {
		$user = [];
		if ($type === 'PUID') {
			$user = $this->oFindByID($id);
		}
		if (DataQ::isRowColumn($user, strtolower($type))) {
			$_SESSION['SessionUserID'] = $user[strtolower($type)];
			$_SESSION['SessionUserFilter'] = $type;
			return true;
		}
		return false;
	}




	// ◇ ==== isLoggedIn →
	public function isLoggedIn() {
		if (!empty($_SESSION['SessionUserID']) && !empty($_SESSION['SessionUserFilter'])) {
			if ($_SESSION['SessionUserFilter'] === 'PUID') {
				$user = $this->oFindByID($_SESSION['SessionUserID'], 'puid');
				if (DataQ::isRowColumn($user, 'puid')) {
					return true;
				}
			}
		}
		return false;
	}




	// ◇ ==== sessionUser →
	public function sessionUser($req) {
		if (!$this->isLoggedIn()) {
			return false;
		} else {
			if ($_SESSION['SessionUserFilter'] === 'PUID') {
				$sessionUser = $this->oFindByID($_SESSION['SessionUserID']);
				if (Vars::isNotEmptyArray($sessionUser)) {
					$sessionUser['name'] = RecordQ::name($sessionUser['firstname'], $sessionUser['lastname']);
					$sessionUser['fullname'] = RecordQ::name($sessionUser['firstname'], $sessionUser['lastname'], $sessionUser['middlename']);
					SetQ::isNullOrEmpty($sessionUser['dp'], 'none.png');
					SetQ::keyDrop($sessionUser, 'password');
				}
			}

			// » output
			if ($req === 'DATA') {
				return $sessionUser;
			} elseif (Vars::isString($req) && ArrayX::isKey($sessionUser, $req)) {
				return $sessionUser[$req];
			} elseif (Vars::isArray($req)) {
				$row = [];
				foreach ($req as $key) {
					if (ArrayX::isKey($sessionUser, $key)) {
						$row[$key] = $sessionUser[$key];
					}
				}
				return $row;
			}
		}

		return false;
	}




	// ◇ ==== sessionUserRole →
	public function sessionUserRole() {
		return $this->sessionUser('role');
	}




	// ◇ ==== sessionUserAppLanding →
	public function sessionUserAppLanding($appendRole = false) {
		if (!Route::isApp()) {
			return false;
		}
		if (!$this->isLoggedIn()) {
			return 'auth/login';
		}
		$uri = 'dashboard';
		if ($appendRole) {
			$uri = strtolower($this->sessionUserRole()) . '/dashboard';
		}
		return $uri;
	}




	// ◇ ==== isRole →
	public function isRole($role) {
		return $this->isSessionUser('role', $role, true);
	}




	// ◇ ==== hasRole →
	public function hasRole($role) {
		return $this->isSessionUser('role', $role, false);
	}

} //> end of AuthO