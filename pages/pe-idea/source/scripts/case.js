/**
 * Created by zh on 2017/6/15.
 */
var itemsNav = $('#items-nav');
var items = $('.items');
var item = $('.item');

// 案例展示瀑布流效果
function initPortfolio(showTarget) {
  var filter = showTarget ? '.' + showTarget : '.item';
  // 初始化案例导航按钮状态
  itemsNav.find(filter).addClass('active').siblings().removeClass('active');
  // 案例图片初始化加载
  items.imagesLoaded(function () {
    items.isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows',
      transitionDuration: '0.7s',
      filter: filter,
      sortBy: 'original-order'
    });
  });
}

$(function () {
  // 获取url参数，确定当前展示哪个模块的案例
  var urlParams = getUrlArguments();
  var showTarget = null;
  if (urlParams && urlParams.target) {
    showTarget = urlParams.target
  }
  else {
    showTarget = null;
  }

  // 案例显示效果
  $('.item').hover(function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeIn('500');
  }, function () {
    $(this).find('.workTitle, .overlay').stop(true, true).fadeOut('500');
  });

  // 点击导航，切换案例显示内容
  itemsNav.find('li').click(function () {
    $(this).addClass('active')
      .siblings()
      .removeClass('active');
    var showItem = $(this).attr('data-filter');
    var filter = "." + showItem;
    items.isotope({
      filter: filter,
      sortBy: 'original-order'
    });
  });

  // 案例展示瀑布流效果
  initPortfolio(showTarget);
});