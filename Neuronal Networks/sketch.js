let brain;
let n = 100;
let points = new Array(n);






function setup(){
  createCanvas(700,700);
  background(255);


  brain = new Perceptron();
  let inputs = [-1,0.5];
  let guess = brain.guess(inputs);

  console.log(guess);


  for (var i = 0; i < points.length; i++) {
    points[i] = new Point();
  }
  //console.log(points);
}


function draw(){
  //noLoop();

  line(0,0,width,height);

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
    ellipse(pt.x,pt.y,5,5);
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
