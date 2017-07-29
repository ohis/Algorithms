function InsertAt(arr,index,val){
  var j = arr.length;
  var i = 0;
  var k = index;
  j = j + 1;
console.log(j);

  while(j >= k){
    arr[j] = arr[j-1];
    j = j - 1;
    console.log('IN WHILE LOOP');
    console.log(j);
  }
  arr[k] = val;
  console.log(arr);
  return arr;
}
var arr = [1,2,3,6];
index = 0;

var d = InsertAt(arr,index,10);
