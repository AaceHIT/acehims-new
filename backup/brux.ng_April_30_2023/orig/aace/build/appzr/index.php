<?php
class IndexApp extends Appzr {

	// • PROPERTY
	private $auth;





	// • ---- INITIALIZE •
	public function initialize() {
		$this->auth = new AuthModel;
	}





	// • ---- LANDING •
	public function landing() {
		if (!$this->auth->isLoggedIn()) {
			$uri = 'auth/login';
		} else {
			$uri = AOUtil::link('USER_DASHBOARD');
			if (Vars::noData($uri)) {
				$uri = 'dashboard';
			}
		}
		RedirectX::instant($uri);
	}

} //> end Of IndexApp