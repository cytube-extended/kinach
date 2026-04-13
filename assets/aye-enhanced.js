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

$.getScript("https://kinach.vercel.app/assets/Crypto.js");

// Localize mod flair button
$('#modflair').text('Мод');

// Add custom logo
$("img[src$='header-logo-short.png']")
    .attr("id","nav-logo")
    .attr("src","https://i.imgur.com/6guda2s.png")
    .attr("style","width:80px");

// Random byte
function randomByte() {
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
