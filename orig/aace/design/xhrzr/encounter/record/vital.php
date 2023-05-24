<?php

// » Find Encounter
$param = ['encounter'];
$filterEncounter = DataQ::isGet($param);
if (DataQ::isRowAnyColumn($filterEncounter, $param)) {
	SetQ::keySwap($filterEncounter, 'encounter', 'tuid');
	$encounter = EncounterModel::static()->oFindOne($filterEncounter);
	$encounter = RecordQ::resultToObject($encounter);
}

// » If Encounter Record Is Found (Assuming vital from XHR)
if (Vars::hasData($encounter)) {
	$vitals = $content->record;
}

// » If Vital Variable Exist
if (Vars::is($vitals)) { ?>

	<a href="#" class="btn btn-primary pull-right" onclick="loadContentXHR('vitalAreaCreate', '/encounter/patient-vital-create');"><i class="fa fa-plus"></i> Add Vitals</a>
	<div id="vitalAreaCreate">
	</div>
<?php } ?>