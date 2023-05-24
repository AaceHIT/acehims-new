<?php
//*** UploadQ - File Upload » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//

class UploadQ {

	// ◇ ---- callStatic • Non-existent static method » Error
	public static function callStatic($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	public static function fileType($fileName) {
		return strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
	}





	public static function fileActualType($fileTempName) {
		$finfo = finfo_open(FILEINFO_MIME_TYPE);
		$type = finfo_file($finfo, $fileTempName);
		finfo_close($finfo);
		return $type;
	}





	public static function isType($fileName, $flag) {
		if ($flag === 'IMAGE') {
			$types = ['jpg', 'jpeg', 'png', 'gif'];
		}

		$type = self::fileType($fileName);

		if (in_array($type, $types)) {
			return true;
		}
		return false;
	}





	public static function fileExtension($fileTempName, $flag) {
		$actualType = self::fileActualType($fileTempName);
		if ($flag === 'IMAGE') {
			$types = ['image/jpeg', 'image/png', 'image/gif'];
			if (in_array($actualType, $types)) {
				switch ($actualType) {
					case 'image/jpeg':
						return 'jpg';
					case 'image/png':
						return 'png';
					case 'image/gif':
						return 'gif';
					default:
						return '';
				}
			}
		}
	}





	// ◇ ---- BASIC • Basic file upload » Boolean
	public static function basic($fileTempName, $uploadDestination, $fileUploadName) {
		if (move_uploaded_file($fileTempName, $uploadDestination . $fileUploadName)) {
			return true;
		}
		return false;
	}

} //> End Of Class ~ UploadQ