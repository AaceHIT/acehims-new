<?php
class PatientApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $patient;





	// • ---- INITIALIZE •
	public function initialize() {
		$this->auth = new AuthModel;
		AOUtil::restrictAuth();
		$this->patient = new PatientModel;
		$this->meta['title'] = AOUtil::cleanTitle($this->meta['title']);
		$this->logic['sessionUser'] = $this->auth->sessionUser('DATA');
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AOUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}





	// • ---- DASHBOARD •
	public function dashboard() {
		AOUtil::restrictAuthToPatient();
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of PatientApp