function Pop(arr){
  var len = arr.length;

  for(var i = 0; i < len-1;i++){
    var x;
    var y;
    x = arr[i];
    y = arr[i+1];
    arr[i] = arr[i+1];
    arr[i+1] = x;

  }
  var front = arr.pop();
  console.log(front);
  return front;
}

var arr = [33,1,2,3];
Pop(arr);
