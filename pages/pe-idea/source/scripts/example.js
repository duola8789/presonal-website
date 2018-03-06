/**
 * Created by zh on 2017/6/15.
 */
var items = $('.items');
var item = $('.item');

$(function () {
  initPortfolio();

  var $shareBox = $('#shareBox');
  var clickFlag = true;

  // 点击出现分享弹框
  $('#shareBtn').on('click', function () {
    var rightDistance = $(document).width() - $(this).offset().left - $(this).width();
    // 根据屏幕大小设置出现位置
    if (rightDistance < 160) {
      $shareBox.css({
        'right': '100px'
      })
    }
    else {
      $shareBox.css({
        'right': '-155px'
      })
    }
    if (clickFlag) {
      $shareBox.slideDown()
    }
    else {
      $shareBox.slideUp()
    }
    clickFlag = !clickFlag
  });

  // 点击页面分享弹框消失
  $(document).on('click', function (e) {
    var shareFlag = $(e.target).attr('data-shareFlag');
    if (!shareFlag) {
      $shareBox.slideUp();
      clickFlag = true
    }
  });

  // 点击分享到新浪微博
  $(document).on('click', '#sina', function () {
    alert('抱歉，暂不能分享到新浪微博')
  })
});

