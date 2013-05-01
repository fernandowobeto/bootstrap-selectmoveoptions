function html(s) {
	 return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

$(document).ready(function() {

	 var exemplo = '<div id="div-area-selects">'+"\n"+
						'    <select multiple>'+"\n"+
						'        <option value="1">Brasil</option>'+"\n"+
						'        <option value="2">Argentina</option>'+"\n"+
						'        <option value="3">Uruguai</option>'+"\n"+
						'        <option value="4">Chile</option>'+"\n"+
						'        <option value="5">Paraguai</option>'+"\n"+
						'    </select>'+"\n"+
						'    <select multiple></select>'+"\n"+
						'</div>'+"\n"+
						'<script>'+"\n"+
						'    $("#div-area-selects").selectMoveOptions();'+"\n"+
						'</script>';

	$('#exemplo-utilizacao').text(exemplo);
	
	prettyPrint();
	
	$('#div-area-move-options').selectMoveOptions();

});

