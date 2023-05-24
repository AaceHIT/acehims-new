<?php
class DashboardApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $patient;





	// • ---- INITIALIZE •
	public function initialize() {
		AOUtil::restrictAuth();
		$this->auth = new AuthModel;
		$this->patient = new PatientModel;
		$this->logic['activeUser'] = $this->auth->sessionUser('DATA');
		$this->meta['title'] = AOUtil::cleanTitle($this->meta['title']);
	}





	// • ---- LANDING •
	public function landing() {
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of Organizr ~ DashboardApp