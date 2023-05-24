<?php
class IndexApp extends Appzr {

	// • ==== INITIALIZE
	public function initialize() {
		$this->modelizr = new AuthModel;
	}




	// • ==== LANDING
	public function landing() {
		if (!$this->modelizr->isLoggedIn()) {
			$uri = 'auth/login';
		} else {
			$uri = AaceUtil::link('USER_DASHBOARD');
		}
		AaceUtil::redirect($uri);
	}

} //> end Of IndexApp