<?php
class SettingApp extends Appzr {

	// • ==== initialize →
	public function initialize() {
		AaceUtil::restrictAuth();
		$this->modelizr = new AuthModel;
		AaceUtil::cleanTitle($this->meta['title']);
		$this->setActiveUser($this->modelizr);
	}




	// • ==== landing →
	public function landing() {
		$uri = AaceUtil::link('USER_DASHBOARD');
		AaceUtil::redirect($uri);
	}









	// • ---- PROFILE-UPDATE •
	public function profileUpdate() {
		if (App::isPost()) {
			$param = ['firstname', 'middlename', 'lastname', 'phone', 'gender', 'birthdate', 'email', 'origin', 'nationality', 'nin', 'occupation', 'religion', 'contact'];
			$record = [
				'origin' => $sessionUser['origin'],
				'contact' => $sessionUser['contact']
			];
			$input = DataQ::isPost($param, $record);
			$resolve = $this->modelizr->updateSessionUser($this->activeUserPUID, $input);
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->frontend['form'] = 'user_profile-update';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- PHOTO-UPLOAD •
	public function photoUpload() {
		if (App::isPost()) {
			$input = [];
			$oldImage = $sessionUser['dp'];
			$image = null;
			if (Vars::hasData($oldImage) && $oldImage !== 'none.png') {
				$image = ORIG['CLOUD'] . 'dp' . DS . $oldImage;
			}
			Utilizr::uploadPhoto($input, 'dp', null, $image);
			$resolve = $this->modelizr->updateSessionUser($this->activeUserPUID, $input);
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Upload Photo';
		$this->frontend['form'] = 'user_photo-upload';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}






	// • ---- PROFILE-UPDATE-SIGNATURE •
	public function profileUpdateSignature() {
		if (App::isPost()) {
			$input = [];
			$oldImage = $sessionUser['sign'];
			$image = null;
			if (Vars::hasData($oldImage) && $oldImage !== 'none.png') {
				$image = ORIG['CLOUD'] . 'sign' . DS . $oldImage;
			}
			Utilizr::uploadPhoto($input, 'sign', null, $image);
			$resolve = $this->modelizr->updateSessionUser($this->activeUserPUID, $input);
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update Signature';
		$this->frontend['form'] = 'user_signature-upload';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}






	// • ---- PROFILE-UPDATE-NOK •
	public function profileUpdateNok() {
		if (App::isPost()) {
			$param = ['nok'];
			$record = ['nok' => $sessionUser['nok']];
			$input = DataQ::isPost($param, $record);
			$resolve = $this->modelizr->updateSessionUser($this->activeUserPUID, $input);
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update • Next Of KIN';
		$this->frontend['form'] = 'user_nok-update';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- PROFILE-UPDATE-GUARDIAN •
	public function profileUpdateGuardian() {
		if (App::isPost()) {
			$param = ['guardian'];
			$record = ['guardian' => $sessionUser['guardian']];
			$input = DataQ::isPost($param, $record);
			$resolve = $this->modelizr->updateSessionUser($this->activeUserPUID, $input);
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update • Guardian Information';
		$this->frontend['form'] = 'user_guardian-update';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ---- PROFILE-UPDATE-MEDICAL •
	public function profileUpdateMedical() {
		if (App::isPost()) {
			$param = ['medical'];
			$record = ['medical' => $sessionUser['medical']];
			$input = DataQ::isPost($param, $record);
			$resolve = $this->modelizr->updateSessionUser($this->activeUserPUID, $input);
			if ($resolve === 'UPDATED') {
				$uri = Link::appendSuccess();
			} else {
				$uri = Link::appendFailure();
			}
			RedirectX::instant($uri);
		}
		$this->meta['breadcrumb']['secondary'] = 'Update • Medical Information';
		$this->frontend['form'] = 'user_medical-update';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}





	// • ==== changePassword →
	public function changePassword() {
		if (App::isPost()) {
			$input = DataQ::stack(HTTPX::data('POST'), ['password', 'repassword']);
			$uri = 'auth/login';
			if ($input['password']) {
				$password = InputQ::password($input['password']);
				$resolve = $this->modelizr->updatePassword($this->activeUserPUID, $password);
				if ($resolve === 'UPDATED') {
					$uri = 'auth/login!password-changed';
				}
			}
			RedirectX::instant(AaceUtil::link($uri));
		}
		$this->frontend['form'] = 'user_password-change';
		$this->objectify();
		return DesignQ::frontend($this->designer());
	}

} //> end of SettingApp