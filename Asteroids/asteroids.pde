import java.util.*;


ArrayList<Asteroid> a_list = new ArrayList();
int count = 15;
int counter=0;
Ship s = new Ship(width/2, 950, 10);

void setup() {
  size(800, 1000);
  frameRate(30);
  //println(width+"::"+height);
}

void draw() {
  background(0);
  stroke(255);
  line(0, 965, width, 965);
  s.show();

  if (frameCount%count==0) {
    a_list.add(new Asteroid(random(width), random(0, 10), 10));
  }
  for (Asteroid x : a_list) {
    x.show();
    x.move();
  }
  
  if(s.isHit(a_list)){
    counter++;
  }
  //println(counter);
}

void keyPressed() {
  switch(keyCode) {
  case LEFT:
    {
      if (s.pos.x>0) {
        s.moveLeft();
      }  
      break;
    }
  case RIGHT:
    {
      if (s.pos.x<width) {
        s.moveRight();
      }  
      break;
    }
  }
}