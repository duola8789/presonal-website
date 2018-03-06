/**
 * Created by JESSIEJOE on 2017/4/4.
 */

var $myCarousel1 = $('#myCarousel'),
  $myCarousel2 = $('#myCarousel2'),
  $myHeader = $("#myHeader");
var $body = $("html body");

// 初始化动画效果
$(document).ready(function () {
  $('.aniview').AniView();
});

// 设置轮播图高度
function setCarouselHeight() {
  var $myCarousel1 = $('#myCarousel');
  var navHeight = 54;
  $myCarousel1.css({
    'max-height': $(window).height() - navHeight
  }).find('.item').css({
    'max-height': $(window).height() - navHeight
  });
}

// 设置展示地图的宽度
function setMapHeight() {
  var $map = $('.contactUs-map'),
    $contactUsDetail = $('.contactUs-detail');
  var maxHeight = 400,
    screenWidth = $(document).width();
  var height = 0;

  if (screenWidth < 1200) {
    height = $contactUsDetail.height() < maxHeight ? $contactUsDetail.height() : maxHeight;
  }
  else {
    height = height = $contactUsDetail.height()
  }

  $map.height(height);
}

// 案例展示瀑布流效果
function initPortfolio() {
  var items = $('.items');
  var item = $('.item');
  // 案例图片初始化加载
  items.imagesLoaded(function () {
    items.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows',
      transitionDuration: '0.7s',
      filter: '.item',
      sortBy: 'original-order'
    });
  });
}

// 缩放窗口时重设轮播图宽度和导航状态
$(window).resize(function () {
  setCarouselHeight();
  $(document).triggerHandler('scroll');
  setMapHeight()
});

$(function () {
  var $exampleNavCollapse = $("#example-navbar-collapse");

  // 获取url参数，确定是否显示首屏logo及动画
  var urlParams = getUrlArguments();
  var showLogo = 1;
  if (urlParams && urlParams.showLogo) {
    showLogo = urlParams.showLogo
  }
  else {
    showLogo = 1;
  }

  // 页面顶部加载logo的动画效果
  // 只有在直接打开首页时加载动画效果，如果由二级页面返回不加载动画效果
  // 如果不在页面最顶端刷新页面也不会出现动画效果
  if (showLogo === 1) {
    if ($(document).scrollTop() === 0) {
      $('.loader').css('display', 'flex');
      setTimeout(function () {
        $('.loader')
          .addClass('fadeOutUp')
          .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).hide()
          });
      }, 2000);
    }
  }
  else {
    $('.loader').hide()
  }

  // 鼠标移开下来文字消失
  $('#joinUs').find('.content-item').on('mouseleave', function () {
    $('.collapse').collapse('hide')
  });

  // 轮播图间隔
  $myCarousel1.carousel({
    interval: 3000
  });
  $myCarousel2.carousel({
    interval: 5000
  });

  // 案例hover效果
  $('.item').hover(function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeIn('500');
  }, function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeOut('500');
  });

  // 导航滚动
  $(document).scroll(function () {
    var $carousel1Height = $myCarousel1.height();
    if ($(this).scrollTop() > $carousel1Height) {
      $myHeader.css({
        'position': 'fixed',
        'top': 0
      });
    }
    else {
      $myHeader.css({
        'position': 'absolute',
        'top': $carousel1Height
      })
    }
  });

  // 点击导航定位到锚点的动画效果
  $exampleNavCollapse.find('a').click(function () {
    $body.animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });

  // 设置轮播图高度
  setCarouselHeight();

  // 案例展示瀑布流效果
  initPortfolio();

// 设置展示地图的宽度
  setMapHeight();

  // 创建百度地图
  createMap();
});
