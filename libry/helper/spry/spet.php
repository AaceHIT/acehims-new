<?php
//*** SpetQ » Tydi™ ~ AO™ • @iamodao • www.osawere.com ~ © 2023 • Apache License ***//
declare(strict_types=1);
class SpetQ {

	// ◇ PROPERTY
	private $filename;
	private $filepath;

	private $tag;
	private $render;





	// ◇ ----- CALL • Non-Existent Method » Error
	public function __call($method, $argument) {
		return oversight(__CLASS__, 'Method Unreachable', $method);
	}





	// ◇ ----- INITIALIZE • Initialize » Boolean (true)
	public function initialize(string $filename, $tag = [], string $filepath = '') {
		if (Vars::isNotEmpty($filename)) {
			$this->filename = $filename;
		}

		if (Vars::isNotEmpty($filepath)) {
			$this->filepath = $filepath;
		}

		if (Vars::isNotEmpty($tag)) {
			if (Vars::isObject($tag)) {
				$tag = ObjectX::toArray($tag);
			}
			$this->tag = $tag;
		}

		return true;
	}





	// ◇ ----- SWAP • Swap Tag with Value » ...
	public function swap($content = null, $tag = null, $replacement = null) {
		if (Vars::isEmpty($content)) {
			$content = $this->content();
		}

		if (Vars::isEmpty($tag)) {
			$tag = $this->tag;
		}

		if (Vars::stringAcceptable($tag)) {
			return str_replace('{' . $tag . '}', $replacement, $content);
		} elseif (Vars::isArray($tag)) {
			foreach ($tag as $label => $replacement) {
				$content = str_replace('{' . $label . '}', $replacement, $content);
			}
			return $content;
		}
		return false;
	}






	// ◇ ----- FILE • Template File » ...
	public function file($req = 'IS', $filename = null, $filepath = null) {
		if (Vars::isEmpty($filename) && Vars::isNotEmpty($this->filename)) {
			$filename = $this->filename;
		}

		if (Vars::isEmpty($filepath) && Vars::isNotEmpty($this->filepath)) {
			$filepath = $this->filepath;
		}


		if (Vars::isNotEmpty($filepath)) {
			$filename = $filepath . $filename;
		}


		if (!FileX::is($filename)) {
			$file = FileX::name($filename, true);
			$error = Env::errorReport($file, $filename, '...');
			return oversight('SPET', 'File Unavailable', $error);
		}


		if ($req === 'LOAD') {
			return require $filename;
		} elseif ($req === 'CONTENT') {
			return file_get_contents($filename);
		}
		return $filename;
	}





	// ◇ ----- CONTENT • File Content » String [html]
	public function content($filename = null, $filepath = null) {
		return $this->file('CONTENT', $filename, $filepath);
	}





	// ◇ ----- LOAD • Load File Content »
	public function load($filename = null, $filepath = null) {
		return $this->file('LOAD', $filename, $filepath);
	}





	// ◇ ----- MAKE_TAG • Create Spet Tag » Boolean (true)
	public function tag($input, $value = '') {
		if (Vars::isNotEmpty($input)) {

			//...If $input is considered a string
			if (Vars::stringAcceptable($input)) {
				$this->tag[$input] = $value;
			}


			//...If $input is an object
			if (Vars::isObject($input)) {
				$input = ObjectX::toArray($input);
			}


			//...If $input is an array
			if (Vars::isArray($input)) {
				if (Vars::isEmpty($this->tag)) {
					$this->tag = $input;
				} elseif (ArrayX::is($this->tag)) {
					$this->tag = array_merge($this->tag, $input);
				}
			}

			return true;
		}

		return false;
	}




	// ◇ ----- LAYOUT • Create Spet Tag from Layout » Boolean (true)
	public function layout($slice, $filename = null, $filepath = null) {
		if (Vars::isNotEmpty($slice)) {
			if (Vars::isEmpty($filename)) {
				$filename = StringX::swap($slice, '_', DS) . '.php';
			}
		}

		$content = $this->content($filename, $filepath);

		//...If tag is found on layout, render it
		if (StringX::contain($content, '{') && StringX::contain($content, '}')) {
			$content = $this->swap($content);
		}

		return $this->tag($slice, $content);
	}





	// ◇ ----- RENDER • Set $render » Boolean (true)
	public function render($content = null) {
		$this->render = $this->swap();
		if (Vars::isEmpty($this->render)) {
			return true;
		}
		return false;
	}





	// ◇ ----- OUTPUT • Return $render » String
	public function output() {
		return $this->render;
	}





	// ◇ ----- DISPLAY • Print Out $render » String [html]
	public function display($req = 'render') {
		echo $this->render;
		return;
	}

} // End Of Class ~ SpetQ




/**
 * Example of Usage *
 $fileIs = 'index.php';
 $pathIs = LIBRARY['THEME'] . 'view' . DS . 'spet' . DS;
 $tags = [
 'location' => 'West-Africa',
 'role' => 'Software Engineer',
 'username' => 'iamodao'
 ];
 $spet = new SpetQ;
 $spet->initialize($fileIs, $tags, $pathIs);
 $spet->tag('name', 'AO™');
 $spet->tag('username', 'deron');
 $spet->layout('piece-header');
 $spet->tag('username', 'odao');
 $spet->render();
 $spet->display();
 * End Example of Usage *
 **/