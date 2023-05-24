function swapArea(HideID, ShowID) {
  $("#" + HideID).hide();
  $("#" + ShowID).show();
  return false;
}

function swapAreaLoad(HideID, ShowID, LoadURL) {
  $("#" + HideID).hide();
  // $("#" + ShowID).show().load(LoadURL);
  var targetDiv = $("#" + ShowID);
  targetDiv.show().html("Loading...");
  targetDiv.load(LoadURL, function () {
    targetDiv.html($(this).text());
  });
  return false;
}

function loadContent(AreaID, LoadURL) {
  var targetArea = $("#" + AreaID);
  targetArea.show().html("Loading...");
  targetArea.load(LoadURL, function () {
    targetArea.html($(this).text());
  });
  return false;
}

// • ==== loadContentXHR →
function loadContentXHR(AreaID, URI) {
  var targetArea = $("#" + AreaID);
  targetArea
    .show()
    .html(
      '<div class="text-center mt-4 mb-4"><img src="/aace/sliq/image/loading-pulse.gif" alt="Loading..." class="ao-loader"></div>'
    );
  targetArea.load("/xhr" + URI, function () {
    targetArea.html($(this).html());
  });
  return false;
}

// • ==== loadFolderContentXHR →
function loadFolderContentXHR(URI) {
  $(".list-group-item").removeClass("active");
  loadContentXHR("folderArea", URI);
  $(event.target).addClass("active");
  return false;
}

function submitContentXHR(formID, AreaID, successURI) {
  var form = $("#" + formID);
  var FormActionURI = "/xhr" + form.attr("action");
  var successURI = "/xhr" + successURI;
  var formData = form.serialize();
  $("#" + AreaID).html(
    '<div class="text-center mt-4 mb-4"><img src="/aace/sliq/image/loading-pulse.gif" alt="Loading..." class="ao-loader"></div>'
  );
  $.post(FormActionURI, formData, function (response) {
    if (response === "success") {
      $("#" + AreaID).load(successURI);
    } else {
      $("#" + AreaID).load(successURI);
    }
  });
  return false;
}

function togglePassword(inputFieldID, toggleButtonID) {
  var inputField = $("#" + inputFieldID);
  var toggleButton = $("#" + toggleButtonID);
  toggleButton.click(function () {
    var inputFieldType = inputField.attr("type");
    var toggleButtonIcon = $(this).find("i");

    if (inputFieldType == "password") {
      inputField.attr("type", "text");
      toggleButtonIcon.removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      inputField.attr("type", "password");
      toggleButtonIcon.removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });
}
