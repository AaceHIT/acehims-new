<?php
class ReceptionApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $patient;





	// • ---- INITIALIZE •
	public function initialize() {
		AaceUtil::restrictAuth();
		$this->auth = new AuthModel;
		$this->patient = new PatientModel;
		$this->meta['title'] = AaceUtil::cleanTitle($this->meta['title']);
		$this->logic['sessionUser'] = $this->auth->sessionUser('DATA');
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}

} //> end of ReceptionApp