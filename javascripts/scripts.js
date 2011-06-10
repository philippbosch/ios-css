(function($) {
    $(document).ready(function() {
        $('#toc a').click(function() {
            $('#toc a.selected').removeClass('selected');
            $(this).addClass('selected');
        });
        
        var updateTime = function() {
            $('#device .time').text((new Date()).toLocaleTimeString().substr(0,5).trim());
        };
        updateTime();
        window.setInterval(updateTime, 1000);
        
        
        // Device settings
        $('a[href="#device-settings"]').click(function(e) {
            e.preventDefault();
            $('#device-settings form').toggle();
        });
        
        $('#carrier-field').bind('change keyup', function() {
            var $field = $(this),
                $carrier = $('#device .carrier');
            $carrier.text($field.val());
        });
        
        $('#reception-field').bind('change', function() {
            var $field = $(this),
                $reception = $('#device .reception'),
                value = $field.val();
            $reception.find('.segment').removeClass('active');
            $reception.find('.segment:lt(' + value + ')').addClass('active');
        });
        
        $('#battery-field').bind('change', function() {
            var $field = $(this),
                $battery = $('#device .battery'),
                $level = $('.level', $battery),
                $percentage = $('.percentage', $battery),
                value = $field.val();
            $level.css('width', value + '%');
            $percentage.text(value + '%');
            $battery.toggleClass('low', value < 20);
            $battery.toggleClass('really-low', value < 10);
        });
        
        // Settings persistency
        if (localStorage !== undefined) {
            $('#device-settings input').bind('change keyup', function() {
                var $field = $(this);
                localStorage[$field.attr('name')] = $field.val();
            });
            
            var carrier = localStorage.carrier || "Carrier",
                reception = localStorage.reception || 5,
                battery = localStorage.battery || 100;
            
            $('#carrier-field').val(carrier).trigger('change');
            $('#reception-field').val(parseInt(reception, 10)).trigger('change');
            $('#battery-field').val(parseInt(battery, 10)).trigger('change');
        }
    });
})(jQuery);