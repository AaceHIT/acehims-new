<?php
class AuthApp extends Appzr {

	// • ==== initialize →
	public function initialize() {
		$this->modelizr = new AuthModel;
		AaceUtil::cleanTitle($this->meta['title']);
		$this->setLayout('auth');
	}




	// • ==== landing →
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		AaceUtil::redirect($uri);
	}















	// • ==== PASSWORD LOST →
	public function passwordLost() {
		if (App::isPost()) {
			$param = ['userid'];
			$input = DataQ::isPost($param);
		}
		$this->setForm('auth_password_lost');
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ==== LOGIN →
	public function login() {
		if (App::isPost()) {
			$param = AaceUtil::formElement('LOGIN');
			$input = DataQ::isPost($param);
			$resolve = $this->modelizr->login($input['userid'], $input['password']);
			if ($resolve === 'ERROR_INVALID_PASSWORD' || $resolve === 'NO_RESULT') {
				$uri = Link::appendFailure();
			} elseif (DataQ::isRowColumn($resolve, 'puid')) {
				$this->modelizr->sessionize($resolve['puid']);
				$uri = $this->modelizr->sessionUserAppLanding();
			}
			AaceUtil::redirect($uri);
		}
		$this->setForm('auth_login');
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	// • ==== LOGOUT →
	public function logout() {
		$uri = 'auth/login';
		if ($this->modelizr->logout()) {
			$uri = 'auth/login!logout';
		}
		AaceUtil::redirect($uri);
	}




	// • ==== PATIENT SIGNUP →
	public function signupPatient() {
		if (App::isPost()) {
			$param = AaceUtil::formElement('PATIENT_SIGNUP');
			$input = DataQ::isPost($param);
			$resolve = $this->modelizr->patientSignup($input);
			if (DataQ::isRowColumn($resolve, 'puid')) {
				$this->modelizr->sessionize($resolve['puid']);
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->frontend['form'] = 'auth_signup_patient';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of AuthApp