
array = board;

var gridSize = array[0].length;

$(document).ready(function(){
	var width = gridSize * 34;
	$('.main').css({
		'width': width+'px',
		'height': width+'px'
	});
	fillSquares(array);
})

var createSpan = function(){
	var obj = {};

	return obj;
}

var fillSquares = function(array){
	for (var row = 0; row < array.length; row++) {
		for (var col = 0; col < array[row].length; col++) {
			array[row][col]
			var obj = $("<span data="+ row + "--" + col+ "></span>");
			$(".main").append( obj);
			obj.click(clicked);
		};
	};
}


var clicked = function(event){
	console.log($(event.target).attr("data"));
	
	$(event.target).css({
		"background":"green"
	})
	if(value === 0 ){

	}

	else if(value === 1){
	obj.css({
		"background":"green"
	})

	}
}