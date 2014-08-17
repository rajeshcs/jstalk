var myArray = [];
myArray[1000] = 1000;
myArray[0] = 0;
for(var i in myArray) {
    print("index " + i + "=" + myArray[i]);
}

for(var i = 0; i < myArray.length; i += 1) {
  print(myArray[i])
}

function matrix(m, n, initial) {
  var i, j, a, mat = [];
  for(i = 0; i < m; i += 1) {
    a = []
    for(j = 0; j < n; j += 1) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
}

var mat4_3 = matrix(4, 3, 0);
mat4_3[2][1] = 4;
print(mat4_3);