function changeVideoWidth(direction) {
  var body = document.body;
  
  if (/hd/.test(body.className)) {
    throw new Error("ui::changeVideoWidth does not work with the 'hd' layout");
  }

  var videoWrap = document.getElementById("videowrap");
  var leftControls = document.getElementById("leftcontrols");
  var leftPane = document.getElementById("leftpane");
  var chatWrap = document.getElementById("chatwrap");
  var rightControls = document.getElementById("rightcontrols");
  var rightPane = document.getElementById("rightpane");

  var match = videoWrap.className.match(/col-md-(\d+)/);
  if (!match) {
    throw new Error("ui::changeVideoWidth: videowrap is missing bootstrap class!");
  }

  var videoWidth = parseInt(match[1], 10) + direction;
  if (videoWidth < 3 || videoWidth > 9) {
    return;
  }

  var chatWidth = 12 - videoWidth;
  videoWrap.className = "col-md-" + videoWidth + " col-lg-" + videoWidth;
  rightControls.className = "col-md-" + videoWidth + " col-lg-" + videoWidth;
  rightPane.className = "col-md-" + videoWidth + " col-lg-" + videoWidth;
  chatWrap.className = "col-md-" + chatWidth + " col-lg-" + chatWidth;
  leftControls.className = "col-md-" + chatWidth + " col-lg-" + chatWidth;
  leftPane.className = "col-md-" + chatWidth + " col-lg-" + chatWidth;

  handleVideoResize();
};

// Create parent
if ($("#videowrap-header").length == 0)
{
    $("#videowrap").prepend( `<p id="videowrap-header"></span>` );
    
    // Insert title
    var mi = $("#mediainfo");
    $("#mediainfo").remove();
    
    // Insert - button
    $( "#videowrap-header" ).append( `<span class="glyphicon glyphicon-minus pointer" id="resize-video-smaller" title="Make the video smaller"></span>` );
    
    // Insert + button
    $( "#videowrap-header" ).append( `<span class="glyphicon glyphicon-plus pointer" id="resize-video-larger" title="Make the video larger"></span>` );
       
    // Attach click event
    $( "#resize-video-larger" ).click(function () {
      try {
        changeVideoWidth(1);
      } catch (error) {
        console.error(error);
      }
    });
    
    $( "#resize-video-smaller" ).click(function () {
      try {
        changeVideoWidth(-1);
      } catch (error) {
        console.error(error);
      }
    });
    
    // Load CSS
    $('head').append('<link rel="stylesheet" type="text/css" href="https://kinach.vercel.app/assets/VideoResize.css">');
    
    // "Added by:"
    $mediaInfo = $('<p id="mediainfo">').appendTo("#videowrap-header");
    
    showPlaylistInfo = function() {
      $mediaInfo.text($(".queue_active").attr("title"));
    }
    
    showPlaylistInfo();
    
    window.socket.on("changeMedia", function() {
      showPlaylistInfo();
    })
}
