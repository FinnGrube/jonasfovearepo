import java.util.*;


ArrayList<Asteroid> a_list = new ArrayList();
int count = 60;
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
  
  fill(255);
  textSize(32);
  text("Length: "+a_list.size(),10,40);
  
  //line(0, 965, width, 965);
  s.show();

  if (frameCount%count==0) {
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