let brain;
let n = 100;
let points = new Array(n);






function setup(){
  createCanvas(400,400);
  background(255);


  brain = new Perceptron();
  let inputs = [-1,0.5];
  let guess = brain.guess(inputs);

  console.log(guess);


  for (var i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
  console.log(points);
}


function draw(){
  //noLoop();

  let p1 = new Point(-1,Point.f(-1));
  let p2 = new Point(1,Point.f(1));
  line(p1.pixelX,p1.pixelY,p2.pixelX,p2.pixelY);

  //line(0,height,width,0);

  for (var i = 0; i < points.length; i++) {
    points[i].show();
  }

  for (let j = 0; j < points.length;j++) {
    let pt = points[j];
    //console.log(pt);
    let inputs = [pt.x,pt.y];
    let target = pt.label;
    //brain.train(inputs,target);

    let guess = brain.guess(inputs);
    if(guess == target){
      fill(0,255,0);
    }else{
      fill(255,0,0);
    }

    noStroke();
    ellipse(pt.pixelX,pt.pixelY,5,5);
  }
}

function mousePressed(){
  for (let j = 0; j < points.length;j++) {
    let pt = points[j];
    let inputs = [pt.x,pt.y];
    let target = pt.label;
    brain.train(inputs,target);
  }
}
