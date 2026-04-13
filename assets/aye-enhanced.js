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

// Add username class to each user element in userlist
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

// Userlist indicator for the poll initiator
$(`<style>.initiator-of-poll {
	background: -webkit-linear-gradient(red, orange, yellow, lime, cyan, magenta);
	-webkit-background-clip: text !important;
	-webkit-text-fill-color: transparent;
	animation-name: rolling;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(1.0,0,0,1.0);
	animation-duration: 2s;
	-webkit-animation-name: rolling;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
	-webkit-animation-duration: 0.25s;
	text-shadow: none !important;
}
@keyframes rolling {
  from {
		background: -webkit-linear-gradient(red, orange, yellow, lime, cyan, magenta);
		font-style: italic;
		letter-spacing: -0.010em;
  }
  20% {
		background: -webkit-linear-gradient(orange, yellow, lime, cyan, magenta, red);
		font-style: normal;
		letter-spacing: 0.020em;
  }
  40% {
		background: -webkit-linear-gradient(yellow, lime, cyan, magenta, red, orange);
		font-style: italic;
		letter-spacing: -0.04em;
  }
  60% {
		background: -webkit-linear-gradient(lime, cyan, magenta, red, orange, yellow);
		font-style: normal;
		letter-spacing: 0.05em;
  }
  80% {
		background: -webkit-linear-gradient(cyan, magenta, red, orange, yellow, lime);
		font-style: italic;
		letter-spacing: -0.06em;
	}
	100% {
		background: -webkit-linear-gradient(magenta, red, orange, yellow, lime, cyan);
		font-style: normal;
		letter-spacing: 0.07em;
	}
}
</style>`).appendTo('head');


function checkPollinitiator(){
	$('#pollwrap > div.well.active > h3:contains("Реквест")').addClass("swgr");
	$('#pollwrap > div.well.active > h3:contains("реквест")').addClass("swgr");

	var a = $('.poll-notify:last-of-type').text().split(' ')[0];

	if($('#pollwrap > div.well.active > h3').hasClass('swgr')){

		if($('#userlist .userlist_owner').hasClass(`${a}`)){
			$(`${"#userlist .userlist_owner."+a}`).addClass('initiator-of-poll')
		}

		if($('#userlist .userlist_op').hasClass(`${a}`)){
			$(`${"#userlist .userlist_op."+a}`).addClass('initiator-of-poll')
		}
	}

	if (!$('#pollwrap > div.well.active > h3').hasClass('swgr')){
		$('.initiator-of-poll').removeClass('initiator-of-poll')
	}
}

checkPollinitiator();

socket.on("newPoll", function(){checkPollinitiator()});
socket.on("closePoll",function(){checkPollinitiator()});

// Button to minimize chat emotes
if ($("#minismiles-btn").length == 0)
{
	var minismiles = document.createElement('style');
	document.head.appendChild(minismiles);
	if (localStorage.minismiles=='true') {
			minismiles.sheet.insertRule('.channel-emote {max-height: 3em;}', 0);
	}
	minismilesbtn = $('<span id="minismiles-btn" class="label label-default pull-right pointer glyphicon glyphicon-resize-small" title="Маленькие смайлы"> </span>').insertAfter("#modflair").on("click", function() {
			if (localStorage.minismiles!=='true') {
					localStorage.minismiles = true;
					minismiles.sheet.insertRule('.channel-emote {max-height: 3em;}', 0);
					document.querySelector("#minismiles-btn").classList.add("label-info");
			} else {
					localStorage.minismiles = false;
					minismiles.sheet.deleteRule(0);
					document.querySelector("#minismiles-btn").classList.remove("label-info");
			}
	});
	window.setTimeout(function () {
			if (localStorage.minismiles=='true') {
					document.querySelector("#minismiles-btn").classList.add("label-info");
			}
	}, 200);
}

// Remove default emote popup search
$("#emotelistbtn").unbind('click');

// Load eap
setTimeout(function () {
  $.getScript("https://kinach.vercel.app/assets/eap.js");
}, 1000);

// Load VideoResize script
$.getScript("https://kinach.vercel.app/assets/VideoResize.js");

// Hide/Show player
if ($("#hvideo-btn").length == 0) {
  var vhdn;

  $('<span id="hvideo-btn" class="btn btn-sm btn-default" title="Отключить видеоплеер"><i class="glyphicon glyphicon-ban-circle"></span>')
    .insertAfter("#mediarefresh")
    .on("click", function () {
      if (!$(this).hasClass('btn-success')) {
        $(this).addClass('btn-success').html('<span title="Включить видеоплеер"><i class="glyphicon glyphicon-film"></i></span>');

        vhdn = $('#videowrap').detach();

        $('#currenttitle').hide();

        $('#hv-btn').attr('disabled', true);
      } else {
        $(this).removeClass('btn-success').html('<span title="Отключить видеоплеер"><i class="glyphicon glyphicon-ban-circle"></span>');

        vhdn.appendTo('#main');

        $('#currenttitle').show();

        $('#hv-btn').attr('disabled', false);

        $('#mediarefresh').click();
      }
    });
}

// Skip button color status
socket.on("voteskip", function (e) {
  if (0 == e.count) {
    $("button#voteskip").css("color","white")
  } else {
    var t = (e.need - 1 - e.count) / (e.need - 1) * 120;
    
    $("button#voteskip").css("color", "hsl(" + t + ",95%,50%)")
  }
});

// Remove unnecessary buttons
$("#ce-ui").remove();
$("#modflair").remove();
$("#chat-help-btn").remove();
$("#nav-collapsible > ul > li:nth-child(4)").remove();

