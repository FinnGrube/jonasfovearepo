let p;
let n = 100;
let points = new Array(n);






function setup(){
  createCanvas(700,500);
  background(255);


  p = new Perceptron();
  let inputs = [-1,0.5];
  let guess = p.guess(inputs);

  console.log(guess);


  for (var i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
}


function draw(){
  noLoop();
  console.log(points);
  //stroke(0);
  //line(0,0,width,height);

  for (var i = 0; i < points.length; i++) {
    points[i].show();
  }
}
