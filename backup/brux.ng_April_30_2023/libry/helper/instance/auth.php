<?php
//*** AuthO - Authentication » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
require_once(LIBRY['INSTANCE'] . 'user.php');
class AuthO extends UserO {

	// ◇ ---- LOGIN •
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





	// ◇ ---- SESSIONIZE •
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





	// ◇ ---- IS-LOGGED-IN •
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





	// ◇ ---- CHANGE-PASSWORD •
	public function changePassword($filter, $password, $yield = 'STRING') {
		if (!$this->isLoggedIn()) {
			return false;
		}
		return parent::changePassword($filter, $password, $yield);
	}





	// ◇ ---- SESSION-USER •
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

			// » OUTPUT
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





	// ◇ ---- IS-SESSION-USER •
	public function isSessionUser($req, $value, $strict = false) {
		if (!$this->isLoggedIn()) {
			return false;
		}

		// » for department
		if ($req === 'department') {
			$department = $this->sessionUser('department');
			if (!$strict) {
				return StringX::contain($department, $value);
			} elseif ($department === $value) {
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





	// ◇ ---- UPDATE-SESSION-USER •
	public function updateSessionUser($filter, $input, $yield = 'STRING') {
		if (!$this->isLoggedIn()) {
			return false;
		}
		return $this->oUpdateOne($filter, $input, $yield);
	}





	// ◇ ---- LOGOUT •
	public function logout() {
		if (isset($_SESSION['SessionUserID'])) {
			unset($_SESSION['SessionUserID']);
		}
		if (isset($_SESSION['SessionUserFilter'])) {
			unset($_SESSION['SessionUserFilter']);
		}
		return true;
	}

} //> end of AuthO