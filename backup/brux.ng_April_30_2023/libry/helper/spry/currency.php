<?php
//*** CurrencyQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class CurrencyQ {

	// ◇ ----- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- DATABASE • Currency Database »
	#DATABASE • Currency database
	public static function database() {
		$currency = [
			'NGN' => ['SYMBOL' => '₦', 'COUNTRY' => 'Nigeria', 'CURRENCY' => 'Naira'],
			'USD' => ['SYMBOL' => '$', 'COUNTRY' => 'United States', 'CURRENCY' => 'Dollar'],
			'GBP' => ['SYMBOL' => '£', 'COUNTRY' => 'United Kingdom', 'CURRENCY' => 'Pound'],
			'EUR' => ['SYMBOL' => '€', 'COUNTRY' => 'Europe', 'CURRENCY' => 'Euro'],
			'JPY' => ['SYMBOL' => '¥', 'COUNTRY' => 'Japan', 'CURRENCY' => 'Yen'],
			'INR' => ['SYMBOL' => '₹', 'COUNTRY' => 'India', 'CURRENCY' => 'Rupee'],
		];
		return $currency;
	}

} // End Of Class ~ CurrencyQ