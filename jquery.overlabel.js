/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 1.1.0
 *
 * Based on Making Compact Forms More Accessible by Mike Brittain (http://alistapart.com/articles/makingcompactformsmoreaccessible)
 */

 (function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.overlabel = function() {
        this.each(function() {
            var $label = $(this),
                $input = $('#' + $label.attr('for'));

            $label
                .addClass('overlabel')
                .bind('click', function(event) {
                    $input.focus();
                });

            $input
                .bind('focus blur', function(event) {
                    $label.css('display', (event.type == 'blur' && !$input.val() ? '' : 'none'));
                }).trigger('blur');
        });
    };
}));
