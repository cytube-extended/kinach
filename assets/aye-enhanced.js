UI_UsersClassNick = 0;
UI_Images = 1;
UI_ImagesPM = 1;
UI_MOTDTabs = 1;
UI_PollSound = 1;

// Cytube Theme change
document.cookie = "cytube-theme=/css/themes/modern.css"
localStorage.theme = "/css/themes/modern.css"
DEFAULT_THEME = '/css/themes/modern.css';
if($("#usertheme").attr('href') !== "/css/themes/modern.css") {
  $("#usertheme").attr("href", "/css/themes/modern.css");
}

/* Remove default emote list */
$('#emotelist').remove();

/* Remove auto complete */
$('#chatline').attr('autocomplete', 'off');

// Remove labels on right control buttons
$(".hidden-xs").remove();

// Remove unnecessary buttons
$("#shuffleplaylist").remove();
$("#getplaylist").remove();
$("#fullscreenbtn").remove();
$("#showplaylistmanager").remove();
$("#qlockbtn").remove();

