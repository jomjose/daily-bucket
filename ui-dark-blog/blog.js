jQuery(document).ready(function ($) {
    $('.fake-placeholder input').each(function () {
        if ($(this).val() == "") {
            $(this).addClass('empty');
        }
    })
    $('.fake-placeholder input').on('change', function () {
        if ($(this).val() == "") {
            $(this).addClass('empty');
        } else {
            $(this).removeClass('empty');
        }
    })
    $('.fake-select-objects').on('click', function (e) {
        if ($(event.target).hasClass('fake-select-objects')) {
            $(this).find('input[type=radio]').prop('checked', false);
        }
    })

    $('.ui-kit .row:first-child button').on('click', function () {
        $('.ui-kit').removeClass($('button.current').attr('data-color'));
        $('.ui-kit .row:first-child button').removeClass('current');
        $('.ui-kit').addClass($(this).attr('data-color'));
        $(this).addClass('current');
    })
})
