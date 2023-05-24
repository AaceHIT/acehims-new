<?php
//*** CRUD Trait » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
trait CRUDTrait {

	// ◇ ---- isFilterColumn •
	public function isFilterColumn($filter, $column) {
		if (ArrayX::isKey($filter, $column)) {
			return true;
		}
		return false;
	}





	// ◇ ---- isFilterPK •
	public function isFilterPK($filter) {
		return $this->isFilterColumn($filter, 'auid');
	}





	// ◇ ---- isFilterID •
	public function isFilterID($filter) {
		return $this->isFilterColumn($filter, 'puid');
	}





	// ◇ ---- isFilterBIND •
	public function isFilterBIND($filter) {
		return $this->isFilterColumn($filter, 'tuid');
	}





	// ◇ ---- isFilterAuthID •
	public function isFilterAuthID($filter) {
		return $this->isFilterColumn($filter, 'oauthid');
	}





	// ◇ ---- isFilterUsername •
	public function isFilterUsername($filter) {
		return $this->isFilterColumn($filter, 'username');
	}





	// ◇ ---- isFilterEmail •
	public function isFilterEmail($filter) {
		return $this->isFilterColumn($filter, 'email');
	}





	// ◇ ---- isFilterPhone •
	public function isFilterPhone($filter) {
		return $this->isFilterColumn($filter, 'phone');
	}





	// ◇ ---- isFilterToken •
	public function isFilterToken($filter) {
		return $this->isFilterColumn($filter, 'token');
	}





	// ◇ ---- filterUserID • Returns a filter
	public function filterUserID($userID) {
		$filter = DataQ::userIDToColumn($userID);

		// * TODO: prepare for Token Model or as part of User Model
		// if ($this->isFilterToken($filter)) {
		// $filter = $this->oToken('oFindOne', $filter, 'oauthid');
		// if (!DataQ::isRowColumn($filter, 'oauthid')) {
		// 	return $filter;
		// }
		// }
		return $filter;
	}





	// ◇ ---- oCREATE • Create Record
	public function oCreate($input, $yield = 'puid', $guid = null) {
		$create = $this->dbco->create($this->table, $input, $yield, $guid);
		if ($yield === 'STRING') {
			if (Vars::isTrue($create)) {
				return 'CREATED';
			} elseif (Vars::isNumeric($create) && $create > 0) {
				return 'CREATED';
			}
		}
		return $create;
	}





	// ◇ ---- oSEARCH • Find record in table
	public function oSearch($filter, $column = '*', $yield = 'ROWS', $limit = 20, $sort = 'SORT') {
		return $this->dbco->search($this->table, $filter, $column, $limit, $yield, $sort);
	}





	// ◇ ---- oFIND ONE • Find one record matching filter in table
	public function oFindOne($filter, $column = '*', $sort = 'SORT') {
		return $this->oSearch($filter, $column, 'ROW', 1, $sort);
	}





	// ◇ ---- oFIND EVERY • Find every record that match filter in table
	public function oFindEvery($filter, $column = '*', $sort = 'SORT') {
		return $this->oSearch($filter, $column, 'ROWS', 'NO_LIMIT', $sort);
	}





	// ◇ ---- oFIND ALL • Find all record in table
	public function oFindAll($column = '*', $sort = 'SORT') {
		return $this->oSearch('NO_FILTER', $column, 'ROWS', 'NO_LIMIT', $sort);
	}





	// ◇ ---- oFindByPK • Find record using auid as filter »
	public function oFindByPK($auid, $column = '*') {
		return $this->oFindOne(['auid' => $auid], $column);
	}





	// ◇ ---- oFindByID • Find record using puid as filter »
	public function oFindByID($puid, $column = '*') {
		return $this->oFindOne(['puid' => $puid], $column);
	}





	// ◇ ---- oFindByRowID • Find record using suid as filter »
	public function oFindByRowID($suid, $column = '*') {
		return $this->oFindOne(['suid' => $suid], $column);
	}





