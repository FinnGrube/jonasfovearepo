class Perceptron{

  /*
  * Activation Function
  */
  sign(n){
    if(n>=0){
      return 1;
    }
    return -1;
  }

  this.weights=[];

  constructor(){

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1,1);
    }

  }

  guess(inputs[]){
    let sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    let output  = sign (sum);

  }

}
