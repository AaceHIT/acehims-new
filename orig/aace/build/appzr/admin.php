<?php
class AdminApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $patient;




	// • ---- INITIALIZE •
	public function initialize() {
		if (!AaceUtil::restrictAdmin()) {
			$this->auth = new AuthModel;
			$this->patient = new PatientModel;
			$this->setActiveUser($this->auth);
			$this->meta['title'] = AaceUtil::cleanTitle($this->meta['title']);
		}
	}




	// • ==== LANDING →
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		AaceUtil::redirect($uri);
	}

} //> end of AdminApp