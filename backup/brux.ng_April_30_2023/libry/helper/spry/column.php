<?php
//*** ColumnQ - User Class » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class ColumnQ {

	// ◇ ---- AUTH • User Auth
	public static function auth($column) {
		if ($column === 'AUTH') {
			$column = ['puid', 'tuid', 'suid', 'luid', 'phone', 'username', 'email', 'password', 'verified', 'type', 'status', 'flag', 'kind', 'department', 'lastseen', 'saas', 'otp'];
		} elseif ($column === 'RECORD') {
			$column = ['puid', 'phone', 'username', 'email', 'type', 'status', 'flag', 'kind', 'department'];
		}
		return $column;
	}





	// ◇ ---- PROFILE • User Profile
	public static function profile($column) {
		if ($column === 'PROFILE') {
			$column = ['puid', 'oauthid', 'brand', 'firstname', 'lastname', 'middlename', 'dob', 'gender', 'relationship', 'nationality', 'living', 'bio', 'dp', 'cp'];
		} elseif ($column === 'RECORD') {
			$column = ['brand', 'firstname', 'lastname', 'middlename', 'dob', 'gender', 'relationship', 'nationality', 'bio', 'dp', 'cp'];
		}
		return $column;
	}

} //> End Of Class ~ ColumnQ