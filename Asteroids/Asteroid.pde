class Asteroid {
  public PVector pos;
  private PVector vel;
  private float wid, hei;

  public Asteroid(float x, float y, float size) {
    this.pos = new PVector(x, y);
    this.vel = new PVector(random(-5, 5), random(0.5, 5));
    this.wid=size;
    this.hei = this.wid*0.4*this.vel.mag();
  }

  void move() {
    this.pos.add(this.vel);
    if (this.pos.x>width||this.pos.x<0) {
      this.vel.x*=(-1);
    }
  }

  void show() {
    fill(200, 180, 180);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.wid, this.hei);
    stroke(0,0,255);
    point(this.pos.x,this.pos.y);
  }

  public boolean inFrame() {    
    if (this.pos.y<0||this.pos.y>height) {
      return false;
    }

    return true;
  }

  public Hitbox getHitbox() {
    float x_min=this.pos.x-this.wid;
    float x_max=this.pos.x;
    float y_min=this.pos.y-this.hei;
    float y_max=this.pos.y;

    return new Hitbox(x_min, x_max, y_min, y_max);
  }
}