<?php
$contactPerson = [
	'person' => '',
	'phone' => '',
	'email' => '',
];
if (!empty($row->contact)) {
	$contactPerson['person'] = Vars::safe($row->contact, 'person');
	$contactPerson['phone'] = Vars::safe($row->contact, 'phone');
	$contactPerson['email'] = Vars::safe($row->contact, 'email');
}
?>

<div class="col-md-4 col-sm-6">
	<div class="form-floating">
		<input type="text" class="form-control" placeholder="Full Name" name="contact[person]" value="<?php echo $contactPerson['person']; ?>">
		<label>Full Name</label>
	</div>
</div>
<div class="col-md-4 col-sm-6">
	<div class="form-floating">
		<input type="text" class="form-control" placeholder="Phone Number" name="contact[phone]" value="<?php echo $contactPerson['phone']; ?>">
		<label>Phone Number</label>
	</div>
</div>
<div class="col-md-4 col-sm-6">
	<div class="form-floating">
		<input type="email" class="form-control" placeholder="Email Address" name="contact[email]" value="<?php echo $contactPerson['email']; ?>">
		<label>Email Address</label>
	</div>
</div>