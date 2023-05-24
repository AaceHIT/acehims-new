<h6 class="mb-3 mt-2 small ao-text-header">Practice Information</h6>
<div class="row g-4 clearfix pb-4">
	<div class="col-md-12">
		<div class="form-floating">
			<input type="text" class="form-control" placeholder="Title" name="title" value="<?php Vars::show($row->title); ?>" required tabindex="1">
			<label>Title</label>
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-floating">
		<input type="text" class="form-control" placeholder="Acronym" name="acronym" value="<?php Vars::show($row->acronym); ?>" required tabindex="2">
			<label>Acronym</label>
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-floating">
		<input type="text" class="form-control" placeholder="Code" name="code" value="<?php Vars::show($row->code); ?>" tabindex="3">
			<label>Code</label>
		</div>
	</div>
	<div class="col-md-12">
		<div class="form-floating">
			<textarea placeholder="Description" class="form-control" rows="4" name="description" tabindex="4"><?php Vars::show($row->description); ?></textarea>
			<label>Description</label>
		</div>
	</div>
</div>