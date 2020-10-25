module.exports = function towelSort (matrix) {
if (!matrix || matrix.length === 0) {
return [];
}

let map = [];
for (var i = 0; i<matrix.length; i++) {
if (i%2===0){
for(var j = 0; j<matrix[i].length; j++){
map.push(matrix[i][j]);
}
} else {
for(var j = matrix[i].length; j>0; j--) {
map.push(matrix[i][j-1]);
}
}
}

return map;
}
