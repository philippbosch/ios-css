(function($) {
    $(document).ready(function() {
        $('.example button.switch').click(function() {
            var $button = $(this),
                $app = $button.closest('.example').find('.app');
            
            $app.attr('class', $button.data('original-class'));
            $app.addClass($button.data('switch-class'));
        }).each(function(i, el) {
            var $button = $(el),
                $app = $button.closest('.example').find('.app');
            
            $button.data('original-class', $app.attr('class'));
            if ($button.data('switch-default') !== undefined) {
                $button.trigger('click');
            }
        });
    });
})(jQuery);