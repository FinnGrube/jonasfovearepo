let iterations = 1;
let size = 20;
let radius = (Math.sqrt(3)/6)*size;

function setup(){
  createCanvas(400,400);
  translate(width/2,height/2)
}
function draw(){
  let sides = 3 * 4^(iterations-1);

  let v1 =  createVector(0,radius);
  let v2 =  createVector(0,radius);
  let v3 =  createVector(0,radius);
  v2.rotate((TWO_PI/sides)*1);
  v3.rotate((TWO_PI/sides)*2);

  let l1 = createVector(v1.x,v1.y);
  l1.rotate(PI/2);
  l1.setMag(size/2);
  let l2 = createVector(v2.x,v2.y);
  l2.rotate(PI/2);
  l2.setMag(size/2);
  let l3 = createVector(v3.x,v3.y);
  l3.rotate(PI/2);
  l3.setMag(size/2);

  line(v1.copy().add(l1))
}

function toCartesian(theta, r){
  let x = r * cos(theta);
  let y = r * sin(theta);
  return [x,y];
}
