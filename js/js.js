$(document).ready(function () {
  // 作品排序工具
  $(".exampleSelectToolBtn").on("click", function () {
    $(this).next(".exampleSelectTypeOptions").slideToggle();
  });

  // 作品篩選按鈕
  $(".exampleSelectFilter a").on("click", function (e) {
    e.preventDefault();
    $(this)
      .addClass("exampleSelectFilterActive")
      .parent()
      .siblings()
      .children("a")
      .removeClass("exampleSelectFilterActive");
  });

  // to the top
  $(".backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  /*Swiper*/
  function mySwiper() {
 
    const swiper = new Swiper(".partnerComment", {
      /*  預設要顯示幾個卡片 */
      slidesPerView: 1,
      /* 斷點設定 是大於xxx px時候OOXX */
      breakpoints: {
     
        960: {
          slidesPerView: 3,
        },
    
        768: {
          slidesPerView: 2,
        },
     
        0: {
          slidesPerView: 1,
        },
      },
     
      spaceBetween: 20,
      pagination: {
      
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  mySwiper();
});
