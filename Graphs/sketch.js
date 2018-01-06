let graph = [];
let count = 20;
let links = Math.round(count*1.8);

function setup(){
  createCanvas(1920,1080);

  for (var i = 0; i < count; i++) {
    graph[i] = new Vertice(i);
  }

  randomLink();

  background(0);
}
function draw(){
  //noLoop();
  //background(0);
  stroke(255);
  for (var i = 0; i < graph.length; i++) {
    graph[i].show();
    graph[i].move();
  }
}


function randomLink(){
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
