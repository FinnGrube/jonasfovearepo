let p;

function setup(){
  createCanvas(400,200);
  p = new Perceptron();
  let inputs = [-1,0.5];
  let guess = p.guess(inputs);

  console.log(guess);
}
function draw(){}
