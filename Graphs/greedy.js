function shortest(start,stop){

  let root = start;
  let stops = root.edges.length;
  let visited = [];

  let current = root;
  let end = stop;
  visited.push(current.name);

  for(let i = 0; i<stops;i++){
    //console.log(current);
    //console.log(visited);

    let copy = reconArr(current.getDist());
    let sorted = copy.sort(function(a,b){
      //a>b
        if(a.getA()>b.getA()){return 1;}
      //a<b
        if(a.getA()<b.getA()){return -1;}
      //a==b or exception
        return 0;
      });

    //console.log(sorted);

    let found = false;
    for(j=0;j<sorted.length && !found ;j++){
      //console.log("Possible next: "+current.edges[sorted[j].getB()].name);

      let notVis = visited.indexOf(current.edges[sorted[j].getB()].name)==-1;
      //console.log("Not Visited: "+notVis);
      if(notVis){

        let isNotEnd = current.edges[sorted[j].getB()].name!=end.name;
        let lastStop = i==(stops-1);
        //console.log(isNotEnd+" :: "+lastStop);
        if(isNotEnd){
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          //console.log("New Current: "+current.name);
          found=true;

        }else if (lastStop && notVis && !isNotEnd) {
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          found=true;
        }
      }
    }

    //console.log("#####Next Round#####");
  }

  //console.log("Path: "+visited);
  //drawShortest(root,visited);
  root.markPath(visited);
  return visited;
}

function drawShortest(vert,way){
  let path = Array.from(way);
  if(path[0]==vert.name){
    path.splice(0,1);
    strokeWeight(2);
    stroke(255,0,0);
    fill(255,0,0);
    let curr = vert;
    for(let i =0; i<(path.length);i++){
      //console.log(curr);

      ellipse(curr.X,curr.Y,5);
      let next= nextOnPath(curr,path,i+1);

      if(next!=curr){
        line(curr.X,curr.Y,next.X,next.Y);
        curr=next;
      }
    }
  }
}

function nextOnPath(curr,path,i){
  for(let j=0;j<curr.edges.length;j++){
    if(curr.edges[j].name==path[i]){
      console.log(curr.edges[j]);
      return curr.edges[j];
    }
    return curr;
  }
}

function reconArr(arr){
  //console.log(arr);
  let x = [];
  for(let i=0; i<arr.length;i++){
    let t =new Tupel(arr[i],i);
    x.push(t);
  }
  return x;
}




function compare(a,b){
//a>b
  if(a.getA()>b.getA()){
    return 1;
  }

//a<b
  if(a.getA()<b.getA()){
    return -1;
  }

//a==b or exception
  return 0;
}




class Tupel{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }

  getA(){
    return this.a;
  }
  getB(){
    return this.b;
  }
}
