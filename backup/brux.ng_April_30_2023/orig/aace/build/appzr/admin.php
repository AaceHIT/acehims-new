<?php
class AdminApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $patient;





	// • ---- INITIALIZE •
	public function initialize() {
		AOUtil::restrictAuthToAdmin();
		$this->auth = new AuthModel;
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
	// public function dashboard() {
	// 	$this->objectify();
	// 	return DesignQ::frontend($this->designer());
	// }

} //> end of AdminApp