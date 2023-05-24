<?php
class AaceUtil {

	// • ==== CLEAN TITLE →
	public static function cleanTitle(&$title) {
		if (isset($title) && !empty($title)) {
			$title = StringX::strip($title, 'Auth');
			$title = StringX::strip($title, ' Setting');
			// $title = StringX::swap($title, 'vip', 'VIP');
			$title = StringX::swap($title, 'hmo', 'HMO');
			// $title = StringX::swap($title, 'nok', 'NOK');

			// $title = StringX::swap($title, 'Detail Company', 'Company Information');
			// $title = StringX::swap($title, 'Detail Family', 'Family Information');
			// $title = StringX::swap($title, 'Detail VIP', 'VIP Information');
			// $title = StringX::swap($title, 'Detail HMO', 'HMO Information');
			// $title = StringX::swap($title, 'Detail Laboratory', 'Laboratory Information');
			// $title = StringX::swap($title, 'Detail Radiology', 'Radiology Information');
			// $title = StringX::swap($title, 'Detail Medicine', 'Medicine Information');

			// $title = StringX::swap($title, 'Registration Patient', 'Patient Registration');
			// $title = StringX::swap($title, 'Dashboard Patient', 'Patient Dashboard');
			// $title = StringX::swap($title, 'Profile Update Signature', 'Update Signature');
		}
		return $title;
	}




	// • ==== oAUTH →
	public static function oAuth() {
		return AuthModel::static();
	}




	// • ==== LINK →
	public static function link($uri = null, $param = null) {
		if (Vars::hasData($uri)) {
			if (App::is()) {
				if ($uri === 'USER_DASHBOARD') {
					$uri = self::oAuth()->sessionUserAppLanding();
				}
				return App::navigate($uri, $param);
			}
		}
		return PS;
	}




	// • ==== LINK TO →
	public static function linkTo($uri = null, $param = null) {
		$link = self::link($uri, $param);
		if (Vars::hasData($link)) {
			echo $link;
		}
		return true;
	}




	// • ==== REDIRECT →
	public static function redirect($uri = null, $param = null) {
		$link = self::link($uri, $param);
		if (Vars::hasData($link)) {
			RedirectX::instant($link);
		}
		return false;
	}




	// • ==== GENERATE MID  →
	public static function generateMID() {
		return 'MID' . RandomQ::digit(7);
	}



	// • ==== formElement →
	public static function formElement($req) {
		$fields = [];

		if ($req === 'CREATE_STAFF') {
			$fields = [
				'fullname', 'firstname', 'lastname', 'middlename', 'phone', 'email', 'password', 'birthdate', 'gender', 'nationality', 'nin', 'mid', 'username', 'gender', 'relationship', 'nationality',
				'bio', 'religion', 'occupation', 'family', 'vip', 'corporate', 'living', 'origin', 'hmo', 'medical', 'contact', 'guardian', 'nok', 'group',
				'department', 'type', 'flag', 'status', 'kind', 'practice', 'referrer', 'cameraPhoto'
			];
		}

		if ($req === 'LOGIN') {
			$fields = ['userid', 'password'];
		}

		if ($req === 'PATIENT_SIGNUP') {
			$fields = [
				'fullname', 'phone', 'email', 'password', 'birthdate', 'gender', 'nationality', 'nin', 'referrer'
			];
		}

		return $fields;
	}




	// • ==== formOption →
	public static function formOption($object) {
		$option = [];
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

		if ($object === 'USER_IS') {
			$option = [
				'Professional' => 'PROFESSIONAL',
				'Administrative' => 'ADMINISTRATIVE'
			];
		}

		if ($object === 'FACULTY') {
			$option = [
				'Cardiology' => 'CARDIOLOGY',
				'Diagnostic Imaging' => 'DIAGNOSTIC',
				'Ear, Nose and Throat (ENT)' => 'ENT',
				'General Surgery' => 'SURGERY',
				'Oncology' => 'ONCOLOGY',
				'Orthopaedics' => 'ORTHOPAEDICS',
				'General' => 'GENERAL'
			];
		}

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

		return $option;
	}




