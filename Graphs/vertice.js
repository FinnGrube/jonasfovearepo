class Vertice{
  constructor(_name,_len,_pointer){
    this.name = _name;
    this.degree = 0;
    this.edges = [];
    this.dist = []
    this.pos = createVector(random(5,width-5),random(5,height-5));
    //console.log("blueberry");

    this.viewLen = _len || false;
    this.viewPointer = _pointer || false;

    this.c1 = random(10,200);
    this.c2 = random(10,200);
    this.c3 = random(10,200);


    this.vel = p5.Vector.random2D();
    this.vel.mult(0.6);
  }

  update(){
    this.degree = this.edges.length;
    for(let i=0;i<this.edges.length;i++){
      this.dist[i]=this.calcDist(this.edges[i]);
    }
  }

  calcDist(ver){
    let x = this.X - ver.X;
    let y = this.Y - ver.Y;
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
    ellipse(this.X,this.Y,5);
    stroke(255);
    fill(255);
    textSize(20);
    text(this.name,this.X+5,this.Y-5);

    stroke(this.c1,this.c2,this.c3);
    //fill(this.c1,this.c2,this.c3);

    if(this.edges.length>0) {
      for(let i=0;i<this.edges.length;i++){
        let v=this.edges[i];
        if(this.name<v.name){
          let tx=this.X;
          let ty=this.Y;
          let vx=v.X;
          let vy=v.Y;
          line(tx,ty,vx,vy);

          if(this.viewLen){
            let mid= createVector(vx-tx,vy-ty);
            mid.div(2);
            mid.add(createVector(tx,ty));
            textSize(12);
            fill(255);
            stroke(this.c1,this.c2,this.c3);
            text(this.dist[i],mid.x+5,mid.y+5);
          }
        }
      }
    }

    if(this.viewPointer){
      let arrow = this.vel.copy();
      arrow.mult(10);
      stroke(255);
      line(this.X,this.Y,this.X+arrow.x,this.Y+arrow.y);
    }
  }

  applyForce(f){
    this.vel.add(f);
    return this.vel;
  }

  applyVelocity(v){
    let x = v || this.vel;
    this.pos.add(x);
    return this.pos;
  }

  move(){
    let border=20;
    let breaking = 0.85;
    let g = 0.5;

    let acc = p5.Vector.random2D();
    acc.mult(0.05);
    this.vel.add(acc);
    this.applyVelocity(this.vel);

    if(this.X>width-border||this.X<0+border){
      this.vel.x*=(-1);
      this.vel.mult(breaking);
    }
    if(this.Y>height-border||this.Y<0+border){
      this.vel.y*=(-1);
      this.vel.mult(breaking);
    }

    if(this.X<border){this.pos.x=border;}
    if(this.Y<border){this.pos.y=border;}
    if(this.X>width-border){this.pos.x=width-border;}
    if(this.Y>height-border){this.pos.y=height-border;}


    for (var n in this.edges) {
      let dir = this.pos.copy().sub(n.pos);
      dir.setMag(g/dir.mag());
      //dir.mult(-1);
      stroke(255);
      //line(this.X,this.Y,this.X+dir.x,this.Y+dir.y);
      this.applyForce(dir);
    }

    this.update();
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

  get X(){
    return this.pos.x;
  }

  get Y(){
      return this.pos.y;
    }

  getDist(){
    return this.dist;
  }

  markPath(path){
    for(let i=0;i<path.length;i++){
      if(path[i]==this.name){

        fill(255,0,0);
        stroke(255,0,0);
        strokeWeight(2);

        //draw dot
        if(this.name == path[0]||this.name == path[path.length-1]){
          ellipse(this.X,this.Y,8,8);
        }

        //draw line
        if(i!=path.length-1){
          let next;
          for(let j=0;j<this.edges.length;j++){
            if(this.edges[j].name==path[i+1]){
              next=this.edges[j];
            }
          }
          line(this.X,this.Y,next.X,next.Y);
          next.markPath(path);
        }
      }
    }
  }

}
