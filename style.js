
array = [[1,1,1],[1,1,1],[1,1,1]]

var gridSize = array[0].length;

$(document).ready(function(){
	console.log("hit");
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
			var obj = $("<span></span>");
			obj.on("click",clicked(array[row][col]));
			$(".main").append( obj);
		};
	};
}


var clicked = function(value){
	console.log(value);
	if(value === 1){

	}
}