	// • ==== formOptionRole →
	public static function formOptionRole() {
		$option = [
			'Adhoc' => 'ADHOC',
			'Reception' => 'RECEPTION',
			'Nurse' => 'NURSE',
			'Doctor' => 'DOCTOR',
			'Radiology' => 'RADIOLOGY',
			'Laboratory' => 'LABORATORY',
			'Pharmacy' => 'PHARMACY',
			'Accountant' => 'ACCOUNTANT',
			'Cashier' => 'CASHIER',
			'Human Resource' => 'HR',
			'Professional' => 'PROFESSIONAL',
			'Admin' => 'ADMIN',
			'Referrer' => 'REFERRER'
		];
		return $option;
	}




	// • ==== formOptionReferrer →
	public static function formOptionReferrer() {
		$option = [];
		$columns = ['tuid', 'firstname', 'lastname', 'middlename', 'role'];
		$record = StaffModel::static()->findAllReferrer($columns);
		if (Vars::isNotEmptyArray($record)) {
			foreach ($record as $row) {
				$label = RecordQ::name($row['firstname'], $row['lastname'], $row['middlename']);
				$option[$label] = $row['tuid'];
			}
		}
		return $option;
	}




	// • ==== formOptionHMO →
	public static function formOptionHMO() {
		$option = [];
		$columns = ['tuid', 'title', 'acronym', 'code', 'status'];
		$record = HMOModel::static()->oFindAll($columns);
		if (Vars::isNotEmptyArray($record)) {
			foreach ($record as $row) {
				$label = $row['title'];
				$option[$label] = $row['tuid'];
			}
		}
		return $option;
	}




	// • ==== formOptionPractice →
	public static function formOptionPractice() {
		$option = [];
		$columns = ['tuid', 'title', 'acronym', 'code', 'status'];
		$record = PracticeModel::static()->oFindAll($columns);
		if (Vars::isNotEmptyArray($record)) {
			foreach ($record as $row) {
				$label = $row['title'];
				$option[$label] = $row['tuid'];
			}
		}
		return $option;
	}




	// • ==== formOptionDoctor →
	public static function formOptionDoctor() {
		$option = [];
		$record = StaffModel::static()->findAllDoctor();
		if (Vars::isNotEmptyArray($record)) {
			foreach ($record as $row) {
				$label = $row['firstname'] . ' ' . $row['lastname'];
				$option[$label] = $row['tuid'];
			}
		}
		return $option;
	}




	// • ==== sessionUser →
	public static function sessionUser($req = null) {
		if (Vars::hasData($req)) {
			return self::oAuth()->sessionUser($req);
		}
		return self::oAuth()->sessionUser('DATA');
	}




	// • ==== restrictAuth →
	public static function restrictAuth($redirect = true) {
		$isLoggedIn = self::oAuth()->isLoggedIn();
		if ($isLoggedIn === true) {
			return false;
		}
		if ($redirect) {
			RedirectX::instant(self::link('auth/login!expired'));
		}
		return true;
	}




	// • ==== staffRole →
	public static function staffRole($role, $req = null) {
		$role = StringX::swap($role, 'PATIENT', '');
		$role = StringX::swap($role, ',', ', ');
		if ($req === 'FIRST') {
			$role = StringX::crop($role, ',');
			if (StringX::contain($role, ',')) {
				$role = StringX::before($role, ',');
			}
			return $role;
		}
		return StringX::crop($role, ',');
	}




	// • ==== isRole →
	public function isRole($role, $compare) {
		if ($role == $compare) {
			return true;
		}
		return false;
	}




	// • ==== hasRole →
	public static function hasRole($role, $compare) {
		return StringX::contain($role, $compare);
	}




	// • ==== sessionUserIsMaster →
	public static function sessionUserIsMaster() {
		return self::oAuth()->isRole('MASTER');
	}




	// • ==== sessionUserHasMaster →
	public static function sessionUserHasMaster() {
		return self::oAuth()->hasRole('MASTER');
	}




	// • ==== sessionUserIsAdmin →
	public static function sessionUserIsAdmin() {
		return self::oAuth()->isRole('ADMIN');
	}




	// • ==== sessionUserHasAdmin →
	public static function sessionUserHasAdmin() {
		return self::oAuth()->hasRole('ADMIN');
	}



	// • ==== sessionUserIsDoctor →
	public static function sessionUserIsDoctor() {
		return AuthModel::static()->isRole('DOCTOR');
	}




	// • ==== sessionUserHasDoctor →
	public static function sessionUserHasDoctor() {
		return AuthModel::static()->hasRole('DOCTOR');
	}




	// • ==== sessionUserIsNurse →
	public static function sessionUserIsNurse() {
		return AuthModel::static()->isRole('NURSE');
	}




