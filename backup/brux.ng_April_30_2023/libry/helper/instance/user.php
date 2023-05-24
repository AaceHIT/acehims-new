<?php
//*** UserO » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class UserO extends DatabaseAbstract {

	// ◇ USE
	use ModelizrTrait;





	// ◇ ---- CONSTRUCT •
	public function __construct($table = null, $database = null, $dbco = null) {
		if (Vars::hasData($dbco)) {
			$this->dbco = $dbco;
		}
		if (Vars::hasData($database)) {
			$this->database = $database;
		}
		if (Vars::hasData($table)) {
			$table = $this->oTable($table, 'IS');
			$this->verifyTable($table);
			$this->adoptTable($table);
		}
	}





	// ◇ ---- oSEARCH •
	public function oSearch($filter, $column = '*', $yield = 'ROWS', $limit = 20, $sort = 'SORT') {
		return $this->dbco->search($this->table, $filter, ColumnQ::auth($column), $limit, $yield, $sort);
	}





	// ◇ ---- oCREATE •
	public function oCreate($input, $yield = 'puid', $guid = null) {
		$tuid = RandomQ::tuid();
		SetQ::isNullOrEmpty($input['tuid'], $tuid);
		SetQ::isNullOrEmpty($input['oauthid'], $tuid);
		SetQ::isNullOrEmpty($input['kind'], 'PERSON');
		if (ArrayX::isNotKeyOrEmpty($input, 'password')) {
			$input['password'] = RandomQ::password();
			$input['flag'] = 'PASSWORD_GENERATED';
		}
		SetQ::isNotKeyOrEmpty($input, 'username', RandomQ::username());
		SetQ::isKeyNotEmptyReplace($input, 'password', CryptX::password($input['password']));
		$input = DataQ::drop($input);
		$result = $this->dbco->create($this->table, DataQ::drop($input), $yield, $guid);
		if ($yield === 'STRING') {
			if (Vars::isTrue($result)) {
				return 'CREATED';
			} elseif (Vars::isNumeric($result) && $result > 0) {
				return 'CREATED';
			}
		}
		return $result;
	}





	// ◇ ---- CHANGE-PASSWORD •
	public function changePassword($filter, $password, $yield = 'STRING') {
		$password = CryptX::password($password);
		return $this->oUpdateOne($filter, ['password' => $password], $yield);
	}





	// ◇ ---- oCREATE-MASTER-TEMP •
	public function oCreateMasterTemp($input = null, $yield = 'puid', $guid = null) {
		$param = [
			'username' => 'master',
			'password' => 'Master' . TimeX::is('Y2') . '#',
			'firstname' => 'AO',
			'lastname' => 'Master',
			'gender' => 'M',
			'type' => 'MASTER',
			'status' => 'ACTIVE'
		];
		if (Vars::isNotEmptyArray($input)) {
			$input = array_merge($param, $input);
		} else {
			$input = $param;
		}
		return $this->oCreate($input, $yield, $guid);
	}

} //> end of UserO