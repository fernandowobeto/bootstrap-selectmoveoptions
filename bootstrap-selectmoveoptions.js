(function($){
	$.fn.selectMoveOptions = function(){
		$(this).each(function(){
			var el		= $(this).css('overflow','auto');
			var selects = el.find('select');
			var select1 = selects.eq(0).addClass('pull-left').css({'width':'45%','min-height':'120px','height':'auto'});
			var select2 = selects.eq(1).addClass('pull-right').css({'width':'45%','min-height':'120px','height':'auto'});

			select1.on('dblclick','option',function(){
				var option = $(this);
				option.remove();
				select2.append(option);
			});
			select2.on('dblclick','option',function(){
				var option = $(this);
				option.remove();
				select1.append(option);
			});
			var divControl			 = $('<div>').css({'margin-left':'auto','margin-right':'auto','width':'10%','text-align':'center'});
			var divButtonGroup	 = $('<div>').addClass('btn-group btn-group-vertical').appendTo(divControl);
			var icon_all_left		 = $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-fast-backward'));
			var icon_left				 = $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-backward'));
			var icon_right			 = $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-forward'));
			var icon_all_right	 = $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-fast-forward'));

			icon_left.click(function(){
				var selecteds = select2.find('option:selected');
				selecteds.remove().appendTo(select1);
			});
			icon_right.click(function(){
				var selecteds = select1.find('option:selected');
				selecteds.remove().appendTo(select2);
			});
			icon_all_left.click(function(){
				var selecteds = select2.find('option');
				selecteds.remove().appendTo(select1);
			});
			icon_all_right.click(function(){
				var selecteds = select1.find('option');
				selecteds.remove().appendTo(select2);
			});
			icon_all_left.appendTo(divButtonGroup);
			icon_left.appendTo(divButtonGroup);
			icon_right.appendTo(divButtonGroup);
			icon_all_right.appendTo(divButtonGroup);

			el.append(divControl);

			return el;
		});
	}
})(jQuery);