	// ◇ ---- oFindByBIND • Find record using tuid as filter »
	public function oFindByBIND($tuid, $column = '*') {
		return $this->oFindOne(['tuid' => $tuid], $column);
	}





	// ◇ ---- oFindByAuthID • Find record using oauthid as filter »
	public function oFindByAuthID($authID, $column = '*') {
		return $this->oFindOne(['oauthid' => $authID], $column);
	}






	// ◇ ----- oFindByUserID •
	public function oFindByUserID($userID, $column = '*') {
		$filter = $this->filterUserID($userID);
		if (DataQ::isRow($filter)) {
			return $this->oFindOne($filter, $column);
		}
		return $filter;
	}





	// ◇ ---- oEXIST • Check if record exist in table »
	public function oExist($filter, $column = 'auid') {
		return $this->dbco->exist($this->table, $filter, $column);
	}





	// ◇ ---- oCOUNT •
	public function oCount($filter, $column = 'auid') {
		return $this->dbco->count($this->table, $filter, $column);
	}





	// ◇ ---- oCOUNT ALL •
	public function oCountAll($column = 'auid') {
		return $this->dbco->count($this->table, 'NO_FILTER', $column);
	}





	// ◇ ---- oUPDATE •
	public function oUpdate($filter, $input, $yield = 'COUNT', $limit = 1) {

		$find = $this->oExist($filter);
		if (Vars::isFalse($find)) {
			if ($yield === 'STRING') {
				return 'UPDATE_IMPOSSIBLE';
			} elseif ($yield === 'COUNT') {
				return 0;
			}
			return false;
		}

		$update = $this->dbco->update($this->table, $filter, $input, $yield, $limit);
		if ($yield === 'STRING' && Vars::isNumeric($update)) {
			if ($update < 1) {
				return 'NOT_UPDATED';
			} elseif ($update > 0) {
				return 'UPDATED';
			}
		}

		return $update;
	}




	// ◇ ---- oUPDATE ONE •
	public function oUpdateOne($filter, $input, $yield = 'COUNT') {
		return $this->oUpdate($filter, $input, $yield, 1);
	}




	// ◇ ---- oUPDATE EVERY •
	public function oUpdateEvery($filter, $input, $yield = 'COUNT') {
		return $this->oUpdate($filter, $input, $yield, 'NO_LIMIT');
	}




	// ◇ ---- oUPDATE ALL •
	public function oUpdateAll($input, $yield = 'COUNT') {
		return $this->oUpdate('NO_FILTER', $input, $yield, 'NO_LIMIT');
	}




	// ◇ ---- oUpdateByPK • Update record using auid as filter »
	public function oUpdateByPK($auid, $input, $yield = 'COUNT') {
		$filter = ['auid' => $auid];
		return $this->oUpdateOne($filter, $input, $yield);
	}




	// ◇ ---- oUpdateByID • Update record using puid as filter »
	public function oUpdateByID($puid, $input, $yield = 'COUNT') {
		$filter = ['puid' => $puid];
		return $this->oUpdateOne($filter, $input, $yield);
	}




	// ◇ ---- oUpdateByRowID • Update record using suid as filter »
	public function oUpdateByRowID($suid, $input, $yield = 'COUNT') {
		$filter = ['suid' => $suid];
		return $this->oUpdateOne($filter, $input, $yield);
	}




	// ◇ ---- oUpdateByBIND • Update record using tuid as filter »
	public function oUpdateByBIND($tuid, $input, $yield = 'COUNT') {
		$filter = ['tuid' => $tuid];
		return $this->oUpdateOne($filter, $input, $yield);
	}




	// ◇ ---- oUpdateByAuthID • Update record using oauthid as filter »
	public function oUpdateByAuthID($authID, $input, $yield = 'COUNT') {
		$filter = ['oauthid' => $authID];
		return $this->oUpdateOne($filter, $input, $yield);
	}




