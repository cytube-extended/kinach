// Check for MOTD state in cookies
function loadMOTDState() {
  // if(localStorage.MOTD_state === 'false')
  // 	$("#togglemotd").click();
  if (typeof localStorage.MOTD_state === "undefined") {
    localStorage.MOTD_state = false;
  }
}

// Set callback
loadMOTDState();

// Unbind old click method
$("#togglemotd").unbind("click");

// Bind new method with cookie save
$("#togglemotd").click(function () {
  var hidden = $("#motd").css("display") === "none";
  $("#motd").toggle();
  if (hidden) {
    $("#togglemotd")
      .find(".glyphicon-plus")
      .removeClass("glyphicon-plus")
      .addClass("glyphicon-minus");

    localStorage.MOTD_state = true;
  } else {
    $("#togglemotd")
      .find(".glyphicon-minus")
      .removeClass("glyphicon-minus")
      .addClass("glyphicon-plus");

    localStorage.MOTD_state = false;
  }
});
