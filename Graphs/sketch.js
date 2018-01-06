let graph = [];
let count = 10;
let links = Math.round(count*1.6);

function setup(){
  createCanvas(1000,600);

  for (var i = 0; i < count; i++) {
    graph[i] = new Vertice(i);
  }

  randomLink();

}
function draw(){
  noLoop();
  background(0);
  stroke(255);
  for (var i = 0; i < graph.length; i++) {
    //console.log(i);
    graph[i].show();
  }
}


function randomLink(){
  for(let i = 0; i < links; i++){
      let r1 = Math.round(random(graph.length-1));
      let r2 = Math.round(random(graph.length-1));

      if(r1 != r2 && !graph[r1].linked(graph[r2])){
      console.log(r1+" & "+r2);

      let g = graph[r1];
      g.link(graph[r2]);

      console.log("Linking "+r1+" to "+r2);
    }else{
      i--;
    }
  }
}
