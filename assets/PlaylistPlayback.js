var mediaCurrentTime;
socket.on('mediaUpdate', function (data) {
  mediaCurrentTime = data.currentTime.toFixed(0);
});

setInterval(function () {
  if (PLAYER.mediaLength != '0') {
    let a, b, c;
    a = 0;
    b = mediaCurrentTime;
    b != c ? (a = (b / PLAYER.mediaLength) * 100) : '';
    c = b;
    $('.queue_active').css('background-size', a + '% 100%');
  } else {
    $.fn.hasAttr = function (name) {
      return this.attr(name) !== undefined;
    };
    $('.queue_active').hasAttr('style')
      ? $('.queue_active').removeAttr('style')
      : '';
  }
}, 2500);

$('.ct-color').remove();
let ctcolor;
ctcolor = 'rgb(0, 0, 50), rgb(0, 50, 50)) !important;';

$(`<style>`)
  .addClass('ct-color')
  .appendTo('head')
  .text(
    '.queue_active{background-repeat: no-repeat !important;background-size:0% 100%; background-repeat:no-repeat;padding:5px} .queue_active.queue_temp {background-color: rgb(50 50 50 / 0.75); !important}',
  );
