<?php
class AOUtil {

	// • PROPERTY
	public static $codify;
	protected static $initLink;




	// • ---- CALL-STATIC •
	// public static function __callStatic($method, $argument) {
	// 	$instance = new AaceModel;
	// 	if (method_exists($instance, $method)) {
	// 		if (Vars::isNotEmptyArray($argument)) {
	// 			return $instance->$method(...$argument);
	// 		}
	// 		return $instance->{$method}();
	// 	}
	// 	return oversight(__CLASS__, 'Method Statically Unreachable', $method);
	// }




	// • ---- INIT •
	// public static function init() {
	// 	return new AaceModel;
	// }





	// • ---- CLEAN-TITLE •
	public static function cleanTitle(&$title) {
		if (isset($title) && !empty($title)) {
			$title = StringX::strip($title, 'Auth');
			$title = StringX::strip($title, ' Setting');
			$title = StringX::swap($title, 'vip', 'VIP');
			$title = StringX::swap($title, 'hmo', 'HMO');
			$title = StringX::swap($title, 'nok', 'NOK');

			$title = StringX::swap($title, 'Detail Company', 'Company Information');
			$title = StringX::swap($title, 'Detail Family', 'Family Information');
			$title = StringX::swap($title, 'Detail VIP', 'VIP Information');
			$title = StringX::swap($title, 'Detail HMO', 'HMO Information');
			$title = StringX::swap($title, 'Detail Laboratory', 'Laboratory Information');
			$title = StringX::swap($title, 'Detail Radiology', 'Radiology Information');
			$title = StringX::swap($title, 'Detail Medicine', 'Medicine Information');

			$title = StringX::swap($title, 'Registration Patient', 'Patient Registration');
			$title = StringX::swap($title, 'Dashboard Patient', 'Patient Dashboard');
			$title = StringX::swap($title, 'Profile Update Signature', 'Update Signature');

			// $title = StringX::swap($title, 'Plus -', '-');
		}
		return $title;
	}





	// • ---- LINK •
	public static function link($uri = null, $param = null) {
		if (Vars::hasData($uri)) {
			if (App::is()) {
				if ($uri === 'USER_DASHBOARD') {
					$uri = AuthModel::static()->userAppLanding();
				}
				return App::navigate($uri, $param);
			}
		}
		return PS;
	}





	// • ---- LINK-TO •
	public static function linkTo($uri = null, $param = null) {
		echo self::link($uri, $param);
		return true;
	}





	// • ---- IS-ACTIVE-CSS •
	public static function isActiveCSS($link, $append = 'active') {
		return Utilizr::isActiveCSS($link, $append);
	}





	// • ---- IS-GROUP-CSS •
	public static function isGroupCSS($group, $display = true, $append = 'mm-collapse mm-show') {
		return Utilizr::isGroupCSS($group, $display, $append);
	}





	// • ---- SESSION-USER •
	public static function sessionUser($req = null) {
		if (Vars::hasData($req)) {
			return AuthModel::static()->sessionUser($req);
		}
		return AuthModel::static()->sessionUser('DATA');
	}





	// • ---- RESTRICT-AUTH •
	public static function restrictAuth($redirect = true) {
		$isLoggedIn = AuthModel::static()->isLoggedIn();
		if ($isLoggedIn === true) {
			return false;
		}
		if ($redirect) {
			RedirectX::instant(self::link('auth/login!expired'));
		}
		return true;
	}





	// • ---- RESTRICT-AUTH-TO-PATIENT •
	public static function restrictAuthToPatient($redirect = true) {
		self::restrictAuth();
		$department = AuthModel::static()->sessionUser('department');
		if ($department === 'PATIENT') {
			return false;
		}
		if ($redirect) {
			return RedirectX::instant(self::link('auth/login!restricted'));
		}
		return true;
	}





	// • ---- RESTRICT-AUTH-TO-ADMIN •
	public static function restrictAuthToAdmin($redirect = true) {
		self::restrictAuth();
		$department = AuthModel::static()->sessionUser('department');
		if ($department === 'ADMIN') {
			return false;
		}
		if ($redirect) {
			return RedirectX::instant(self::link('auth/login!restricted'));
		}
		return true;
	}





	// • ---- FORM-OPTION
	public static function formOption($object) {
		$option = [];

		if ($object === 'GROUP') {
			$option = [
				'Individual' => 'Individual',
				'Corporate' => 'Corporate',
				'Family' => 'Family',
				'VIP' => 'VIP'
			];
		}


		if ($object === 'WARD') {
			$init = new WardModel;
			$columns = ['tuid', 'title', 'acronym', 'code', 'status'];
			$record = $init->oFindAll($columns);
			if (Vars::isNotEmptyArray($record)) {
				foreach ($record as $row) {
					$label = $row['title'];
					$option[$label] = $row['tuid'];
				}
			}
		}


		if ($object === 'HMO') {
			$init = new HMOModel;
			$columns = ['tuid', 'title', 'acronym', 'code', 'status'];
			$record = $init->oFindAll($columns);
			if (Vars::isNotEmptyArray($record)) {
				foreach ($record as $row) {
					$label = $row['title'];
					$option[$label] = $row['tuid'];
				}
			}
		}

		if ($object === 'HMO_PLAN') {
			$option = [
				'BRONZE' => 'BRONZE',
				'SILVER' => 'SILVER',
				'GOLD' => 'GOLD',
				'PLATINUM' => 'PLATINUM',
			];
		}


		if ($object === 'MEDICINE_STORAGE') {
			$option = [
				'Room Temperature' => 'ROOM_TEMPERATURE',
				'Fridge' => 'FRIDGE',
				'Shelf' => 'SHELF',
				'Injection' => 'INJECTION',
				'Dispensary' => 'DISPENSARY'
			];
		}

		if ($object === 'MEDICINE_TYPE') {
			$option = [
				'Syrup' => 'SYRUP',
				'Capsule' => 'CAPSULE',
				'Tablet' => 'TABLET',
				'Injection' => 'INJECTION',
				'Cream' => 'CREAM',
			];
		}

		return $option;
	}

} //> end of AOUtil