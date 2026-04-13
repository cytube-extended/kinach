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

// MOTD state
$.getScript("https://kinach.vercel.app/assets/MOTDstate.js");

// Poll sound
$.getScript("https://kinach.vercel.app/assets/PollSound.js");

// New send button
$.getScript("https://kinach.vercel.app/assets/NewSendButton.js");

// Playlist playback
$.getScript("https://kinach.vercel.app/assets/PlaylistPlayback.js");

// Username colors
$.getScript("https://kinach.vercel.app/assets/NicknameColors.js");

// Chat pictures
$.getScript("https://kinach.vercel.app/assets/ChatPictures.js");

function AddNickClass(){
	let h=function(i){
		let a=/(.+?):?/gi;
		let b=`$1`;
		let c=i.replace(a,b);
		return c
	};

	let a=['.userlist_siteadmin','.userlist_owner','.userlist_op'];

	for(let c of a){
		$(c).each(function(a,b){
			$(b).addClass(h($(b)["context"].textContent))
		})
	}

	if(UI_UsersClassNick===1){
		$(".userlist_item span:not([class]):nth-child(2)").each(function(a,b){
			$(b).addClass($(b)["context"].textContent)
		})
	}
}
AddNickClass();

socket.on("setAFK",function(){AddNickClass()});
socket.on("setLeader",function(){AddNickClass()});
socket.on("setUserMeta",function(){AddNickClass()});
socket.on("connect",function(){AddNickClass()});
socket.on("addUser",function(){AddNickClass()});
socket.on("setUserRank",function(){AddNickClass()});
socket.on("userLeave",function(){AddNickClass()});
socket.on("channelCSSJS",function(){AddNickClass()});
socket.on("channelRanks",function(){AddNickClass()});
socket.on("usercount",function(){AddNickClass()});
socket.on("userlist",function(){AddNickClass()});
