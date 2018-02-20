class Ship {
  public PVector pos;
  private float speed;
  private PVector left,right,up,down;
  private float wid = 30;
  private float hei = wid/2;

  public Ship(float x, float y, float speed_) {
    this.pos = new PVector(x, y);
    this.speed=speed_;

    left = new PVector((-1)*this.speed, 0);
    right = new PVector(this.speed, 0);
    up = new PVector(0,(-1)*this.speed);
    down = new PVector(0,this.speed);

    //println(this.toString());
  }

  public void moveLeft() {
    this.pos.add(this.left);
  }

  public void moveRight() {
    this.pos.add(this.right);
  }
  
  
  public void moveUp() {
    this.pos.add(this.up);
  }
  
  
  public void moveDown() {
    this.pos.add(this.down);
  }

  public void show() {
    stroke(0);
    fill(255, 10, 10);
    rect(this.pos.x, this.pos.y, wid, hei, 3, 3, 0, 0);
  }

  public String toString() {
    return "Ship:: pos_x: "+this.pos.x+" pos_y: "+this.pos.y;
  }

  public Hitbox getHitbox(){
    return new Hitbox(this.pos.x-this.wid/2,this.pos.x+this.wid/2,this.pos.y-this.hei/2,this.pos.y+this.hei/2);
  }

  public int isHit(ArrayList<Asteroid> list) {
    int c=0;
    for(Asteroid a: list){
      if(this.getHitbox().isHitting(a.getHitbox())){
        c++;
      }
    }
    return c;
  }
}