	// • ==== sessionUserHasNurse →
	public static function sessionUserHasNurse() {
		return AuthModel::static()->hasRole('NURSE');
	}




	// • ==== sessionUserIsReception →
	public static function sessionUserIsReception() {
		return AuthModel::static()->isRole('RECEPTION');
	}




	// • ==== sessionUserHasReception →
	public static function sessionUserHasReception() {
		return AuthModel::static()->hasRole('RECEPTION');
	}



	// • ==== sessionUserIsPatient →
	public static function sessionUserIsPatient() {
		return AuthModel::static()->isRole('PATIENT');
	}




	// • ==== sessionUserHasPatient →
	public static function sessionUserHasPatient() {
		return AuthModel::static()->hasRole('PATIENT');
	}




	// • ==== restrictMaster → Restrict access to master » []
	public static function restrictMaster($req = 'REDIRECT') {
		self::restrictAuth();
		if (self::sessionUserHasMaster()) {
			return false;
		}
		if ($req === 'REDIRECT') {
			return RedirectX::instant(self::link('auth/login!restricted'));
		}
		return true;
	}




	// • ==== restrictAdmin → Restrict access to admin » []
	public static function restrictAdmin($req = 'REDIRECT') {
		self::restrictAuth();
		if (self::sessionUserHasAdmin()) {
			return false;
		}
		if ($req === 'REDIRECT') {
			return RedirectX::instant(self::link('auth/login!restricted'));
		}
		return true;
	}




	// • ==== restrictPatient → Restrict access to patient » []
	public static function restrictPatient($req = 'REDIRECT') {
		self::restrictAuth();
		if (self::sessionUserHasPatient()) {
			return false;
		}
		if ($req === 'REDIRECT') {
			return RedirectX::instant(self::link('auth/login!restricted'));
		}
		return true;
	}




	// • ==== isActiveCSS →
	public static function isActiveCSS($link, $append = 'active') {
		return Utilizr::isActiveCSS($link, $append);
	}




	// • ==== isGroupCSS →
	public static function isGroupCSS($group, $display = true, $append = 'mm-collapse mm-show') {
		return Utilizr::isGroupCSS($group, $display, $append);
	}




	// • ==== staffPractice →
	public static function staffPractice($tuid, $column = 'title', $stackOne = true) {
		$result = PracticeModel::static()->oFindByBIND($tuid, $column);
		if (Vars::isNotEmptyArray($result)) {
			if ($stackOne === true) {
				return DataQ::stackOne($result, $column);
			}
		}
		if ($result !== 'NO_RESULT') {
			return $result;
		}
		return false;
	}




	// • ==== HMO →
	public static function HMO($tuid, $column = 'title') {
		$row = HMOModel::static()->oFindByBIND($tuid, $column);
		if ($row === 'NO_RESULT') {
			return false;
		} elseif (is_array($row) && count($row) == 1) {
			return ArrayX::firstValue($row);
		}
		return $row;
	}




	// • ==== userRecord →
	public static function userRecord($tuid, $column = '*') {
		$row = UserModel::static()->oFindByBIND($tuid, $column);
		if ($row === 'NO_RESULT') {
			return false;
		}
		return $row;
	}




	// • ==== userRecordName →
	public static function userRecordName($tuid) {
		$name = self::userRecord($tuid, ['firstname', 'lastname', 'middlename']);
		if (Vars::isNotEmptyArray($name)) {
			$name = RecordQ::name($name);
		}
		return $name;
	}




	// • ==== selectColumn →
	public static function selectColumn($column = []) {
		$field = ['auid', 'puid', 'suid', 'tuid', 'created', 'updated', 'entry', 'status', 'author', 'lastseen'];
		if (Vars::isNotEmptyArray($column)) {
			$field = array_merge($field, $column);
		}
		return $field;
	}




	// • ==== isRenderGet →
	public static function isRenderGet() {
		$render = DataQ::stackOne(DataQ::isGet(['render']), 'render');
		if (Vars::noData($render)) {
			$render = 'default';
		}
		return $render;
	}




	// • ==== jsSliQ →
	public static function jsSliQ($js) {
		$path = AssetQ::path('SLIQ_JS');
		$uri = Utilizr::uri(false);
		if (StringX::begin($uri, '/app/')) {
			$js = 'app.' . $js;
		}
		return $path . PS . $js;
	}

} //> end Of AaceUtil