/**
 * @file
 * Responsive navigation tabs.
 *
 * This also supports collapsible navigable is the 'is-collapsible' class is
 * added to the main element, and a target element is included.
 */
(function ($, Drupal) {
  $(document).ready(function($) {
    $('.form-item .form-control').each(function(index, el) {
      if ($.trim($(this).val()) !== '') {
        $(this).parents('.form-item').addClass('focus');
      }
    });

    $('.form-item .form-control').focus(function(event) {
      $(this).parents('.form-item').addClass('focus');
    });
    $('.form-item .form-control').focusout(function(event) {
      if ($.trim($(this).val()) == '') {
        $(this).parents('.form-item').removeClass('focus');
      }
    });
  });

})(jQuery, Drupal);
