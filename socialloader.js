(function($){
    $.fn.socialLoader = function(settings){
        var config = {
			'tooltip': 'null',
			
			'code': 'null',
			
			'script': 'false',
			
			'loaderClass': 'socialLoader',
			
			'tooltipClass': 'tooltip',
			
			'tooltipCss': {'position':'absolute',
						   'margin-top':'-100px',
						   'font-size':'9pt',
						   'width':'200px',
						   'background':'#000',
						   'color':'#fff',
						   'padding':'1em'}
			
        };

        if (settings){
			$.extend(config, settings);
		}
				
		return this.each(function(){
			$(this).addClass(config.loaderClass);
			
			$(this).prepend('<div class="' + config.tooltipClass + '">' + config.tooltip + '</div>');
			
			$('.' + config.tooltipClass).css(config.tooltipCss);
			$('.' + config.tooltipClass).hide();
			
			loaderClass = '.' + config.loaderClass;
			
        	$(loaderClass).live('hover',function(){
				$('.' + config.tooltipClass, this).show();
			});
			
			$(loaderClass).live('mouseleave',function(){
				$('.' + config.tooltipClass, this).hide();
			});
			
			$(this).click(function(event) {
				$(this).html(config.code);
				$.getScript(config.script);
				$(this).removeClass(config.loaderClass);
			});
		
        });
    };
})(jQuery);