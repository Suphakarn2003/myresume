$(document).ready(function(){
    $('.slideshow').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,     // แสดง 2 รูปต่อรอบ (จากเดิม 3)
        slidesToScroll: 3,
        centerMode: false,
        variableWidth: false
        
      });
      $('.slideshow .slick-prev').html('<i class="fa fa-chevron-left" style="color: #74C0FC;"></i>');
      $('.slideshow .slick-next').html('<i class="fa fa-chevron-right" style="color: #74C0FC;"></i>');
      $('.slideshow .slick-dots li').html('')    
});

$(document).ready(function() {
  // เปิดเมนูเมื่อคลิกปุ่ม 3 ขีด
  $('.menu-toggle').click(function() {
    $('.menu-function').toggleClass('open');
  });

  // ปิดเมนูเมื่อคลิกปุ่มกากบาท
  $('.close-btn').click(function() {
    $('.menu-function').removeClass('open');
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

$(document).ready(function () {
  // TAB: Skill Section
  $('.tab-btn').click(function () {
    const target = $(this).data('target');

    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    $('.skills-box').hide(); // ซ่อนทุกกล่องก่อน
    $(target).show().addClass('blink-once'); // แสดงกล่องใหม่ + กระพริบทันที

    // ลบคลาส blink หลัง animation จบ
    setTimeout(() => {
      $(target).removeClass('blink-once');
    }, 400);
  });

  // FILTER: Project Section
  $('.filter-btn').click(function () {
    const filterValue = $(this).data('filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.project-card').hide(); // ซ่อนทั้งหมด

    if (filterValue === 'all') {
      $('.project-card')
        .show()
        .addClass('blink-once');

      setTimeout(() => {
        $('.project-card').removeClass('blink-once');
      }, 400);
    } else {
      $(`.project-card[data-category="${filterValue}"]`)
        .show()
        .addClass('blink-once');

      setTimeout(() => {
        $(`.project-card[data-category="${filterValue}"]`).removeClass('blink-once');
      }, 400);
    }
  });
});

