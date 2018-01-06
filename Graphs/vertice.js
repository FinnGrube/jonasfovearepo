class Vertice{
  constructor(_name){
    this.name = _name;
    this.degree = 0;
    this.edges = [];
    this.pos = createVector(random(5,width-5),random(5,height-5));
    //console.log("blueberry");
  }

  update(){
    this.degree = this.edges.length;
  }

  put(nextVertice){
    this.edges.push(nextVertice);
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
    //console.log(this.name+": "+this.edges.length);
    stroke(random(10,255),random(10,255),random(10,255));
    if(this.edges.length>0) {
      for(let i=0;i<this.edges.length;i++){
        let v=this.edges[i];
        if(this.name<v.name){
          line(this.pos.x,this.pos.y, v.pos.x,v.pos.y);

          //console.log("line: "+this.pos.x+","+this.pos.y+" to "+v.pos.x+","+v.pos.y);
        }
      }
    }
  }

}
