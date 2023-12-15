
$(document).ready(function () {
  let line_one = $(".line-one");
  let hamburger = $(".hamburger");
  let line_two = $(".line-two");
  let line_tree = $(".line-tree");
  let sub_menu = $(".sub-menu");
  let slider_menu = $(".slider-sub-menu");

  var isOpen = false;
  hamburger.click(function () {
    if (!isOpen) {
      isOpen = true;
      line_one.addClass("line-one-click").removeClass("line-one");
      line_two.addClass("line-two-click").removeClass("line-two");
      line_tree.addClass("line-tree-click").removeClass("line-tree");
      sub_menu.css({
        position: "fixed",
        top: "5rem",
        right: "0%",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        top: "5rem",
        right: "70%",
        transition: ".4s",
      });
    } else {
      isOpen = false;
      line_one.addClass("line-one").removeClass("line-one-click");
      line_two.addClass("line-two").removeClass("line-two-click");
      line_tree.addClass("line-tree").removeClass("line-tree-click");
      sub_menu.css({
        position: "fixed",
        right: "-130%",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        right: "-30%",
        transition: ".4s",
      });
    }
  });

  // $(window).on("scroll", function () {
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop > 20) {
  //     $("nav").css({
  //       transition: ".4s",
  //       boxShadow: "0 0 60px #e2e2e2, -0 -0 60px #ffffff",
  //     });
  //   }
  // });
  // $(window).on("scroll", function () {
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop < 20) {
  //     $("nav").css({
  //       transition: ".4s",
  //       boxShadow: "0 0 60px #bababa, -0 -0 60px #ffffff",
  //     });
  //   }
  // });
});
