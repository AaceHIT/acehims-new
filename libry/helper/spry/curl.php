<?php
//*** ClientQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class CurlQ {

	// ◇ ---- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- INITIALIZE • Initialize Curl » Boolean | CurlInit
	public static function initialize() {
		if (function_exists('curl_init')) {
			return curl_init();
		}
		return false;
	}





	// ◇ ---- ERROR • Error Handler » Error
	public static function error(&$curl, $code, $url, $data = []) {
		$error = ['code' => $code, 'message' => curl_error($curl)];
		return ['error' => $error, 'url' => $url, 'data' => $data];
	}





	// ◇ ---- POST • Curl Get »
	public static function get($url, $data = []) {
		$curl = self::initialize();
		curl_setopt($curl, CURLOPT_URL, $url);
		if (empty($data)) {
			curl_setopt($curl, CURLOPT_URL, $url);
		} else {
			curl_setopt($curl, CURLOPT_URL, $url . '?' . http_build_query($data));
		}
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
		$exec = curl_exec($curl);
		$error = curl_errno($curl);
		if (!empty($error)) {
			return self::error($curl, $error, $url, $data);
		}
		curl_close($curl);
		return $exec;
	}





	// ◇ ---- POST • Curl Post »
	public static function post($url, $data = []) {
		$curl = self::initialize();
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_POST, 1);
		if (!empty($data)) {
			curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
		}
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
		$exec = curl_exec($curl);
		$error = curl_errno($curl);
		if (!empty($error)) {
			return self::error($curl, $error, $url, $data);
		}
		curl_close($curl);
		return $exec;
	}





	// ◇ ---- HTTP • Curl HTTP »
	public static function http($url, $method, $data = []) {
		if ($method === 'GET') {
			return self::get($url, $data);
		} elseif ($method === 'POST') {
			return self::post($url, $data);
		}
		return false;
	}





	// ◇ ---- BEARER • Curl HTTP with Bearer »
	public static function bearer($url, $key, $method = 'GET') {
		$curl = self::init();
		if ($curl !== false) {
			curl_setopt_array($curl, array(
				CURLOPT_URL => $url,
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => "",
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 30,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => "$method",
				CURLOPT_HTTPHEADER => array(
					"Authorization: Bearer $key",
					"Cache-Control: no-cache",
				),
			));

			$exec = curl_exec($curl);
			$error = curl_errno($curl);
			if (!empty($error)) {
				return self::error($curl, $error, $url);
			}
			curl_close($curl);
			return $exec;
		}
	}

} // End Of Class ~ CurlQ