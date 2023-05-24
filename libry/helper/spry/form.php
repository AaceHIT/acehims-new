<?php
//*** FormQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
class FormQ {

	// ◇ ---- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ---- CALL_STATIC • Non-Existent Static Method » Error
	public static function __callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}




	// ◇ ---- SELECT • Dynamically build form's select option and mark selected
	public static function select($options, $selected = '', $echo = true) {
		$resolve = '';
		if (!is_array($options)) {

		} else {
			foreach ($options as $label => $value) {
				$resolve .= '<option value="' . $value . '"';
				if ($selected === $value) {
					$resolve .= " selected";
				}
				$resolve .= '>' . $label . '</option>' . "\r\n";
			}
		}

		if ($echo === true) {
			echo $resolve;
			return true;
		}
		return $resolve;
	}





	// ◇ ---- OPTION •
	public static function option($object) {
		$option = [];

		// • gender
		if ($object === 'GENDER') {
			$option = [
				'Female' => 'F',
				'Male' => 'M',
			];
		}


		if ($object === 'COUNTRY') {
			$option = [
				'Afghanistan' => 'Afghanistan',
				'Albania' => 'Albania',
				'Algeria' => 'Algeria',
				'American Samoa' => 'American Samoa',
				'Andorra' => 'Andorra',
				'Angola' => 'Angola',
				'Anguilla' => 'Anguilla',
				'Antarctica' => 'Antarctica',
				'Antigua and Barbuda' => 'Antigua and Barbuda',
				'Argentina' => 'Argentina',
				'Armenia' => 'Armenia',
				'Aruba' => 'Aruba',
				'Australia' => 'Australia',
				'Austria' => 'Austria',
				'Azerbaijan' => 'Azerbaijan',
				'Bahamas' => 'Bahamas',
				'Bahrain' => 'Bahrain',
				'Bangladesh' => 'Bangladesh',
				'Barbados' => 'Barbados',
				'Belarus' => 'Belarus',
				'Belgium' => 'Belgium',
				'Belize' => 'Belize',
				'Benin' => 'Benin',
				'Bermuda' => 'Bermuda',
				'Bhutan' => 'Bhutan',
				'Bolivia' => 'Bolivia',
				'Bosnia And Herzegowina' => 'Bosnia And Herzegowina',
				'Botswana' => 'Botswana',
				'Bouvet Island' => 'Bouvet Island',
				'Brazil' => 'Brazil',
				'British Indian Ocean Territory' => 'British Indian Ocean Territory',
				'Brunei Darussalam' => 'Brunei Darussalam',
				'Bulgaria' => 'Bulgaria',
				'Burkina Faso' => 'Burkina Faso',
				'Burundi' => 'Burundi',
				'C.A.R.' => 'C.A.R.',
				'Cambodia' => 'Cambodia',
				'Cameroon' => 'Cameroon',
				'Canada' => 'Canada',
				'Cape Verde' => 'Cape Verde',
				'Cayman Islands' => 'Cayman Islands',
				'Central African Republic' => 'Central African Republic',
				'Chad' => 'Chad',
				'Chile' => 'Chile',
				'China' => 'China',
				'Christmas Island' => 'Christmas Island',
				'Cocos (Keeling) Islands' => 'Cocos (Keeling) Islands',
				'Colombia' => 'Colombia',
				'Comoros' => 'Comoros',
				'Congo' => 'Congo',
				'Cook Islands' => 'Cook Islands',
				'Costa Rica' => 'Costa Rica',
				"Cote D'Ivoire" => "Cote D'Ivoire",
				'Croatia' => 'Croatia',
				'Cuba' => 'Cuba',
				'Cyprus' => 'Cyprus',
				'Czech Republic' => 'Czech Republic',
				'Denmark' => 'Denmark',
				'Djibouti' => 'Djibouti',
				'Dubai' => 'Dubai',
				'Dominican Republic' => 'Dominican Republic',
				'East Timor' => 'East Timor',
				'Ecuador' => 'Ecuador',
				'Egypt' => 'Egypt',
				'El Salvador' => 'El Salvador',
				'England' => 'England',
				'Equatorial Guinea' => 'Equatorial Guinea',
				'Eritrea' => 'Eritrea',
				'Estonia' => 'Estonia',
				'Ethiopia' => 'Ethiopia',
				'Falkland Islands (Malvinas)' => 'Falkland Islands (Malvinas)',
				'Faroe Islands' => 'Faroe Islands',
				'Fiji' => 'Fiji',
				'Finland' => 'Finland',
				'France' => 'France',
				'French Guiana' => 'French Guiana',
				'French Polynesia' => 'French Polynesia',
				'French Southern Territories' => 'French Southern Territories',
				'Gabon' => 'Gabon',
				'Gambia' => 'Gambia',
				'Georgia' => 'Georgia',
				'Germany' => 'Germany',
				'Ghana' => 'Ghana',
				'Gibraltar' => 'Gibraltar',
				'Greece' => 'Greece',
				'Greenland' => 'Greenland',
				'Grenada' => 'Grenada',
				'Guadeloupe' => 'Guadeloupe',
				'Guam' => 'Guam',
				'Guantemala' => 'Guantemala',
				'Guinea' => 'Guinea',
				'Guinea-Bissau' => 'Guinea-Bissau',
				'Guyana' => 'Guyana',
				'Haiti' => 'Haiti',
				'Heard And Mc Donald Islands' => 'Heard And Mc Donald Islands',
				'Honduras' => 'Honduras',
				'Hong Kong' => 'Hong Kong',
				'Hungary' => 'Hungary',
				'Iceland' => 'Iceland',
				'India' => 'India',
				'Indonesia' => 'Indonesia',
				'Iran' => 'Iran',
				'Iraq' => 'Iraq',
				'Ireland' => 'Ireland',
				'Israel' => 'Israel',
				'Italy' => 'Italy',
				'Jamaica' => 'Jamaica',
				'Japan' => 'Japan',
				'Jordan' => 'Jordan',
				'Kazakhstan' => 'Kazakhstan',
				'Kenya' => 'Kenya',
				'Kiribati' => 'Kiribati',
				'Korea, Democratic People\'s Republic of' => 'Korea, Democratic People\'s Republic of',
				'Korea, Republic of' => 'Korea, Republic of',
				'Kuwait' => 'Kuwait',
				'Kyrgyzstan' => 'Kyrgyzstan',
				'Lao People\'s Democratic Republic' => 'Lao People\'s Democratic Republic',
				'Latvia' => 'Latvia',
				'Lebanon' => 'Lebanon',
				'Lesotho' => 'Lesotho',
				'Liberia' => 'Liberia',
				'Libya' => 'Libya',
				'Libyan Arab Jamahiriya' => 'Libyan Arab Jamahiriya',
				'Liechtenstein' => 'Liechtenstein',
				'Lithuania' => 'Lithuania',
				'Luxembourg' => 'Luxembourg',
				'Macau' => 'Macau',
				'Macedonia, The Former Yugoslav Republic' => 'Macedonia, The Former Yugoslav Republic',
				'Madagascar' => 'Madagascar',
				'Malawi' => 'Malawi',
				'Malaysia' => 'Malaysia',
				'Maldives' => 'Maldives',
				'Mali' => 'Mali',
				'Malta' => 'Malta',
				'Marshall Islands' => 'Marshall Islands',
				'Martinique' => 'Martinique',
				'Mauritania' => 'Mauritania',
				'Mauritius' => 'Mauritius',
				'Mayotte' => 'Mayotte',
				'Mexico' => 'Mexico',
				'Micronesia (Federated States Of)' => 'Micronesia (Federated States Of)',
				'Moldova, Republic Of' => 'Moldova, Republic Of',
				'Monaco' => 'Monaco',
				'Mongolia' => 'Mongolia',
				'Montserrat' => 'Montserrat',
				'Morocco' => 'Morocco',
				'Mozambique' => 'Mozambique',
				'Myanmar' => 'Myanmar',
				'Namibia' => 'Namibia',
				'Nauru' => 'Nauru',
				'Nepal' => 'Nepal',
				'Netherlands' => 'Netherlands',
				'Netherlands Antilles' => 'Netherlands Antilles',
				'New Caledonia' => 'New Caledonia',
				'New Zealand' => 'New Zealand',
				'Nicaragua' => 'Nicaragua',
				'Niger' => 'Niger',
				"Nigeria" => "Nigeria",
				'Niue' => 'Niue',
				'Norfolk Island' => 'Norfolk Island',
				'North Korea' => 'North Korea',
				'Northern Ireland' => 'Northern Ireland',
				'Northern Mariana Islands' => 'Northern Mariana Islands',
				'Norway' => 'Norway',
				'Oman' => 'Oman',
				'Pakistan' => 'Pakistan',
				'Palau' => 'Palau',
				'Panama' => 'Panama',
				'Papua New Guinea' => 'Papua New Guinea',
				'Paraguay' => 'Paraguay',
				'Peru' => 'Peru',
				'Philippines' => 'Philippines',
				'Pitcairn' => 'Pitcairn',
				'Poland' => 'Poland',
				'Portugal' => 'Portugal',
				'Puerto Rico' => 'Puerto Rico',
				'Qatar' => 'Qatar',
				'Reunion' => 'Reunion',
				'Romania' => 'Romania',
				'Russian Federation' => 'Russian Federation',
				'Rwanda' => 'Rwanda',
				'Saint Kitts And Nevis' => 'Saint Kitts And Nevis',
				'Saint Lucia' => 'Saint Lucia',
				'Saint Vincent And The Grenadines' => 'Saint Vincent And The Grenadines',
				'Samoa' => 'Samoa',
				'San Marino' => 'San Marino',
				'Sao Tome And Principe' => 'Sao Tome And Principe',
				'Saudi Arabia' => 'Saudi Arabia',
				'Senegal' => 'Senegal',
				'Seychelles' => 'Seychelles',
				'Sierra Leone' => 'Sierra Leone',
				'Singapore' => 'Singapore',
				'Slovakia' => 'Slovakia',
				'Slovenia' => 'Slovenia',
				'Solomon Islands' => 'Solomon Islands',
				'Somalia' => 'Somalia',
				'South Africa' => 'South Africa',
				'South Georgia And The South Sandwich Isl' => 'South Georgia And The South Sandwich Isl',
				'South Korea' => 'South Korea',
				'Spain' => 'Spain',
				'Sri Lanka' => 'Sri Lanka',
				'St. Helena' => 'St. Helena',
				'St. Pierre And Miquelon' => 'St. Pierre And Miquelon',
				'Sudan' => 'Sudan',
				'Suriname' => 'Suriname',
				'Svalbard And Jan Mayen Islands' => 'Svalbard And Jan Mayen Islands',
				'Swaziland' => 'Swaziland',
				'Sweden' => 'Sweden',
				'Switzerland' => 'Switzerland',
				'Syria' => 'Syria',
				'Syrian Arab Republic' => 'Syrian Arab Republic',
				'Tahiti' => 'Tahiti',
				'Taiwan, Province of China' => 'Taiwan, Province of China',
				'Tajikistan' => 'Tajikistan',
				'Tanzania, United Republic Of' => 'Tanzania, United Republic Of',
				'Thailand' => 'Thailand',
				'Togo' => 'Togo',
				'Tokelau' => 'Tokelau',
				'Tonga' => 'Tonga',
				'Trinidad And Tobago' => 'Trinidad And Tobago',
				'Tunisia' => 'Tunisia',
				'Turkey' => 'Turkey',
				'Turkmenistan' => 'Turkmenistan',
				'Turks And Caicos Islands' => 'Turks And Caicos Islands',
				'Tuvalu' => 'Tuvalu',
				'Uganda' => 'Uganda',
				'Ukraine' => 'Ukraine',
				'United Arab Emirates' => 'United Arab Emirates',
				'United Kingdom' => 'United Kingdom',
				'United States Minor Outlying Islands' => 'United States Minor Outlying Islands',
				'United States of America' => 'United States of America',
				'Unknown, but outside of USA' => 'Unknown, but outside of USA',
				'Uruguay' => 'Uruguay',
				'Uzbekistan' => 'Uzbekistan',
				'Vanuatu' => 'Vanuatu',
				'Vatican City State (Holy See)' => 'Vatican City State (Holy See)',
				'Venezuela' => 'Venezuela',
				'Vietnam' => 'Vietnam',
				'Virgin Islands (British)' => 'Virgin Islands (British)',
				'Virgin Islands (U.S)' => 'Virgin Islands (U.S)',
				'Wallis And Futuna Islands' => 'Wallis And Futuna Islands',
				'Western Sahara' => 'Western Sahara',
				'Yemen' => 'Yemen',
				'Yugoslavia' => 'Yugoslavia',
				'Zaire' => 'Zaire',
				'Zambia' => 'Zambia',
				'Zimbabwe' => 'Zimbabwe'
			];
		}


		if ($object === 'NIGERIAN_STATE') {
			$option = [
				"Abia State" => "Abia",
				"Adamawa State" => "Adamawa",
				"Akwa Ibom State " => "Akwa Ibom",
				"Anambra State" => "Anambra",
				"Bauchi State" => "Bauchi",
				"Bayelsa State" => "Bayelsa",
				"Benue State " => "Benue",
				"Borno State" => "Borno",
				"Cross River State" => "Cross River",
				"Delta State" => "Delta",
				"Ebonyi State" => "Ebonyi",
				"Edo State" => "Edo",
				"Ekiti State" => "Ekiti",
				"Enugu State" => "Enugu",
				"Gombe State " => "Gombe",
				"Imo State" => "Imo",
				"Jigawa State" => "Jigawa",
				"Kaduna State" => "Kaduna",
				"Kano State " => "Kano",
				"Katsina State" => "Katsina",
				"Kebbi State" => "Kebbi",
				"Kogi State" => "Kogi",
				"Kwara State" => "Kwara",
				"Lagos State" => "Lagos",
				"Nasarawa State" => "Nasarawa",
				"Niger State " => "Niger",
				"Ogun State" => "Ogun",
				"Ondo State" => "Ondo",
				"Osun State" => "Osun",
				"Oyo State" => "Oyo",
				"Plateau State" => "Plateau",
				"Rivers State" => "Rivers",
				"Sokoto State " => "Sokoto",
				"Taraba State" => "Taraba",
				"Yobe State" => "Yobe",
				"Zamfara State" => "Zamfara",
				"FCT - Abuja" => "FCT - Abuja"
			];
		}


		if ($object === 'PERSON_RELATIONSHIP') {
			$option = [
				"Father" => "FATHER",
				"Mother" => "MOTHER",
				"Child" => "CHILD",
				"Spouse" => "SPOUSE",
				"Sibling" => "SIBLING",
				"Family" => "FAMILY",
				"Friend" => "FRIEND",
				"Acquaintance" => "ACQUAINTANCE"
			];
		}


		if ($object === 'RELATIONSHIP') {
			$option = [
				"Single" => "SINGLE",
				"Partnership" => "PARTNERSHIP",
				"Married" => "MARRIED",
				"Divorced" => "Divorced",
				"Separated" => "SEPARATED"
			];
		}


		if ($object === 'BLOOD_GROUP') {
			$option = [
				"A+" => "A+",
				"A-" => "A-",
				"B+" => "B+",
				"B-" => "B-",
				"AB+" => "AB+",
				"AB-" => "AB-",
				"O+" => "O+",
				"O-" => "O-"
			];
		}

		return $option;
	}





	// ◇ ---- SELECT OPTION •
	public static function selectOption($object, $selected = '', $echo = true) {
		return self::select(self::option($object), $selected, $echo);
	}


} //> End Of Class ~ FormQ