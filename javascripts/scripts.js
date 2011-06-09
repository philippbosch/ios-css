(function($) {
    $(document).ready(function() {
        $('#toc a').click(function() {
            $('#toc a.selected').removeClass('selected');
            $(this).addClass('selected');
        });
    });
})(jQuery);