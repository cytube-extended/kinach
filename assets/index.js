if (!window.CHANNEL_JS_LOADED) {
  window.CHANNEL_JS_LOADED = true;

  $(document).ready(function() { 
    $('<link id="chanfavicon" href="https://kinach.vercel.app/assets/icon_obsr.ico" type="image/x-icon" />')
      .attr('rel', 'shortcut icon')
      .appendTo("head"); 
  });
  
  $('head').append('<link rel="stylesheet" type="text/css" href="https://kinach.vercel.app/assets/aye-enhanced.css">');
  
  $.getScript("https://kinach.vercel.app/assets/aye-enhanced.js");

  // Socket reconnect guards for channel CSS and JS
  window.Callbacks.channelCSSJS = function(data) {
    // Only load same CSS once
    if ($("#chancss").text() !== data.css) {
      $("#chancss").remove();
      
      CHANNEL.css = data.css;
      
      $("#cs-csstext").val(data.css);
      
      if(data.css && !USEROPTS.ignore_channelcss) {
        $("<style/>").attr("type", "text/css")
          .attr("id", "chancss")
          .text(data.css)
          .appendTo($("head"));
      }
    }
    
    // Only load same JS once
    if ($("#chanjs").text() !== data.js) {
      $("#chanjs").remove();
      CHANNEL.js = data.js;
      $("#cs-jstext").val(data.js);
    
      if(data.js && !USEROPTS.ignore_channeljs) {
          var src = data.js
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/\n/g, "<br>")
              .replace(/\t/g, "    ")
              .replace(/ /g, "&nbsp;");
          src = encodeURIComponent(src);
    
          var viewsource = "data:text/html, <body style='font: 9pt monospace;" +
                            "max-width:60rem;margin:0 auto;padding:4rem;'>" +
                            src + "</body>";
          checkScriptAccess(viewsource, "embedded", function (pref) {
              if (pref === "ALLOW") {
                  $("<script/>").attr("type", "text/javascript")
                      .attr("id", "chanjs")
                      .text(data.js)
                      .appendTo($("body"));
              }
          });
      }
    }
  }

  // App version
  const defaultAppVersion = 'main';
  const customAppVersion = localStorage.getItem('appVersion');
  const isCustomAppVersionValid = typeof customAppVersion === 'string' && customAppVersion !== '';
  const appVersion = isCustomAppVersionValid ? customAppVersion : defaultAppVersion;
  
  const appVersionContainer = document.getElementById('us-scriptcontrol');
  const appVersionWrapper = document.createElement('div');
  
  const appVersionLabel = document.createElement('label');
  appVersionLabel.setAttribute('for', 'us-app-version-input');
  appVersionLabel.className = 'control-label';
  appVersionLabel.textContent = 'Версия скриптов';
  appVersionLabel.title = 'Используемая версия скриптов';
  
  const appVersionInput = document.createElement('input');
  appVersionInput.className = 'form-control';
  appVersionInput.id = 'us-app-version-input';
  appVersionInput.type = 'text';
  appVersionInput.value = appVersion;
  appVersionInput.placeholder = defaultAppVersion;
  
  const appVersionSubmit = document.createElement('button');
  appVersionSubmit.className = 'btn btn-sm btn-info';
  appVersionSubmit.textContent = 'Apply & Refresh';
  appVersionSubmit.addEventListener('click', () => {
    localStorage.setItem('appVersion', appVersionInput.value.trim());
    location.reload();
  });
  
  appVersionWrapper.appendChild(appVersionLabel);
  appVersionWrapper.appendChild(appVersionInput);
  appVersionWrapper.appendChild(appVersionSubmit);
  appVersionContainer.appendChild(appVersionWrapper);
}
