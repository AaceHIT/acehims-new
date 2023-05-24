<form name="oForm" id="oForm" method="POST" action="<?php Utilizr::uri(); ?>">
	<div class="card-body">
		<h4 class="ao-section-title small mb-4">Ward Information</h4>
		<?php
		Utilizr::notifyFailure('Your record was not updated');
		Utilizr::notifySuccess('Your record has been updated successfully');
		$row = $content->record;
		if (!Utilizr::isLinkStatus('success')) { ?>

			<div class="row g-4 clearfix">
				<div class="col-md-6 col-sm-12">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Title" name="title" value="<?php echo Vars::safe($row->title); ?>" required>
						<label>Title</label>
					</div>
				</div>
				<div class="col-md-2 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Acronym" name="acronym" value="<?php echo Vars::safe($row->acronym); ?>">
						<label>Acronym</label>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="form-floating">
						<input type="text" class="form-control" placeholder="Ward ID" name="code" value="<?php echo Vars::safe($row->code); ?>">
						<label>Ward ID</label>
					</div>
				</div>

				<div class="col-12">
					<div class="form-floating">
						<textarea placeholder="Description" class="form-control" rows="5" name="description"><?php echo Vars::safe($row->description); ?></textarea>
						<label>Description</label>
					</div>
				</div>
			</div>


			<div class="row g-4 clearfix mb-4 mt-2">
				<div class="col-sm-12">
					<button type="submit" class="btn btn-primary btn-lg ao-btn">Update</button>
				</div>
			</div>

		<?php } ?>
	</div>
</form>