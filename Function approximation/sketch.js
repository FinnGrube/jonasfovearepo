
let f = "cos(x)";
let g = "";
let zoom=6;
let accuracy = 1;
let degree = 4;

let slider;
//let button;

let bx;
let by;

let pF = [];
let pG = [];

function setup(){
    g = approx(f,'x',degree);
    createCanvas(400,400);
    createP("");
    slider = createSlider(1,100,1,0.1);
    //button = createButton("refresh");
    //button.mousePressed(reload);

    bx = width/2;
    by = height/2;

    //reload();
}

function draw(){
//  noLoop();
  zoom=slider.value();
  accuracy=1/zoom;

  strokeWeight(2/zoom);
  background(0);
  translate(bx,by);

  stroke(0,0,255);
  point(1,1);

  scale(zoom,-zoom);

  stroke(0,255,0);
  line(-bx,0,bx,0);
  line(0,-by,0,by)

  noFill();
  stroke(255);

  beginShape();
  for(let j=0;j<pF.length;j++){
    let posF = pF[j];
    //vertex(posF.x,posF.y);
  }
  endShape();

  stroke(255,0,0);

  beginShape();
  for(let i=0;i<pG.length;i++){
    let posG = pG[i];
    vertex(posG.x,posG.y);
  }
  endShape();

}

function reload(){
  pF=[];
  for(let input1 = (-bx); input1 < bx; input1+= accuracy){
    let scope = {x:input1};

    let y1 = math.eval(f,scope);
    let x1 = input1;
    let pos1 = createVector(x1,y1);
    pF.push(pos1);
  }

  pG=[];
  for(let input2 = (-bx); input2 < bx; input2+= accuracy){
    let scope = {x:input2};

    let y2 = math.eval(g,scope);
    let x2 = input2;
    let pos2 = createVector(x2,y2);
    pG.push(pos2);
  }

}

function  approx(f,x, accuracy,point){
  point = point || 0;

  let derivs = [];
  for (let i = 0; i < accuracy; i++) {
    if(i==0){
      derivs[i]=math.derivative(f,x).toString();
    }else{
      derivs[i]=math.derivative(derivs[i-1],x).toString();
    }
  }

  //console.table(derivs);

  let g = "";
  let scope = {x: point};

  //c0 = f(0)
  g += math.eval(f,scope);

  for(let j =0;j<derivs.length;j++){
    let order = j+1;

    g+="+(";

    //calculating cj via the j-th derivative
    let expr = derivs[j];
    let cdesired = math.eval(expr,scope);
    let corr = factorial(order);

    //assembling the term-String
    let part = cdesired+"*(x^"+order+")/"+corr;
    g+=part;

    g += ")";

  }

  //console.log(g);
  return g;
}

function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1);
};



function slope(f,x,dx){
  dx = dx || 0.000000001;
  return (f(x+dx)-f(x))/dx;
}
