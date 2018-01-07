function shortest(start,end){

  let root = start;
  let stops = root.edges.length;
  let visited = [];

  let current = root;
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

        let isNotEnd = current[sorted[j].getB()]!=end;
        let lastStop = i==(stops-1);
        //console.log(isNotEnd+" :: "+lastStop);
        if(isNotEnd){
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          //console.log("New Current: "+current.name);
          found=true;

        }else if (lastStop && notVis) {
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          found=true;
        }
      }
    }

    //console.log("#####Next Round#####");
  }

  //console.log("Path: "+visited);
  return visited;
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
