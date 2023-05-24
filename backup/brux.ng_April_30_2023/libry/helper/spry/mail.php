<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class MailQ {
	public static $SMTPHost;
	public static $SMTPUsername;
	public static $SMTPPassword;

	public static $fromEmail;
	public static $fromName;

	public static $replyEmail;
	public static $replyName;

	public static $toEmail;
	public static $toName;



	public static function SMTP($username='', $password='', $host=''){
		if(!empty($host)){self::$SMTPHost = $host;} else {self::$SMTPHost = 'email-smtp.us-west-2.amazonaws.com';}
		if(!empty($username)){self::$SMTPUsername = $username;} else {self::$SMTPUsername = 'AKIAQX53L77RHHVRTSEH';}
		if(!empty($password)){self::$SMTPPassword = $password;} else {self::$SMTPPassword = 'BB6LJj92gx1XFheJMPN4TOeHqcNKzf+2KiYm7g6RCMZN';}
	}


	public static function setFrom($email='no-reply@wowcatholic.com', $name='WOWCatholic.com'){
		if(!empty($email)){self::$fromEmail = $email;}
		if(!empty($name)){self::$fromName = $name;}
	}


	public static function setReply($email='', $name=''){
		if(!empty($email)){self::$replyEmail = $email;} elseif(!empty(self::$fromEmail)){self::$replyEmail = self::$fromEmail;}
		if(!empty($name)){self::$replyName = $name;} elseif(!empty(self::$fromName)){self::$replyName = self::$fromName;}
	}


	public static function setTo($email, $name=''){
		if(!empty($email)){self::$toEmail = $email;}
		self::$toName = $name;
	}


	public static function send(&$mail){
		$mail->isSMTP();
		// $mail->SMTPDebug  = SMTP::DEBUG_SERVER;
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
		$mail->Port       = 587;
		$mail->SMTPAuth   = true;
		$mail->Host       = self::$SMTPHost;
		$mail->Username   = self::$SMTPUsername;
		$mail->Password   = self::$SMTPPassword;
		$mail->setFrom(self::$fromEmail, self::$fromName);
		$mail->addReplyTo(self::$replyEmail, self::$replyName);
		$mail->addAddress(self::$toEmail, self::$toName);
	}


	public static function sendTest(){
		$mail = new PHPMailer(true);
		try {
			self::send($mail);
			$mail->isHTML(true);
			$mail->Subject = 'Re: TestMail - '.mt_rand(00000, 99999);
			$mail->Body    = '<p>Hello<br><br> This is an actual HTML message designed to test SMTP Setting.<br>So if you are reading this, then your settings works just fine.<br><br>Kind Regards,<br><b>Osawere!</b></p>';
			$mail->AltBody = 'Hello, This is the a plain text alternative messaged designed for non-HTML mail clients.';
			$mail->send();
			return true;
		}
		catch (Exception $e) {
			//TODO:: Log SMTP Error ($mail->ErrorInfo);
			return false;
		}
	}



	public static function sendHTML($subject, $message){
		$mail = new PHPMailer(true);
		try {
			self::send($mail);
			$mail->isHTML(true);
			$mail->Subject = $subject;
			$mail->Body    = $message;
			$mail->send();
			return true;
		}
		catch (Exception $e) {
			return false;
		}
	}



}