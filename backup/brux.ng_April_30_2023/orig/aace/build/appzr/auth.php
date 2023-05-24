<?php
class AuthApp extends Appzr {

	// • PROPERTY
	private $auth;




	// • ---- INITIALIZE •
	public function initialize() {
		$this->auth = new AuthModel;
		$this->meta['title'] = AOUtil::cleanTitle($this->meta['title']);
		$this->frontend['layout'] = 'auth';
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AOUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}





	// • ---- PATIENT-REGISTRATION •
	public function patientRegistration() {
		if (App::isPost()) {
			$param = ['fullname', 'phone', 'email', 'password', 'birthdate', 'gender', 'nationality'];
			$input = DataQ::isPost($param);
			$resolve = $this->auth->patientRegistration($input);
			if (DataQ::isRowColumn($resolve, 'puid')) {
				$this->auth->sessionize($resolve['puid']);
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->frontend['form'] = 'auth_patient-registration';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LOGIN •
	public function login() {
		if (App::isPost()) {
			$input = DataQ::isPost(['userid', 'password']);
			$resolve = $this->auth->login($input['userid'], $input['password']);
			if ($resolve === 'ERROR_INVALID_PASSWORD' || $resolve === 'NO_RESULT') {
				$uri = Link::appendFailure();
			} elseif (DataQ::isRowColumn($resolve, 'puid')) {
				$this->auth->sessionize($resolve['puid']);
				$uri = AOUtil::link($this->auth->userAppLanding());
			}
			RedirectX::instant($uri);
		}
		$this->frontend['form'] = 'auth_login';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LOGOUT •
	public function logout() {
		$uri = 'auth/login';
		if ($this->auth->logout()) {
			$uri = 'auth/login!logout';
		}
		RedirectX::instant(AOUtil::link($uri));
	}





	// » resetPassword •
	public function resetPassword() {
		$this->frontend['form'] = 'auth_password-reset';
		if (App::isPost()) {
			$param = ['userid'];
			$input = DataQ::isPost($param);
			$errorParam = false;
			if (!$errorParam) {
			}
		}
		$this->objectify();
		$design = $this->designer();
		return DesignQ::frontend($design);
	}

} //> end of AuthApp