	// ◇ ---- oSAVE • Update or Create Record »
	public function oSave($filter, $input, $yield = 'COUNT', $column = 'auid', $guid = null) {
		$exist = $this->oExist($filter, $column);
		if (Vars::isFalse($exist)) {
			return $this->oCreate($input, $yield, $guid);
		}
		return $this->oUpdateOne($filter, $input, $yield);
	}




	// ◇ ---- oDELETE • Delete record »
	public function oDelete($filter, $yield = 'COUNT', $limit = 'NO_LIMIT') {
		$find = $this->oExist($filter);
		if (Vars::isFalse($find)) {
			if ($yield === 'STRING') {
				return 'DELETE_IMPOSSIBLE';
			} elseif ($yield === 'COUNT') {
				return 0;
			}
			return false;
		}

		$delete = $this->dbco->delete($this->table, $filter, $limit, $yield);

		// if ($yield === 'COUNT' && Vars::isZero($delete)) {
		// 	return 'NOT_DELETED';
		// } elseif ($yield === 'BOOL' && Vars::isFalse($delete)) {
		// 	return 'NOT_DELETED';
		// }

		if ($yield === 'STRING') {
			if (Vars::isTrue($delete)) {
				return 'DELETED';
			} elseif (Vars::isNumeric($delete) && $delete > 0) {
				return 'DELETED';
			}
		}

		return $delete;
	}




	// ◇ ---- oDeleteOne • Delete one record matching filter »
	public function oDeleteOne($filter, $yield = 'COUNT') {
		return $this->oDelete($filter, $yield, 1);
	}




	// ◇ ---- oDeleteEvery • Delete all records matching filter »
	public function oDeleteEvery($filter, $yield = 'COUNT') {
		return $this->oDelete($filter, $yield, 'NO_LIMIT');
	}




	// ◇ ---- oDeleteEvery • Delete all records »
	public function oDeleteAll($yield = 'COUNT') {
		return $this->oDelete('NO_FILTER', $yield, 'NO_LIMIT');
	}




	// ◇ ---- oDeleteByPK • Delete record using auid as filter »
	public function oDeleteByPK($auid, $yield) {
		$filter = ['auid' => $auid];
		return $this->oDelete($filter, $yield, 1);
	}




	// ◇ ---- oDeleteByID • Delete record using puid as filter »
	public function oDeleteByID($puid, $yield) {
		$filter = ['puid' => $puid];
		return $this->oDelete($filter, $yield, 1);
	}




	// ◇ ---- oDeleteByRowID • Delete record using suid as filter »
	public function oDeleteByRowID($suid, $yield) {
		$filter = ['suid' => $suid];
		return $this->oDelete($filter, $yield, 1);
	}




	// ◇ ---- oDeleteByBIND • Delete record using tuid as filter »
	public function oDeleteByBIND($tuid, $yield) {
		$filter = ['tuid' => $tuid];
		return $this->oDelete($filter, $yield, 1);
	}




	// ◇ ---- oDeleteByAuthID • Delete record using oauthid as filter »
	public function oDeleteByAuthID($authID, $yield) {
		$filter = ['oauthid' => $authID];
		return $this->oDelete($filter, $yield, 1);
	}




	// ◇ ---- oDELIST •
	public function oDelist($filter, $yield = 'COUNT', $limit = 1) {
		return $this->oUpdate($filter, ['status' => 'DELIST'], $yield, $limit);
	}




	// ◇ ---- oACTIVATE •
	public function oActivate($filter, $yield = 'COUNT', $limit = 1) {
		return $this->oUpdate($filter, ['status' => 'ACTIVE'], $yield, $limit);
	}




	// ◇ ---- oINACTIVATE •
	public function oDeactivate($filter, $yield = 'COUNT', $limit = 1) {
		return $this->oUpdate($filter, ['status' => 'INACTIVE'], $yield, $limit);
	}

} // End Of Trait ~ CRUD