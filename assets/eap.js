typeof CHAT_FILTERING === 'undefined';
{
  CHAT_FILTERING = false;
}

if (CHAT_FILTERING === true) {
  return;
}

function addMessageHash(msg) {
  var msgCtx = msg[0];
  var msgClass = msgCtx.className;
  
  if (!msgClass.includes('server') && !msgClass.includes('poll-notify')) {
    if (!msgClass.includes('msgChat')) {
      msg.addClass('message').addClass('msgChat');

      let colorFilter = /(^#(?:[0-9a-fA-F]{3}){1,2})/g;
      let msgCtxText = msgCtx.lastChild.innerText;
      let colorCode = msgCtxText.match(colorFilter);

      let msgCtxTohash = '';

      // If contains color code
      if (colorCode != null) {
        let color = colorCode[0];
        
        if (UI_UsernameColors == 1) {
          let styleCol = color.match(colorFilter) ? 'color:' + color : '';

          if (
            $(msgCtx).find('span:not(:last-child):not(.timestamp)')
              .length >= 1
          ) {
            $(
              $(msgCtx).find('span:not(:last-child):not(.timestamp)')[0],
            ).attr('style', styleCol);
          }
        }

        // Remove color code
        msgCtx.lastChild.innerHTML = msgCtx.lastChild.innerHTML.replace(
          color,
          '',
        );
      }

      msgCtxTohash = msgCtx.lastChild.innerHTML;

      var msgCtxHash = md5(msgCtxTohash.replace(/ /g, ''));
      msg.addClass(msgCtxHash);

      msg[0] = msgCtx;
    }
  }
  
  return msg;
}

// Redefine poll callback
Callbacks.newPoll = function (data) {
  Callbacks.closePoll();
  
  var pollMsg = $('<div/>')
    .addClass('poll-notify')
    .html(
      data.initiator + ' opened a poll: "' + execEmotes(data.title) + '"',
    )
    .appendTo($('#messagebuffer'));
  
  scrollChat();
  
  var poll = $('<div/>')
    .data('title', data.title)
    .data('options', JSON.stringify(data.options))
    .addClass('well active')
    .prependTo($('#pollwrap'));
  
  $('<button/>')
    .addClass('close pull-right')
    .html('&times;')
    .appendTo(poll)
    .click(function (ev) {
      if (hasPermission('pollctl') && ev.ctrlKey) {
        var parent = $(this).parent();
        var title = $('<span>').html(parent.data()['title']).text();
        var polloptions = JSON.parse(parent.data()['options']);
        
        polloptions.forEach((item, index, array) => {
          array[index] = $('<span>').html(item).text();
        });
        
        $('#pollwrap .poll-menu > .btn-danger').click();
        $('#newpollbtn').click();
        
        var menu = $('#pollwrap .poll-menu');
        var addbtn = menu.find('button:contains(Add Option)');
        
        menu.find('strong:contains(Title)').next('input').val(title);
        menu.find('.poll-menu-option').remove();
        
        for (var i = 0; i < polloptions.length; i++) {
          $('<input/>')
            .addClass('form-control')
            .attr('type', 'text')
            .addClass('poll-menu-option')
            .val(polloptions[i])
            .insertBefore(addbtn);
        }
      }
      poll.remove();
    });
  
  if (hasPermission('pollctl')) {
    $('<button/>')
      .addClass('btn btn-danger btn-sm pull-right')
      .text('Закрыть опрос')
      .appendTo(poll)
      .click(function (ev) {
        if (ev.ctrlKey) {
          var parent = $(this).parent();
          var title = $('<span>').html(parent.data()['title']).text();
          var polloptions = JSON.parse(parent.data()['options']);
          
          polloptions.forEach((item, index, array) => {
            array[index] = $('<span>').html(item).text();
          });
          
          $('#pollwrap .poll-menu > .btn-danger').click();
          $('#newpollbtn').click();
          
          var menu = $('#pollwrap .poll-menu');
          var addbtn = menu.find('button:contains(Add Option)');
          
          menu.find('strong:contains(Title)').next('input').val(title);
          menu.find('.poll-menu-option').remove();
          
          for (var i = 0; i < polloptions.length; i++) {
            $('<input/>')
              .addClass('form-control')
              .attr('type', 'text')
              .addClass('poll-menu-option')
              .val(polloptions[i])
              .insertBefore(addbtn);
          }
          
          if (ev.shiftKey || ev.altKey) {
            return;
          }
        }
        
        socket.emit('closePoll');
      });
  }
  
  $('<h3/>').html(execEmotes(data.title)).appendTo(poll);
  
  function decorate(text) {
    if (UI_Images == 0) {
      const regex = /<a href="([^"]+)" target/;
      
      if (regex.test(text)) {
        const [, url] = text.match(regex);
        
        if (url.match(/png|gif|jpe?g/i)) {
          text = `<img class="poll-image" src="${url}" />`;
        }
      }
    }
    
    return execEmotes(text);
  }
  
  let opti = 0;
  while (data.options.length) {
    const option = data.options.shift();
    
    (function (option, opti) {
      const callback = function () {
        socket.emit('vote', {
          option: opti,
        });
        
        poll.find('.option button').each(function () {
          $(this).attr('disabled', 'disabled');
        });
        
        $(this).parent().addClass('option-selected');
      };
      
      $('<button/>')
        .addClass('btn btn-default btn-sm')
        .text(data.counts[opti])
        .prependTo(
          $('<div/>')
            .addClass('option')
            .html(decorate(option))
            .appendTo(poll),
        )
        .click(callback);
    })(option, opti++);
  }
  
  let timestamp;
  if (data.timestamp) {
    timestamp = $('<span/>')
      .addClass('label label-default pull-right')
      .data('timestamp', data.timestamp)
      .text(new Date(data.timestamp).toTimeString().split(' ')[0])
      .appendTo(poll);
  }
  
  if (data.initiator) {
    timestamp
      .attr('title', 'Poll opened by ' + data.initiator)
      .data('initiator', data.initiator);
  }
  
  poll.find('.btn').attr('disabled', !hasPermission('pollvote'));
}

