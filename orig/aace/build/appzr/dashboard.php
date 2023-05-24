<?php
class DashboardApp extends Appzr {

	// • PROPERTY
	// private $patient;




	// • ==== INITIALIZE →
	public function initialize() {
		AaceUtil::restrictAuth();
		$this->modelizr = new AuthModel;
		$this->setActiveUser ($this->modelizr);
		AaceUtil::cleanTitle($this->meta['title']);
	}




	// • ==== LANDING →
	public function landing() {
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of DashboardApp