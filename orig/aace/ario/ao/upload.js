//*** Upload.js » Tydi™ Framework © 2023 ∞ AO™ • @iamodao • www.osawere.com ∞ Apache License ***//

function useGallery() {
  $("#takeShot").hide();
  $("#cameraPreview").hide();
  $("#useGalleryBtn").hide();
  $("#photoFile").show();
  $("#photoFilePreview").show();
  $("#useCameraBtn").show();
}

function useCamera() {
  $("#photoFile").hide();
  $("#photoFilePreview").hide();
  $("#useCameraBtn").hide();
  $("#takeShot").show();
  $("#cameraPreview").show();
  $("#useGalleryBtn").show();
}

function photoPreview(photoInputID, photoPreviewID) {
  var photo = $("#" + photoInputID)[0].files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    $("#" + photoPreviewID).attr("src", e.target.result);
  };
  reader.readAsDataURL(photo);
}


function photoViaGallery(photoInputID, photoPreviewID) {
  var InputValue = $("#" + photoInputID).val();
  if (InputValue != "") {
    $("#savePhotoBtn").show();
    photoPreview(photoInputID, photoPreviewID);
    // $("#" + CameraPhotoID).val("NONE");
  }
}

function imageUploadPreview(InputID, PreviewID, CameraPhotoID = "") {
  $("#" + InputID).change(function () {
    var InputValue = $("#" + InputID).val();
    if (InputValue != "") {
      imagePreview(this, PreviewID);
      // $("#" + CameraPhotoID).val("NONE");
    }
  });
}
