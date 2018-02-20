import java.util.*;


ArrayList<Asteroid> a_list = new ArrayList();
int spawn_rate = 15;
int counter=0;
Ship s = new Ship(width/2, 950, 10);

void setup() {
  size(800, 1000);
  frameRate(60);
  //println(width+"::"+height);
}

void draw() {
  background(0);
  stroke(255);
  
  //line(0, 965, width, 965);
  s.show();

  if (frameCount%spawn_rate==0) {
    a_list.add(new Asteroid(random(width), random(0, 10), 10));
  }
  ArrayList<Asteroid> rem = new ArrayList();
  for (Asteroid x : a_list) {
    if(!x.inFrame()){
      rem.add(x);
    }else{
    x.show();
    x.move();
    }
  }
  
  for(Asteroid r: rem){
    a_list.remove(r);
  }
  
  if(s.isHit(a_list)){
    counter++;
  }
  //println(counter);
  
  fill(255);
  textSize(32);
  text("Asteroids: "+a_list.size(),10,40);
  text("FPS: "+frameRate,10,74);
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