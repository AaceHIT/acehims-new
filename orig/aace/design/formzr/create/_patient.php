<div class="row g-4 clearfix">

	<div class="col-md-4">
		<div class="form-floating">
			<input type="file" id="photoFile" accept="image/*" class="dropify" name="dp">
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-floating">
			<img id="photoPreview" class="img-fluid img-thumbnail rounded-circle" src="<?php echo AssetQ::path('IMAGE'); ?>/dp.png" alt="Photo Preview" style="max-height:160px;">
		</div>
	</div>

</div>


<div class="card-body">
	<h4 class="ao-section-title small mb-4">Additional Information</h4>
	<div class="row g-4 clearfix">

		<div class="col-md-5 col-sm-6">
			<div class="form-floating">
				<input type="text" class="form-control" placeholder="Referred By" name="referrer">
				<label>Referred By</label>
			</div>
		</div>
		<div class="col-md-4 col-sm-6">
			<div class="form-floating">
				<input type="text" class="form-control" placeholder="Next of Kin" name="guardian">
				<label>Guardian Name</label>
			</div>
		</div>
		<div class="col-md-3 col-sm-12">
			<div class="form-floating">
				<select class="form-select" name="group">
					<option value="">- Select Group -</option>
					<?php FormQ::select(FormUtil::option('GROUP')); ?>
				</select>
				<label>Patient Group</label>
			</div>
		</div>

	</div>
</div>

</form>