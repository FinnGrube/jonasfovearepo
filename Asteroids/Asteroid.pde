class Asteroid{
  public PVector pos;
  private PVector vel;
  private float wid, hei;
  
  public Asteroid(float x, float y, float size){
    this.pos = new PVector(x,y);
    this.vel = new PVector(random(-5,5),random(0.1,5));
    this.wid=size;
    this.hei = this.wid*0.5*this.vel.mag();
  }
  
  void move(){
    this.pos.add(this.vel);
    if(this.pos.x>width||this.pos.x<0){
      this.vel.x*=(-1);
    }
  }
  
  void show(){
    fill(140,120,120);
    ellipse(this.pos.x,this.pos.y,this.wid,this.hei);
  }
  
  public boolean inFrame(){    
    if(this.pos.y<0||this.pos.y>height){
      return false;
    }
    
    return true;
  }
  
  public Hitbox getHitbox(){
    return new Hitbox(this.pos.x-this.wid/2,this.pos.x+this.wid/2,this.pos.y-this.hei/2,this.pos.y+this.hei/2);
  }
}