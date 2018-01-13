

class Point{
  static f(x){
    return -0.3*x + 0.5;
  }

  constructor(x_,y_){
    this.x = random(-1,1) || x_;
    this.y = random(-1,1) || y_;


      if (this.x>this.y) {
        this.label = 1;
      }else{
        this.label = -1;
      }
  }

  show(){
    stroke(0);
    if (this.label==1) {
      fill(255);
    }else{
      fill(0);
    }


    ellipse(this.pixelX,this.pixelY,8,8);
  }

  get pixelX(){
    return map(this.x,-1,1,0,width);
  }

  get pixelY(){
    return map(this.x,-1,1,height,0);
  }

}
