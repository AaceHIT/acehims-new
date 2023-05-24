<?php
//*** Caller » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
function caller($caller, $type, &$file = null) {
	if ($type === 'CLASS' && !class_exists($caller) || $type === 'FUNCTION' && !function_exists($caller)) {
		return oversight($caller, ucfirst(strtolower($caller)) . ' Unavailable', $file);
	}
	return true;
}