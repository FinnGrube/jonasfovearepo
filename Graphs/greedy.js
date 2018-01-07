function shortest(start,end){

  let root = start;
  let stops = 3;//root.edges.length;
  let visited = [];

  let current = root;

  for(let i = 0; i<stops;i++){

    visited.push(current.name);

    //console.log("stops: "+i+"/"+stops);
    //console.log(current);

    let copy = reconArr(current.getDist());    //TODO
    console.log(copy);
    let sorted = copy.sort(function(a,b){
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
    );

    console.log(sorted);

    let found = false;
    for(j=0;j<sorted.length && !found ;j++){
      if(visited.indexOf(sorted[j].name)==-1){
        if(current[sorted[j].getB()]!=end){
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          found=true;
        }else if (i==stops-1) {
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          found=true;
        }
      }
    }

    console.log("blueberry");
  }

  console.log("Path: "+visited);
  return visited;
}


function reconArr(arr){
  let x = [];
  for(let p=0; p<arr.length;p++){
    x.push(new Tupel(arr[p],p));
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
