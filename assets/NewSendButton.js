function SendBtnReplace() {
	$("#chatbtn").remove();
	$('#send-btn').remove();
	$('sb-style').remove();
	$('<button id="send-btn" class="btn btn-default btn-block" title="Отправить сообщение" style="width: 50px"><i class="glyphicon glyphicon-comment"></i></button>').insertAfter("#chatline").on("click", function() {
			if ($("#chatline").val().trim()) {
					socket.emit("chatMsg", {
							msg: $("#chatline").val(),
							meta: {}
					});
					$("#chatline").val("");
			}
	});
	$(`<style>`).addClass("sb-style").text(`#chatline{margin-right:50px;width: calc(100% - 50px);}#send-btn{position: relative;z-index: 0;top: -38px;margin-left: calc(100% - 50px);margin-bottom: -38px;}`).appendTo('head');
}
function SendBtnRemove() {
	$("#chatbtn").remove();
	$('#send-btn').remove();
	$('.sb-style').remove();
}


function applyOpts() {
	SendBtnRemove();
	if (USEROPTS.chatbtn) {
			SendBtnReplace()
	}
}


function SendBtnCheck() {
	if (USEROPTS.chatbtn === true) {
			SendBtnReplace()
	}
	if (USEROPTS.chatbtn === false) {
			SendBtnRemove()
	}
}

SendBtnCheck();

