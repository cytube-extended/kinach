// Toggle for username colors
handleUsernameColorsToggle = function () {
	var uct = $("#username-colors-toggle");

	if(UI_UsernameColors == 1)
	{
		if (uct.hasClass("label-success")) 
		{
			uct.removeClass("label-success");
			uct.addClass("label-default");
		}

		UI_UsernameColors = 0;
		removeColorPicker();
		localStorage.usernameColorsToggle = UI_UsernameColors;
	}
	else if (UI_UsernameColors == 0)
	{
		if (uct.hasClass("label-default")) 
		{
			uct.removeClass("label-default");
			uct.addClass("label-success");
		}

		UI_UsernameColors = 1;
		createColorPicker();
		localStorage.usernameColorsToggle = UI_UsernameColors;
	}
};

createColorPicker = function() {
	if(document.getElementById("usernameColorBtn") == null)
	{
		// Create color input form
		$('<input>').attr({
			type: 'color',
			id: 'usernameColorBtn',
			value: usernameColor
		}).insertBefore('#newpollbtn');

		// Bind callback
		$("#usernameColorBtn").change(function(){
			usernameColor = $("#usernameColorBtn").val();
			localStorage.usernameColor = usernameColor;
		});
	}
	else{
		$("#usernameColorBtn").show();
	}
}

removeColorPicker = function() {
	$("#usernameColorBtn").hide();
}

function getUsernameColor(color) {
	let colorFilter = /(^#(?:[0-9a-fA-F]{3}){1,2})/g;

	if(color.match(colorFilter))
			return ("color:" + color);
	else
			return "";
}

// Check for Color in cookies
function loadUsernameColor() {
	if(localStorage.usernameColor)
	{
		usernameColor = localStorage.usernameColor;
	}
	else
	{
		usernameColor = "#efefef";
		localStorage.usernameColor = usernameColor;
	}
}

loadUsernameColor();

// Check for Toggle state in cookies
function loadUsernameColorsToggleState() {
	if(localStorage.usernameColorsToggle)
	{
		UI_UsernameColors = parseInt(localStorage.usernameColorsToggle);
	}
	else
	{
		UI_UsernameColors = 1;
		localStorage.usernameColorsToggle = UI_UsernameColors;
	}

	if($("#username-colors-toggle").length == 0)
	{
		if(UI_UsernameColors == 1)
		{
			$('<span id="username-colors-toggle" class="label label-success pull-right pointer glyphicon glyphicon-adjust">')
			.text(' ')
			.attr('title', 'Цветной ник')
			.appendTo('#chatheader')
			.on('click', function () {
					handleUsernameColorsToggle();
					console.log(UI_UsernameColors);
			});

			createColorPicker();
		} else 
		{
			$('<span id="username-colors-toggle" class="label label-default pull-right pointer glyphicon glyphicon-adjust">')
			.text(' ')
			.attr('title', 'Цветной ник')
			.appendTo('#chatheader')
			.on('click', function () {
					handleUsernameColorsToggle();
					console.log(UI_UsernameColors);
			});
		}
	}
}

loadUsernameColorsToggleState()
