$(document).ready(function () {
    //    меню --------------------------------------------
    (function () {
        $(".menu").click(
            function () {
                $(".menu-link").toggleClass("change");
            });
    }());
    //    слайдер
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);
 $(document).ready(function() {
   $('.slider-circle').each(function() {
        if ($(this).attr('chooseslide') == currentSlide) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }   
    })
 })
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
        $('.slider-circle').each(function() {
        if ($(this).attr('chooseslide') == currentSlide) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }   
    })
    }
  
    var chooseSlide = function(number) {
      slides[currentSlide].className = 'slide';
      currentSlide = (number) % slides.length;
      slides[currentSlide].className = 'slide showing';
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  
    
    for(var i = 0; i < slides.length; i++) {
      $('#slides-circles').append('<li class="slider-circle" id="circle-' + i + '" chooseSlide="' + i + '"></li>')
    }
  
  
  $('#radio-1').click(function() {
    $('.pred').html('Частное лицо')
  })
  
 $('#radio-2').click(function() {
    $('.pred').html('Предприниматель')
  })
  

    //    загрузка файлов --------------------------------------------
  /* (function () {

        'use strict';

        $('.input-file').each(function () {
            var $input = $(this),
                $label = $input.next('.js-labelFile'),
                labelVal = $label.html();

            $input.on('change', function (element) {
                var fileName = '';
                if (element.target.value) fileName = element.target.value.split(' /  / ').pop();
                fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
            });
        });

    })();*/
    //opn --------------------------------------------
    // Add the +/- to titles
    $('.block-title').each(function () {
        $(this).append('<span class="caret"></span>');
    });

    // If the window is less than 980px wide...
    if ($(window).width() < 980) {
        // Close all blocks not open by default
        $('.block:not(.block-default-open) .block-title').addClass('block-title-closed');
        $('.block:not(.block-default-open) .content').addClass('block-closed');
    }

    // If a block is closed by default, close everything
    $('.block-default-closed .block-title').addClass('block-title-closed');
    $('.block-default-closed .content').addClass('block-closed');

    // When the title is clicked...
    $('.block-title').click(function () {
        // Toggle the title open/closed 
        $(this).toggleClass('block-title-closed');
        // Toggle the content to open/closed
        $(this).parent().find('.content').toggleClass('block-closed');
    });
    //    табс --------------------------------------------
  $('.slider-circle').click(function() {
    $('.slider-circle').removeClass('active')
    $(this).addClass('active')
    chooseSlide($(this).attr('chooseSlide'));
  })
    // Variables
  var clickedTab = $(".tabs > .activeg");
    var tabWrapper = $(".tab__content");
    var activeTab = tabWrapper.find(".activeg");
    var activeTabHeight = activeTab.outerHeight();

    // Show tab on page load
    activeTab.show();

    // Set height of wrapper on page load
    //tabWrapper.height(activeTabHeight);

    $(".tabs > li").on("click", function () {
     

        // Remove class from active tab
        $(".tabs > li").removeClass("activeg");

        // Add class activeg to clicked tab
        $(this).addClass("activeg");

        // Update clickedTab variable
        clickedTab = $(".tabs .activeg");

        // fade out activeg tab
        activeTab.fadeOut(250, function () {

            // Remove active class all tabs
            $(".tab__content > li").removeClass("activeg");

            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();

            // Add class active to corresponding tab
            $(".tab__content > li").eq(clickedTabIndex).addClass("activeg");

            // update new active tab
            activeTab = $(".tab__content > .activeg");

            // Update variable
            activeTabHeight = activeTab.outerHeight();

            // Animate height of wrapper to new tab height
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 500, function () {

                // Fade in active tab
                activeTab.delay(50).fadeIn(250);

            });
        });
    });
  
  var tabsArray = $('.tabs').children()
  var iconsArray = [
    {
      url: 'url(./icons/ico-31.svg)',
      text: 'Запчасти для легковых автомобилей'
    },
    {
      url: 'url(./icons/ico-32.svg)',
      text: 'Запчасти для автобусов'
    },
    {
      url: 'url(./icons/ico-33.svg)',
      text: 'Запчасти для грузового транспорта'
    },
    {
      url: 'url(./icons/ico-35.svg)',
      text: 'Запчасти для мототехники'
    },
    {
      url: 'url(./icons/ico-34.svg)',
      text: 'Запчасти для спецтехники'
    },
    {
      url: 'url(./icons/ico-36.svg)',
      text: 'Автомобильные аксессуары / материалы'
    },
    {
      url: 'url(./icons/ico-40.svg)',
      text: 'Шины/диски'
    },
    {
      url: 'url(./icons/ico-41.svg)',
      text: 'Аудио / видео техника'
    }
  ]
  

  
  $('.tabs li').click(function() {
      for(var i = 1; i <= tabsArray.length; i++) {
    if ($('.tabs :nth-child('+i+')').hasClass('activeg')) {
      setTimeout(function() {
        $('.car-bd').css('background-image', iconsArray[i-1].url)
        $('.fl-end p').html(iconsArray[i-1].text)
      }, 500)
      break
    } else { continue }
  }
    
      if (!$(this).hasClass('activeg')) {
        $('.tabs li').removeClass('activeg');
        $(this).addClass('activeg');
        $('.tab__content li').hide()
        $('#' + $(this).attr('selecttab')).show()
      }
    })
  
    //    табс-слайдпер с превью
    $(".slider-preview").click(function () {
        var temp;
        temp = $("#main-slide").html();
        $("#main-slide").html($(this).html());
        cursorAway = false;
        $(".slider-preview").removeClass("activeSlide");
        $(this).addClass("activeSlide");
    });
  
  $('.fs li').hover(function() {
    $(this).find($('span')).toggle()
  })

    var cursorAway = true;
    var slidesz = $(".slider-preview").children().clone();
    var aSlides = $(".slider-preview");
    var slideNumber = 0;

  $('k').click(function() {
    $(this).parent().find($('.ns')).toggleClass('ns-active')
  })
  
  $(document).click(function(e) {
    if (!$('.select-sity').is(e.target) && !$('.select-sity-open').is(e.target) && $('.select-sity').has(e.target).length === 0 && $('.select-sity').is(':visible') === true) {
      $('.select-sity').fadeOut()
    }
     
  })
   $('.select-sity-open').stop().click(function() {
    $('.select-sity').slideToggle()
})
  
  
  
  
  $('#selectType').hover(function() {
    for (var i = 1; i < 6; i++) {
        $('#type' + i).hide()
    }
    for (var i = 1; i < 6; i++) {
      if ($('#selectType').val() == i) {
        $('#type' + i).show()
        break
      } else {continue}
    }
  })

    var agreement=$(".agreement");
    var toggleAgrShow=$(".toggleAgrShow");
    var toggleAgrHide=$(".toggleAgrHide");

    toggleAgrShow.click(function(){
        agreement.toggle(1000);
        toggleAgrShow.toggle();
        toggleAgrHide.toggle();
    });

    toggleAgrHide.click(function(){
        agreement.toggle(1000);
        toggleAgrHide.toggle();
        toggleAgrShow.toggle();
    });

    var clickNext=$(".eil>.next");
    var modelsDetailed=$(".modelsDetailed");
    clickNext.click(function(){
        modelsDetailed.toggle();
        $(this).toggleClass("nextRotate");
    })
});