<?php
class StaffApp extends Appzr {

	// • PROPERTY
	private $auth;
	private $staff;





	// • ---- INITIALIZE •
	public function initialize() {
		AaceUtil::restrictAdmin();
		$this->auth = new AuthModel;
		$this->staff = new StaffModel;
		$this->meta['title'] = AaceUtil::cleanTitle($this->meta['title']);
		$this->logic['sessionUser'] = $this->auth->sessionUser('DATA');
	}





	// • ---- LANDING •
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		RedirectX::instant($uri);
	}





	// • ---- CREATE •
	public function create() {
		if (App::isPost()) {
			$param = [
				'fullname', 'firstname', 'lastname', 'middlename', 'phone', 'email', 'password', 'birthdate', 'gender', 'nationality', 'nin', 'mid', 'username', 'gender', 'relationship', 'nationality',
				'bio', 'religion', 'occupation', 'family', 'vip', 'corporate', 'living', 'origin', 'hmo', 'medical', 'contact', 'guardian', 'nok', 'group',
				'department', 'type', 'flag', 'status', 'kind', 'role', 'referrer', 'cameraPhoto'
			];
			$input = DataQ::isPost($param);
			Utilizr::uploadCameraOrPhoto($input, 'dp', ['base64' => 'cameraPhoto']);
			$input['author'] = $this->logic['sessionUser']['tuid'];
			if ($this->staff->oCreate($input, 'BOOL')) {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Create Staff';
		$this->frontend['form'] = 'create_staff';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of StaffApp