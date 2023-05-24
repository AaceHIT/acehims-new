<?php
class AppointmentApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $appointment;





	// • ---- INITIALIZE •
	public function initialize() {
		AaceUtil::restrictAuth();
		$this->auth = new AuthModel;
		$this->appointment = new AppointmentModel;
		$this->meta['title'] = AaceUtil::cleanTitle($this->meta['title']);
		$this->logic['sessionUser'] = $this->auth->sessionUser('DATA');
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}





	// • ---- DASHBOARD •
	public function dashboard() {
		AaceUtil::restrictPatient();
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- SCHEDULE •
	public function schedule() {
		if (App::isPost()) {
			$param = [
				'department', 'appointee', 'patient', 'purpose', 'complaint', 'condition',
				'priority', 'remark', 'referrer', 'channel', 'date', 'practice', 'schedule'
			];
			$input = DataQ::isPost($param);
			$input['author'] = $this->logic['sessionUser']['tuid'];
			if ($this->appointment->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Schedule Appointment';
		$this->frontend['form'] = 'create_appointment';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- LIST •
	public function list() {
		$filter = DataQ::isGet(['patient']);
		$patient = DataQ::stackOne($filter, 'patient');
		if (Vars::isNotEmpty($patient)) {
			$record = $this->appointment->findAllByPatient($patient);
		} else {
			$record = $this->appointment->oFindAll();
		}
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'appointment';
		$this->meta['breadcrumb']['secondary'] = 'List of Appointment';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}



	public function today() {
		$filter = 'WHERE DATE(`schedule`) = CURDATE()';
		$record = $this->appointment->oFindEvery($filter);
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'appointment';
		$this->meta['breadcrumb']['secondary'] = 'List of Appointments';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	public function requested() {
		$filter['status'] = 'REQUESTED';
		$record = $this->appointment->oFindEvery($filter);
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'appointment';
		$this->meta['breadcrumb']['secondary'] = 'List of Appointments';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}



	public function confirmed() {
		$filter['status'] = 'CONFIRMED';
		$record = $this->appointment->oFindEvery($filter);
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'appointment';
		$this->meta['breadcrumb']['secondary'] = 'List of Confirmed Appointments';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}




	public function completed() {
		$filter['status'] = 'ENCOUNTERED';
		$record = $this->appointment->oFindEvery($filter);
		if ($record === 'NO_RESULT') {
			$this->logic['norecord'] = true;
		}
		$this->content['record'] = $record;
		$this->frontend['table'] = 'appointment';
		$this->meta['breadcrumb']['secondary'] = 'List of Completed Appointments';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of AppointmentApp