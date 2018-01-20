/**
For graphs with >=5 vertecies links = count*1.92 to get every link
  4 -> 1.5
  3 -> 1.16

*/

let graph = [];
let count = 7;
let links = Math.round(count*1.92);

let start =0;
let dest = 4;

function setup(){
  createCanvas(1500,900);

  if(count <=1){
    links = 0;
  }else if(count == 2){
    links = 1;
  }else if(count ==3){
    links = Math.round(count*1.16);
  }else if (count ==4) {
    links = Math.round(count*1.5)
  }else if(count == 5){
    links = Math.round(count*1.92)
  }else{
    links = Math.round(count*2.5)
  }


  for (var i = 0; i < count; i++) {
    graph[i] = new Vertice(i);
  }

  randomLink();

  background(0);
  //noLoop();
}



function draw(){
  background(0);
  stroke(255);
  strokeWeight(1);

  gravitation();

  for (var i = 0; i < graph.length; i++) {
    graph[i].move();
  }
  for (var i = 0; i < graph.length; i++) {
    graph[i].show();
  }

 graph[start].markPath(shortest(graph[start],graph[dest],graph.length));
}



function randomLink(){
  count = graph.length;

  for(let i = 0; i < links; i++){
      let r1 = Math.round(random(graph.length-1));
      let r2 = Math.round(random(graph.length-1));

      if(r1 != r2 && !graph[r1].linked(graph[r2])){
    //  console.log(r1+" & "+r2);

      let g = graph[r1];
      g.link(graph[r2]);

    //  console.log("Linking "+r1+" to "+r2);
    }else{
      i--;
    }
  }
}

function gravitation(_G){
  let g = _G||5;//0-1
  let size = sqrt((width^2)+(height^2));
  for (let i = 0; i < graph.length; i++) {
    let curr = graph[i];
    for(let j=0;j<curr.edges.length;j++){
      let f = curr.pos.sub(curr.edges[j].pos);
      let dst = map(f.mag(),0,size,0,1);
      //f.setMag(g/dst);
      curr.edges[j].applyForce(f);
      let counter = f.mult(-1);
      curr.applyForce(counter);
    }
  }
}
