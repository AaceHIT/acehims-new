<?php
//*** Oversight » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
function oversight($label, $message, $extra = null, $exit = true) {
	$e = '<strong>' . ucwords($label) . '</strong> | ' . $message;
	if (!is_null($extra) && $extra != '') {
		if (is_array($extra)) {
			$extra = implode(' • ', $extra);
		}
		if (is_string($extra)) {
			$e .= ' → <em>(' . $extra . ')</em>';
		}
	}
	if ($exit) {
		return exit($e);
	} else {
		echo '<pre><tt>' . var_export($e, true) . '</tt></pre>';
	}
}