/**
 * @file
 * Responsive navigation tabs.
 *
 * This also supports collapsible navigable is the 'is-collapsible' class is
 * added to the main element, and a target element is included.
 */
(function ($, Drupal) {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      $('#block-dcd16-main-menu').toggleClass('main-menu-show');
    });
  }

  $(document).ready(function($) {
    $('#block-dcd16-main-menu li a:not(.dropdown-toggle)').click(function(event) {
      $('#block-dcd16-main-menu').removeClass('main-menu-show');
      $('.c-hamburger').removeClass('is-active');
    });

    if ($(window).scrollTop() > 100) {
      $('body').addClass('navbar-fixed');
    }
    else {
      $('body').removeClass('navbar-fixed');
    }
  });

  $(window).scroll(function(event) {
    if ($(window).scrollTop() > 100) {
      $('body').addClass('navbar-fixed');
    }
    else {
      $('body').removeClass('navbar-fixed');
    }
  });

})(jQuery, Drupal);
