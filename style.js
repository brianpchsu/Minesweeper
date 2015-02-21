
array = board;
var gridSize = array[0].length;

$(document).ready(function(){
	var width = gridSize * 34;
	$('.main').css({
		'width': width+'px',
		'height': width+'px'
	});
	fillSquares(array);
});


var fillSquares = function(array){
	for (var row = 0; row < array.length; row++) {
		for (var col = 0; col < array[row].length; col++) {
			var obj = $("<span data="+ row + "--" + col+ "></span>");
			$(".main").append( obj);
			obj.click(clicked);
		}
	}
};

var clicked = function(event){
	// console.log($(event.target).attr("data"));
  var row = $(event.target).attr("data").split("--")[0];
  var col = $(event.target).attr("data").split("--")[1];

  value = board[row][col];
  if(value === 0){
    $(event.target).css({
      "background":"white"
    });
  } else if (value >0){
    $(event.target).css({
      "background":"white"
    });
    $(event.target).text(value);
  } 

  else if(value === -1){
  $(event.target).css({
      "background":"red"
    });
  }
};