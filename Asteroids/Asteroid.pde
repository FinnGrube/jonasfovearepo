class Asteroid{
  public PVector pos;
  public PVector vel;
  public float size;
  
  public Asteroid(float x, float y, float size_){
    this.pos = new PVector(x,y);
    this.vel = new PVector(random(-5,5),random(0.1,5));
    this.size=size_;
    
  }
  
  void move(){
    this.pos.add(this.vel);
    if(this.pos.x>width||this.pos.x<0){
      this.vel.x*=(-1);
    }
  }
  
  void show(){
    fill(125,120,120);
    ellipse(this.pos.x,this.pos.y,this.size,this.size*0.5*this.vel.mag());
  }
}