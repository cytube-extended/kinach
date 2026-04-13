function PollSound() {
	function a() {
		$('#pollwrap > div.well.active > h3:contains("ГОЛОСОВАНИЕ")').addClass("golosovanie");
		$('#pollwrap > div.well.active > h3:contains("ШИЗА")').addClass("shiza");
		//
		$('#pollwrap > div.well.active > h3:contains("ПОИСК")').addClass("pidaras");
		$('#pollwrap > div.well.active > h3:contains("ПИДАРАС")').addClass("pidaras-success");

		var a;
		if ( (!$('.well.active > h3').hasClass('golosovanie') && !$('.well.active > h3').hasClass('shiza') && !$('.well.active > h3').hasClass('pidaras') && !$('.well.active > h3').hasClass('pidaras-success')) ) {
				// a = new Audio("https://kinach.vercel.app/resources/audio/votingpoll.ogg");
				a = new Audio("https://kinach.vercel.app/resources/audio/hruk.mp3");
				a.volume = 0.25;
				a.play();
		}
		if ($('.well.active > h3').hasClass('golosovanie')) {
				a = new Audio("https://kinach.vercel.app/resources/audio/golosovanie.mp3");
				a.volume = 0.5;
				a.play();
		}
		// if ($('.well.active > h3').hasClass('shiza')) {
		// 	a = new Audio("https://kinach.vercel.app/resources/audio/shiza.mp3");
		// 	a.volume = 0.5;
		// 	a.play();
		// }
		if ($('.well.active > h3').hasClass('pidaras')) {
			a = new Audio("https://kinach.vercel.app/resources/audio/pidaras.mp3");
			a.volume = 0.4;
			a.play();
			$('.well.active > h3')[0].innerText = "ПОИСК ПИДАРАСОВ АКТИВИРОВАН";
			
			if($(".poll-notify")[$(".poll-notify").length - 1].innerText.split(" ")[0] === CLIENT.name)
			{
				setTimeout(function () {
				
					let users = document.querySelectorAll('.userlist_item div strong');
					user = users[Math.floor(Math.random() * Math.floor(users.length))].innerText;
					socket.emit("newPoll", {
						title: "ПИДАРАС: " + user,
						opts: [],
						obscured: false,
						timeout: 0
					});
				}, 13000);
			}
			
		}
	}
	if (UI_PollSound === 1) {
			a();
	}
	if (UI_PollSound === 0) {}
}

socket.on("newPoll", function() {
	PollSound();
});

//PollSoundMuteBtn
(function() {
	let a, b, c, d, f, g, h, e, j, k, i;
	i = "ps-btn";
	a = localStorage.poll_sound_mute;
	b = "#" + i;
	c = b;
	g = c;
	f = UI_PollSound;
	d = function() {
			(UI_PollSound == 0) ? document.querySelector(g).classList.add("off") : document.querySelector(g).classList.remove("off")
	}
	;
	h = 'Sound ON <i class="glyphicon glyphicon-volume-up"></i>';
	e = 'Sound OFF <i class="glyphicon glyphicon-volume-off"></i>';
	k = 'Poll Sound';
	j = a;
	if (a == 'true') {
			UI_PollSound = 0;
	}
	a = function() {
			$(g).html(e);
			d();
			UI_PollSound = 0;
	}
	;
	b = function() {
			$(g).html(h);
			d();
			UI_PollSound = 1;
	}
	;
	c = function() {
			if (localStorage.poll_sound_mute !== 'true') {
					localStorage.poll_sound_mute = true;
					a()
			} else {
					localStorage.poll_sound_mute = false;
					b()
			}
	}
	;
	$(`<div class="form-group"><label class="control-label col-sm-4">${k}</label><div class="col-sm-8"><span class="form-control" id="${i}" style="cursor: pointer"></span></div></div>`).insertAfter('#us-chat > form > div:nth-child(8)');
	$(g).on("click", c);
	setTimeout(function() {
			if (j == 'true') {
					a()
			}
			if (typeof (localStorage.poll_sound_mute) == "undefined") {
					if (UI_PollSound == 1) {
							localStorage.poll_sound_mute = false;
							b()
					} else {
							localStorage.poll_sound_mute = true;
							a()
					}
			}
			if (j == 'false') {
					b()
			}
	}, 2e2);
}
)();
