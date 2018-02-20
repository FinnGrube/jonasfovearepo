import java.util.*;


ArrayList<Asteroid> a_list = new ArrayList();
int level = 1;
float spawn_rate = frameRate*10/level;
int counter=0;
Ship s = new Ship(400, 950, 10, 100);
boolean prev_hit=false;

void setup() {
  size(1000, 1400);
  frameRate(60);
  //println(width+"::"+height);
}

void draw() {
  if (prev_hit) {
    background(255, 0, 0);
  } else {
    background(0);
  }

  prev_hit=false;

  stroke(255);

  //line(0, 965, width, 965);
  s.show();
  s.getHitbox().show();

  if (frameCount%spawn_rate==0) {
    a_list.add(new Asteroid(random(width), random(0, 10), 40));
  }
  ArrayList<Asteroid> rem = new ArrayList();
  for (Asteroid x : a_list) {
    if (!x.inFrame()) {
      rem.add(x);
    } else {
      x.move();
      x.show();
      x.getHitbox().show();
    }
  }

  for (Asteroid r : rem) {
    a_list.remove(r);
  }

  float c = s.isHit(a_list);
  if (c!=0) {
    prev_hit=true;
  }
  counter += c;


  fill(255);
  textSize(32);
  text("Asteroids: "+a_list.size(), 10, 40);
  text("FPS: "+frameRate, 10, 74);
  //text("Hits: "+counter, 10, 110);
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

  case UP:
    {
      if (s.pos.y>0) {
        s.moveUp();
      }  
      break;
    }

  case DOWN:
    {
      if (s.pos.y<height) {
        s.moveDown();
      }  
      break;
    }
  }
}