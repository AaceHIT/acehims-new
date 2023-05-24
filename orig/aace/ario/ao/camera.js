//*** Camera.js » Tydi™ Framework © 2023 ∞ AO™ • @iamodao • www.osawere.com ∞ Apache License ***//
$(function () {
  Webcam.set({
    width: 300,
    height: 220,
    image_format: "jpeg",
    jpeg_quality: 98,
  });
  Webcam.attach("#CameraView");
});

function useCamera(PreviewID, cameraPhoto = "cameraPhoto") {
  Webcam.snap(function (DataURI) {
    $("#" + PreviewID).attr("src", DataURI);
    $("#" + cameraPhoto).val(DataURI);
  });
}
