/**
 * Created by JESSIEJOE on 2017/8/9.
 */

var $body = $("html body");

// 初始化动画效果
$(document).ready(function () {
  var $aniView = $('.aniview');
  if ($aniView.length > 0) {
    $aniView.AniView();
  }
});

// 获取url参数
function getUrlArguments() {
  var currentUrl = window.location.href;
  var arg = currentUrl.substring(currentUrl.lastIndexOf('?') + 1, currentUrl.length);
  var currentArgument = [];
  var args = arg.split('&');
  for (var i = 0; i < args.length; i++) {
    var tmp = args[i].split('=');
    currentArgument[tmp[0]] = tmp[1];
  }
  return currentArgument;
}

// 百度地图
function createMap(isDetail) {
  var map = new BMap.Map("contactUs-map");
  var point = new BMap.Point(116.377159, 39.983482); //仰源大厦
  map.centerAndZoom(point, 13);
  map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
  map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

  var marker = new BMap.Marker(point);  // 创建标注
  map.addOverlay(marker);               // 将标注添加到地图中
  marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

  // 在详情页面添加比例尺和平移控件
  if (isDetail) {
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    map.addControl(top_left_control);
    map.addControl(top_left_navigation);
  }

  var label = new BMap.Label("PE-IDEA", {offset: new BMap.Size(25, -10)}); // 设置文字标注
  marker.setLabel(label);
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
      filter: '.init',
      sortBy: 'original-order'
    });
  });
}

$(function () {
  var $clickBtn = $('#clickBtn'),
    $exampleNavCollapse = $("#example-navbar-collapse");

  // 移动端导航点击后自动回收
  $(".nav > li > a").click(function () {
    $clickBtn.addClass("collapsed").attr("aria-expanded", false);
    $exampleNavCollapse.removeClass("in").attr("aria-expanded", false);
  });
  $(document).on("click", "body", function (e) {
    $clickBtn.addClass("collapsed").attr("aria-expanded", false);
    $exampleNavCollapse.removeClass("in").attr("aria-expanded", false);
  });

  // 设置满屏高度
  $('.fullPage').css({
    'min-height': $(window).height()
  });

  // 案例显示效果
  $('.item').hover(function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeIn('500');
  }, function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeOut('500');
  });


  // 快速返回页面顶部、底部
  $("#backToTop, #backToBottom").click(function () {
    $body.animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });
});

