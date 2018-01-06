class Vertice{
  constructor(_name){
    this.name = _name;
    this.degree = 0;
    this.edges = [];
    this.dist = []
    this.pos = createVector(random(5,width-5),random(5,height-5));
    //console.log("blueberry");

    this.c1 = random(10,255);
    this.c2 = random(10,255);
    this.c3 = random(10,255);


    this.vel = p5.Vector.random2D();
    this.vel.mult(2);
  }

  update(){
    this.degree = this.edges.length;
  }

  calcDist(ver){
    let x = this.pos.x - ver.pos.x;
    let y = this.pos.y - ver.pos.y;
    let z = createVector(x,y);
    return Number((z.mag()).toFixed(2));
  }

  put(nextVertice){
    this.edges.push(nextVertice);
    this.dist.push(this.calcDist(nextVertice));
    this.update();
  }

  link(nextVertice){
    nextVertice.put(this);
    this.put(nextVertice);
    this.update();
  }

  linked(v){
    for (var i = 0; i < this.edges.length; i++) {
      if(this.edges[i]==v){return true;}
    }
    return false;
  }

  show(){
    ellipse(this.pos.x,this.pos.y,5);
    stroke(255);
    fill(255);
    textSize(20);
    text(this.name,this.pos.x+5,this.pos.y-5);

    stroke(this.c1,this.c2,this.c3);
    //fill(this.c1,this.c2,this.c3);

    if(this.edges.length>0) {
      for(let i=0;i<this.edges.length;i++){
        let v=this.edges[i];
        if(this.name<v.name){
          let tx=this.pos.x;
          let ty=this.pos.y;
          let vx=v.pos.x;
          let vy=v.pos.y;
          line(tx,ty,vx,vy);

          let mid= createVector(vx-tx,vy-ty);
          mid.div(2);
          mid.add(createVector(tx,ty));
          textSize(12);
          stroke(255);
          text(this.dist[i],mid.x+5,mid.y+5);
        }
      }
    }
  }

  move(){
    let vel = p5.Vector.random2D();
    vel.mult(10);
    this.pos.add(vel);
  }

  search(ver){
    this.edges.indexOf(ver);
  }

  unlink(ver){
    let iv = ver.search(this);
    let it = this.search(ver);

    ver.edges.splice(iv,1);
    ver.dist.splice(iv,1);

    this.edges.splice(it,1);
    this.dist.splice(it,1);

    this.update();

  }

}
