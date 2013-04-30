jQuery.fn.select_move_options = function(){
	$(this).each(function(){
		var el		= $(this).addClass('div-list-boxes');
		var selects = el.find('select');
		var select1 = selects.eq(0).addClass('select-first');

		var select2 = selects.eq(1).addClass('select-last');

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
		var divControl			= $('<div>').addClass('dual-list-boxes-control');
		var divButtonGroup	= $('<div>').addClass('btn-group btn-group-vertical').appendTo(divControl);
		var icon_left			= $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-angle-left'));
		var icon_right			= $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-angle-right'));
		var icon_all_left		= $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-double-angle-left'));
		var icon_all_right	= $('<button>').attr('type','button').addClass('btn').append($('<i>').addClass('icon-double-angle-right'));

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
		icon_left.appendTo(divButtonGroup);
		icon_right.appendTo(divButtonGroup);
		icon_all_left.appendTo(divButtonGroup);
		icon_all_right.appendTo(divButtonGroup);

		el.append(divControl);

		return el;
	});
}