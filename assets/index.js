if (!window.initialized) {
  window.initialized = true
  
  $(document).ready(function() { 
    $('<link id="chanfavicon" href="https://kinach.vercel.app/assets/icon_obsr.ico" type="image/x-icon" />')
      .attr('rel', 'shortcut icon')
      .appendTo("head"); 
  });
  
  $('head').append('<link rel="stylesheet" type="text/css" href="https://kinach.vercel.app/assets/aye-enhanced.css">');
  
  $.getScript("https://kinach.vercel.app/assets/aye-enhanced.js");
}
