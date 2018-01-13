/*
* Activation Function
*/
function sign(n){
  if(n>=0){
    return 1;
  }
  return -1;
}

class Perceptron{

  constructor(){
    this.weights= new Array(2);
    this.lr = 0.01;


    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1,1);
    }
  }




  guess(inputs){
    let sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    let output  = sign(sum);
    return output;
  }



  train(inputs, target){
    let gu = this.guess(inputs);
    let err = target - gu;

    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] += err*inputs[i]*this.lr;
    }
  }

}