if ($('#pollwrap .active').length && $('.poll-notify').length) {
  var poll = $('#pollwrap .active');
  
  var title = poll
    .find('h3')
    .text()
    .replace(
      /((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,
      '<a href="$1" target="_blank">$1</a>',
    );
  
  var timestamp = poll.find('span.label').data('timestamp');
  var choices = [],
  votes = [];
  
  poll.find('div.option > button').each(function () {
    votes.push($(this).text());
    $(this).remove();
  });
  
  poll.find('div.option').each(function () {
    choices.push($(this).text());
    $(this).remove();
  });
  
  poll.remove();
  
  choices.forEach((item, index, array) => {
    if (
      item.match(
        /((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/,
      )
    ) {
      array[index] = item.replace(
        /((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,
        '<a href="$1" target="_blank">$1</a>',
      );
    }
  });
  
  var blame = $('.poll-notify').first().text().split(' ').shift();
  
  $('.poll-notify').remove();
  
  Callbacks.newPoll({
    title: title,
    options: choices,
    initiator: blame,
    counts: votes,
    timestamp: timestamp,
  });
}

// Resize image in poll
$(`<style>`)
  .appendTo('head')
  .text(`.poll-image{max-height: 150px;max-width: 220px}`);

// Chat message transformers
(function () {
  // Chat IMAGE and VIDEO?
  var a = function () {
    if (UI_Images === 1) {
      var a, b, c, d, f, g, h;
      a = function () {
        let a = [
          '.userlist_item .userlist_siteadmin',
          '.userlist_item .userlist_owner',
          '.userlist_item .userlist_op',
        ];

        for (let c of a) {
          $(c).each(function (a, b) {
            $(`.chat-msg-${$(b)['context'].textContent}`).addClass('mod');
          });
        }

        if ($('.poll-notify').length > 0) {
          $('.poll-notify').addClass('message');
        }
        if ($('#pollwrap > div.well.active').length > 0) {
          $('#leftpane-inner').addClass('message');
        }

        $('#wrap').ready(function () {
          $.fn.msgRcv = function () {
            $(this).each(function () {
              addMessageHash($(this));
            });
            return $(this);
          };
          $('#messagebuffer').children().msgRcv();
        });
      };
      b = function () {
        a = function () {
          $('#wrap').ready(function () {
            // Add functnio to jquery
            $.fn.a = function () {
              var a =
                /((?:https?:\/\/)?[\w.-]+(?:\/[^\s]*)?(?:\.(?:jpg|jpeg|png|apng|bmp|svg|gif|webp|tiff))[^ ]*)/gi;
              var aa =
                /((?:https?:\/\/)?[\w.-]+(?:\/[^\s]*)?(?:\.(?:mp4|webm|mov))[^ ]*)/gi;
              var aaa = /((?:http|https):\/\/.+?[.](?:mp3|ogg|wav)[^ ]*)/gi;
              var yt =
                /(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))(?:\/(?:[\w\-]+\?v=|embed\/|v\/|shorts\/)?)([\w\-]{11})(?:\S+)?/g;

              $(this).each(function () {
                // Get link
                var b = $(this)[0].href;
                // Is an image
                var c = b.match(a) || false;
                // Is a mp4
                var cc = b.match(aa) || false;
                // Is an audio
                var ccc = b.match(aaa) || false;
                // Is a youtube video
                var cccc = b.match(yt) || false;

                if (c !== false) {
                  if (!$(this).hasClass('link')) {
                    $(this).addClass('link');
                    $(this).html(
                      $(this)
                        .html()
                        .replace(
                          a,
                          '<img class="chat-picture" src="$1" style="max-height: 150px;max-width: 220px"/>',
                        ),
                    );
                  }
                }
                if (cc !== false) {
                  if (!$(this).hasClass('link')) {
                    $(this).replaceWith(
                      $(this)
                        .html()
                        .replace(
                          aa,
                          '<video class="chat-video" src="$1" style="max-height: 240px;max-width: 320px" controls></video>',
                        ),
                    );
                  }
                }
                if (ccc !== false) {
                  if (!$(this).hasClass('link')) {
                    console.log('THIS LINK IS AN AUDIO');
                    $(this).replaceWith(
                      $(this)
                        .html()
                        .replace(
                          aaa,
                          '<audio class="chat-audio" src="$1" controls></audio>',
                        ),
                    );
                  }
                }
                if (cccc !== false) {
                  if (!$(this).hasClass('link')) {
                    console.log('THIS LINK IS A YOUTUBE VIDEO');
                    const ytLink = $(this).text();
                    const ytViewer = ytLink.replace(
                      yt,
                      `<iframe width="300" height="150" src="https://www.youtube.com/embed/$1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    );

                    console.log(this);
                    $(this).replaceWith(ytViewer);
                  }
                }
              });
              return $(this);
            };
            // Call jquery function a() on selected element
            $('.message a').a();
          });
        };
        a();
      };
      a();
      b();
    }
  };

  // Chat IMAGE and VIDEO 2?
  var b = function () {
    if (UI_ImagesPM === 1) {
      let a, b, c, d, f, g, h;
      a = function () {
        let a = [
          '.userlist_item .userlist_siteadmin',
          '.userlist_item .userlist_owner',
          '.userlist_item .userlist_op',
        ];
        for (let c of a) {
          $(c).each(function (a, b) {
            $(`.panel-body > div > div strong.username`).each(function (
              e,
              k,
            ) {
              $(k).parent().parent().addClass('message');
            });
          });
        }
      };
      b = function () {
        if ($('.panel-body').length > 0) {
          // last message span selector
          let a = ['.panel-body > div > div:last-child > span:nth-child(2)'];
          for (let c of a) {
            $(c).each(function (a, b) {
              if (!$(b).children().hasClass('username')) {
                if ($(b).parent().prev().hasClass('message')) {
                  $(b).parent().addClass('message');
                }
              }
            });
          }
          c = function () {
            a = function () {
              $('#wrap').ready(function () {
                // Add functnio to jquery
                $.fn.a = function () {
                  // var a =
                  //   /((?:http|https):\/\/.+?[.](?:jpg|jpeg|png|bmp|gif|apng|svg|webp)[^ ]*)/g;
                  var a =
                    /((?:https?:\/\/)?[\w.-]+(?:\/[^\s]*)?(?:\.(?:jpg|jpeg|png|apng|bmp|svg|gif|webp|tiff))[^ ]*)/gi;
                  var aa =
                    /((?:https?:\/\/)?[\w.-]+(?:\/[^\s]*)?(?:\.(?:mp4|webm|mov))[^ ]*)/gi;

                  $(this).each(function () {
                    // Get link
                    var b = $(this)[0].href;
                    // Is an image
                    var c = b.match(a) || false;
                    // Is a mp4
                    var cc = b.match(aa) || false;
                    if (c !== false) {
                      if (!$(this).hasClass('link')) {
                        $(this).addClass('link');
                        $(this).html(
                          $(this)
                            .html()
                            .replace(
                              a,
                              '<img class="chat-picture" src="$1" style="max-height: 150px;max-width: 220px"/>',
                            ),
                        );
                      }
                    }
                    if (cc !== false) {
                      if (!$(this).hasClass('link')) {
                        $(this).replaceWith(
                          $(this)
                            .html()
                            .replace(
                              aa,
                              '<video class="chat-video" src="$1" style="max-height: 150px;max-width: 220px" controls></video>',
                            ),
                        );
                      }
                    }
                  });
                  return $(this);
                };
                // Call jquery function a() on selected element
                $('.message a').a();
              });
            };
            let p;
            p = $('.panel-body').length;
            let h = 0;
            while (h <= p) {
              a();
              h++;
            }
          };
          c();
        }
      };
      a();
      b();
    }
  };

  /* FIX FAILED IMAGES */
  const c = () => {
    $('img.chat-picture:not(.processed-image)').error(function () {
      const that = $(this);
      const oldLink = that.attr('src');

      // Process only unprocessed images
      if ($(that).hasClass('processed-image') === false) {
        that
          .addClass('processed-image')
          .attr('src', `https://proxy.duckduckgo.com/iu/?u=${oldLink}`);
      }
    });
  };

  /* SETUP */
  a();
  b();
  c();

  socket.on('chatMsg', function () {
    a();
    c();
  });
  socket.on('newPoll', function () {
    a();
    c();
  });
  socket.on('pm', function () {
    setTimeout(b, 1);
    setTimeout(c, 1);
  });
})();

// Scroll chat to bottom with a timeout if message contains images
socket.on('chatMsg', function () {
  if ($('#messagebuffer > div:last > span > a > img').length > 0) {
    setTimeout(function () {
      $('#messagebuffer').scrollTop($('#messagebuffer').prop('scrollHeight'));
    }, 300);
  }
});
