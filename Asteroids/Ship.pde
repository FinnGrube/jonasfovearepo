class Ship {
  public PVector pos;
  private float speed;
  private PVector left;
  private PVector right;
  private float wid = 30;
  private float hei = wid/2;

  public Ship(float x, float y, float speed_) {
    this.pos = new PVector(x, y);
    this.speed=speed_;

    left = new PVector((-1)*this.speed, 0);
    right = new PVector(this.speed, 0);

    //println(this.toString());
  }

  public void moveLeft() {
    this.pos.add(this.left);
  }

  public void moveRight() {
    this.pos.add(this.right);
  }

  public void show() {
    stroke(0);
    fill(255, 10, 10);
    rect(this.pos.x, this.pos.y, wid, hei, 3, 3, 0, 0);
  }

  public String toString() {
    return "Ship:: pos_x: "+this.pos.x+" pos_y: "+this.pos.y;
  }

  public Boolean isHit(ArrayList<Asteroid> list) {
    float x = this.pos.x;
    float y = this.pos.y;

    for (Asteroid a : list) {
      float a_x = a.pos.x;
      float a_y = a.pos.y;

      if (x+wid/2<a_x&&a_x<x-wid/2) {
        if (y+hei/2<a_y&&a_y<y-hei/2) {
          return true;
        }
      }
    }

    return false;
  }
}