/**
 * Created by JESSIEJOE on 2016/12/17.
 */
$(function () {
  /*变量声明开始--------------------------------------------------------------------------------*/
  /*整版2中的变量----------------------------------*/
  var $leftDiv = $("#left"),//整版2
    $leftUl = $("#listUl"),//整版2中的列表
    $leftA1 = $("#leftA-1"),//2-1个人信息
    $leftA2 = $("#leftA-2"),//2-2技能&项目
    $leftA2Li = $("#leftA-2li"),//2-2-1技能+2-2-2项目
    $leftA3 = $("#leftA-3"),//2-3转行之路
    $leftA4 = $("#leftA-4"),//2-4更多
    /*整版3-1中的变量----------------------------------*/
    $rightDiv1 = $("#right1"),//整版3-1
    $right1Ul = $("#rightUl"),//3-1中的个人信息列表
    $rightLi = $right1Ul.find("li"),//3-1中的个人信息列表的每一项
    pageSum = $rightLi.length - 1,//3-1中的个人信息列表长度
    $back = $("#backBtn"),//3-1中的后退按钮
    $forward = $("#forwardBtn"),//3-1中的前进按钮
    page = 0,//3-1中个人信息列表翻页的页数
    $aBtn = $("#btn2").find("li"),//3-1中个人信息列表翻页的版面标志按钮列表
    /*整版3-2中的变量----------------------------------*/
    $rightDiv2 = $("#right2"),//整版3-2
    $right2Ul = $("#right2Ul"),//3-2中的skill列表
    $right2Li = $right2Ul.children("Li"),//skill列表中每一项
    $skillDescribe = $('.skillDescribe'),
    /*整版3-3中的变量----------------------------------*/
    $rightDiv3 = $("#right3"),//整版3-3，
    $right3Ul = $("#right3Ul"),//3-3中的对应project列表
    $right3Li = $right3Ul.children("li"),//project列表中每一项
    $right3LiA = $right3Li.find("a"),//project列表中每一项a
    /*整版3-4中的变量----------------------------------*/
    $rightDiv4 = $("#right4"),//整版3-4，
    /*整版3-5中的变量----------------------------------*/
    $rightDiv5 = $("#right5"),//整版3-5，
    /*整版3-5中的变量----------------------------------*/
    $rightDiv6 = $("#right6"),//整版3-6，
    $right6Ul = $("#right6Ul"),//3-6中的更多列表
    $right6Li = $right6Ul.children("Li");//更多列表中每一项
  /*变量声明结束--------------------------------------------------------------------------------*/

  /*3-2和3-3和3-6布局开始----------------------------------*/
  $(window).resize(function () {
    $right2Li.height($right2Li.width());
    $right3Li.height($right3Li.width());
    $right6Li.height($right6Li.width());
    if ($right2Li.width() < 150) {
      $skillDescribe.hide();
      $right6Li.find('span').css({
        'fontSize': '12px'
      })
    } else {
      $skillDescribe.show();
      $right6Li.find('span').css({
        'fontSize': '14px'
      })
    }
  }).resize();
  /*3-2和3-3布局结束----------------------------------*/

  /*首屏（整版1）向左移动开始--------------------------*/
  $leftUl.one("click", function () {
    $("#wrap1").animate({
      left: "-33.3%"
    }, "normal");
    $("#wrap2").animate({
      left: "-33.3%"
    }, "normal");
  });
  /*首屏向左移动结束----------------------------------*/

  /*点击出现3-1开始--------------------------------------------------------------------------------*/
  /*点击出现3-1开始----------------------------------*/
  $leftA1.click(function () {
    $rightDiv1.fadeIn()//出现3-1
      .nextAll()
      .fadeOut();
    $leftA2Li.hide();//隐藏2-2
    $leftDiv.removeClass("showA2");//整版2由黑变白
    $(this).addClass("aShowing")//2-1添加被点击后的CSS类
      .parent()
      .siblings()
      .find("a")
      .removeClass("aShowing");//2-*删除被点击后的CSS类
  });
  /*3-1轮播图----------------------------------*/
  function turnPage1(item) {//判断当前版面并根据版面对翻页按钮增加样式
    switch (item) {
      case 0:
        $back.addClass("invalid");
        $forward.removeClass("invalid");
        break;
      case pageSum:
        $back.removeClass("invalid");
        $forward.addClass("invalid");
        break;
      default:
        $back.removeClass("invalid");
        $forward.removeClass("invalid");
    }
  }

  function turnPage2(item) {//判断当前版面并根据版面对版面标志按钮页按钮增加样式
    $aBtn.eq(item).addClass("showing")
      .siblings()
      .removeClass("showing");
  }

  /*右翻页按钮----------------------------------*/
  $forward.click(function () {
    if (page !== pageSum) {
      if (!$right1Ul.is(":animated")) {
        $right1Ul.animate({
          left: "-=350px"
        }, "normal");
        page++;
      }
    }
    turnPage1(page);
    turnPage2(page);
  });
  /*左翻页按钮----------------------------------*/
  $back.click(function () {
    if (page !== 0) {
      if (!$right1Ul.is(":animated")) {
        $right1Ul.animate({
          left: "+=350px"
        }, "normal");
        page--;
      }
    }
    turnPage1(page);
    turnPage2(page);
  });
  /*版面标志按钮----------------------------------*/
  $aBtn.click(function () {
    $(this).addClass("showing")
      .siblings()
      .removeClass("showing");
    page = $(this).index();
    var distance = page * 350;
    if (!$right1Ul.is(":animated")) {
      $right1Ul.animate({
        left: "-" + distance
      }, "normal");
    }
    turnPage1(page);
  });
  /*点击出现3-1结束--------------------------------------------------------------------------------*/

  /*点击出现3-2和3-3开始---------------------------------------------------------------------------*/
  /*点击2-2出现2-2-1和2-2-2，并且出现3-1-------------*/
  $leftA2.click(function () {
    $rightDiv2.fadeIn()//出现3-2
      .css("visibility", "visible")//由于jQuery无法获取display:none的高度，CSS中设置了visibility: hidden;
      .siblings()
      .not("#left")
      .fadeOut();
    $leftA2Li.show();//出现2-2-1和2-2-2
    $leftDiv.addClass("showA2");//整版2由白变黑
    $(this).addClass("aShowing")//2-2添加被点击后的CSS类
      .parent()
      .siblings()
      .find("a")
      .removeClass("aShowing");//2-*删除被点击后的CSS类
    $("#skillBtn").addClass("skillClicked")//2-2-1出现被点击后的CSS样式类
      .siblings()
      .removeClass("projectClicked");//2-2-2删除被点击后的CSS样式类
  });
  /*点击2-2-1出现3-2-------------*/
  $("#skillBtn").click(function () {
    $leftA2.trigger("click");//出现3-2
    $(this).addClass("skillClicked")//2-2-1出现被点击后的CSS样式类
      .siblings()
      .removeClass("projectClicked");//2-2-2删除被点击后的CSS样式类
  });
  /*点击2-2-2出现3-3-------------*/
  $("#projectBtn").click(function () {
    $rightDiv3.fadeIn()//出现3-3
      .css("visibility", "visible")//由于jQuery无法获取display:none的高度，CSS中设置了visibility: hidden;
      .siblings()
      .not("#left")
      .fadeOut();
    $(this).addClass("projectClicked")//2-2-2出现被点击后的CSS样式类
      .siblings()
      .removeClass("skillClicked");//2-2-1删除被点击后的CSS样式类
  });
  /*点击出现3-2和3-3结束--------------------------------------------------------------------------------*/

  /*点击3-3中列表弹出3-4中的iframe-*/
  $right3LiA.not(":last").click(function () {
    var aHref = this.href;
    if ($(this).data('src')) {
      var imageScr = '../dist/images/' + $(this).data('src');
    }

    if (aHref) {
      $("#right4Iframe").attr("src", aHref).show();
      $("#projectImage").hide()
    } else {
      $("#projectImage").attr("src", imageScr).show();
      $("#right4Iframe").hide();
    }

    $rightDiv4.fadeIn()
      .css("visibility", "visible")//由于jQuery无法获取display:none的高度，CSS中设置了visibility: hidden;
      .siblings()
      .not("#left")
      .fadeOut();
    return false;
  });

  /*点击3-4关闭按钮-------------*/
  $("#right4Btn").click(function () {
    $rightDiv3.fadeIn()//出现3-3
      .css("visibility", "visible")//由于jQuery无法获取display:none的高度，CSS中设置了visibility: hidden;
      .siblings()
      .not("#left")
      .fadeOut();
  });

  /*点击2-3出现3-5-------------*/
  $leftA3.click(function () {
    $rightDiv5.fadeIn()
      .css("visibility", "visible")//由于jQuery无法获取display:none的高度，CSS中设置了visibility: hidden;
      .siblings()
      .not("#left")
      .fadeOut();
    $rightDiv5.find("p")
      .fadeIn(3000);
    $leftA2Li.hide();//隐藏2-2
    $leftDiv.removeClass("showA2");//整版2由黑变白
    $(this).addClass("aShowing")//2-1添加被点击后的CSS类
      .parent()
      .siblings()
      .find("a")
      .removeClass("aShowing");//2-*删除被点击后的CSS类
  });
  /*点击2-4出现3-6-------------*/
  $leftA4.click(function () {
    $rightDiv6.fadeIn()//出现3-1
      .css("visibility", "visible")//由于jQuery无法获取display:none的高度，CSS中设置了visibility: hidden;
      .siblings()
      .not("#left")
      .fadeOut();
    $leftA2Li.hide();//隐藏2-2
    $leftDiv.removeClass("showA2");//整版2由黑变白
    $(this).addClass("aShowing")//2-4添加被点击后的CSS类
      .parent()
      .siblings()
      .find("a")
      .removeClass("aShowing");//2-*删除被点击后的CSS类
  });
  $("#contact").click(function () {
    $("#wrap3").modal();
  });
});
