

function autocomplete(input, results, URI) {
  $("#referredComplete").show();

  results.html("");
  var searchTerm = input.val();
  $.getJSON(URI, { term: searchTerm }, function (data) {
    $.each(data, function (index, value) {
      results.append("<li>" + value.firstname + "</li>");
    });
  });

	results.on('click', 'li', function() {
		var referrerTUID = $(this).data();
		// $('#selected-lastname').val(selectedLastname);
		alert(referrerTUID);
	});
}

// function imageUploadWithPreview(inputId, previewId, cameraPhoto) {
//   $("#" + inputId).change(function () {
//     previewImage(this, previewId);
//   });

//   // if ($(this).val() != "") {
//   $("#" + cameraPhoto).val("NONE");
//   // }
// }

// function previewImage(input, previewId) {
//   var preview = $("#" + previewId)[0];
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       preview.src = e.target.result;
//     };
//     reader.readAsDataURL(input.files[0]);
//   } else {
//     preview.src = "";
//   }
// }

// function triggerClick(ID) {
//   const fieldInput = document.getElementById(ID);
//   return fieldInput.click();
// }

// function browsePhoto(photoInputID) {
//   const photoInput = document.getElementById(photoInputID);
//   photoInput.click();
// }

// $(function () {
//   Webcam.set({
//     width: 300,
//     height: 220,
//     image_format: "jpeg",
//     jpeg_quality: 96,
//   });
//   Webcam.attach("#CameraView");
// });

// function useCamera(PreviewID) {
//   Webcam.snap(function (data_uri) {
//     $("#" + PreviewID).attr("src", data_uri);
//     $("#cameraPhoto").val(data_uri);
//   });
// }

// function loadContent(containerID, contentURI, event) {
// 	event.preventDefault();
// 	$("#" + containerID).html("Loading...");
// 	$("#" + containerID).load(contentURI, function (response, status, xhr) {
// 		if (status === "error") {
// 			$("#" + containerID).html("Content Unavailable [" + contentURI + "]");
// 		}
// 	});
// }

// function XHRContent(uri, pageTitle, divId) {
//   $("#" + divId).load(uri, function() {
//     window.history.pushState({}, pageTitle, uri);
//     // document.title = pageTitle;
//   });

// 	return false;
// }
