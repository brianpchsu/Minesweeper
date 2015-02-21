// Decide board size n
var n = 10;
var bombNum = n*n/2;

var randomfun = function (){
  return Math.floor(Math.random()*n)%3? 0: -1;
};

var checkBombNum = function(num){
  return num<0? 1:0;
};

var board = [];
// Create n * n array (board)
// Random number (0 or 1) in each position
for (var i =0; i< n; i++){
  board[i] = [];
  for (var j = 0; j< n; j++){
    if (!randomfun()) {board[i][j] = 0;}
    else { board[i][j] = -1;}
  }
}

for (var i = 0; i<n; i++){
  for (var j = 0; j< n; j++){
    if (board[i][j] !== -1){
      if (i ===0){
        if (j ===0) {
          board[i][j] = checkBombNum(board[i][j+1])
                  + checkBombNum(board[i+1][j]) + checkBombNum(board[i+1][j+1]);
        }
        else if ( j === n-1){
          board[i][j] = checkBombNum(board[i][j-1])
              + checkBombNum(board[i+1][j-1])+ checkBombNum(board[i+1][j]);
        }
        else {
           board[i][j] = checkBombNum(board[i][j-1]) + checkBombNum(board[i][j+1])
              + checkBombNum(board[i+1][j-1])+ checkBombNum(board[i+1][j]);
        }
      }
      else if (i ===n-1){
        if (j ===0) {
          board[i][j] = checkBombNum(board[i][j+1])
                  + checkBombNum(board[i-1][j]) + checkBombNum(board[i-1][j+1]);
        }
        else if ( j === n-1){
          board[i][j] = checkBombNum(board[i][j-1]) 
              + checkBombNum(board[i-1][j-1])+ checkBombNum(board[i-1][j]);
        }
        else {
           board[i][j] = checkBombNum(board[i][j-1]) + checkBombNum(board[i][j+1])
              + checkBombNum(board[i-1][j-1])+ checkBombNum(board[i-1][j]);
        }
      }
      else {
        if (j ===0) {
          board[i][j] = checkBombNum(board[i-1][j])+ checkBombNum(board[i-1][j+1])
                  + checkBombNum(board[i][j+1])
                  + checkBombNum(board[i+1][j]) + checkBombNum(board[i+1][j+1]);
        }
        else if ( j === n-1){
          board[i][j] = checkBombNum(board[i-1][j-1])+ checkBombNum(board[i-1][j])  
              + checkBombNum(board[i][j-1]) 
              + checkBombNum(board[i+1][j-1])+ checkBombNum(board[i+1][j]);
        }
        else {
           board[i][j] = checkBombNum(board[i-1][j-1]) + checkBombNum(board[i-1][j])+ checkBombNum(board[i-1][j+1]) 
                    + checkBombNum(board[i][j-1]) + checkBombNum(board[i][j+1])
                    + checkBombNum(board[i+1][j-1])+ checkBombNum(board[i+1][j]) + checkBombNum(board[i+1][j+1]);
        }
      }
      
    }
  }
}

///
console.log(board);
// for (var i = 0; i<n; i++){
//   for (var j = 0; j< n; j++){
//     if (board[i][j] !== -1){
//       if (i ===0){
//         if (j ===0) {
//           board[i][j] = Math.abs(board[i][j+1]
//                   + board[i+1][j] + board[i+1][j+1]);
//         }
//         else if ( j === n-1){
//           board[i][j] = Math.abs(board[i][j-1] 
//               + board[i+1][j-1]+ board[i+1][j]);
//         }
//         else {
//            board[i][j] = Math.abs(board[i][j-1] + board[i][j+1]
//               + board[i+1][j-1]+ board[i+1][j]);
//         }
//       }
//       else if (i ===n-1){
//         if (j ===0) {
//           board[i][j] = Math.abs(board[i][j+1]
//                   + board[i-1][j] + board[i-1][j+1]);
//         }
//         else if ( j === n-1){
//           board[i][j] = Math.abs(board[i][j-1] 
//               + board[i-1][j-1]+ board[i-1][j]);
//         }
//         else {
//            board[i][j] = Math.abs(board[i][j-1] + board[i][j+1]
//               + board[i-1][j-1]+ board[i-1][j]);
//         }
//       }
//       else {
//         if (j ===0) {
//           board[i][j] = Math.abs(board[i-1][j]+ board[i-1][j+1] 
//                   + board[i][j+1]
//                   + board[i+1][j] + board[i+1][j+1]);
//         }
//         else if ( j === n-1){
//           board[i][j] = Math.abs(board[i-1][j-1]+ board[i-1][j]  
//               +board[i][j-1] 
//               + board[i+1][j-1]+ board[i+1][j]);
//         }
//         else {
//            board[i][j] = Math.abs(board[i-1][j-1] + board[i-1][j]+ board[i-1][j+1] + 
//                     board[i][j-1] + board[i][j+1]
//                     + board[i+1][j-1]+ board[i+1][j] + board[i+1][j+1]);
//         }
//       }
      
//     }
//   }
// }
