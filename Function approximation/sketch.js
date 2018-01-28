function setup(){
  let f = "10x^7+2x^2 + 5x + 3";
  approx(f,'x',7);
}

function draw(){}

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

  console.table(derivs);

  let g = "";
  let scope = {x0: point};

  for(let j =0;j<derivs.length;j++){
    if(j!=0){
      g+="+";
    }
    let expr = math.parse(derivs[j]);
    //let sl = expr.eval(scope);
    console.log(expr);
    //g += sl+"*"+"("+x+"^"+j+"/"+factorial(j)+")";
  }

  console.log(g);
}

function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1);
};

function slope(f,x,dx){
  dx = dx || 0.000000001;
  return (f(x+dx)-f(x))/dx;
}
