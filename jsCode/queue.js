var queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

for(var i = 0 ; i < 4; i += 1) {
  print(queue.shift())
}