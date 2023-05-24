function imageUploadWithPreview(inputId, previewId) {
  $('#' + inputId).change(function() {
    previewImage(this, previewId);
  });
}

function previewImage(input, previewId) {
  var preview = $('#' + previewId)[0];
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  } else {
    preview.src = "";
  }
}
