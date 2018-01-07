function shortest(start,end){

  let root = start;
  let stops = root.edges.length;
  let visited = [];

  let current = root;
  visited.push(current.name);

  for(i = 0; i<stops;i++){
    console.log("run: "+i);
    console.log(current);

    let copy = reconArr(current.edges);
    let sorted = copy.sort(compare);

    for(j=0;j<sorted.length;j++){
      if(visited.indexOf(sorted[j].name)==-1){
        if(current[sorted[j].getB()]!=end){
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          break;
        }else if (i==stops-1) {
          current = current.edges[sorted[j].getB()];
          visited.push(current.name);
          break;
        }
      }
    }
  }

  console.log(visited.toString());
}

/*
function min(array){
  let m = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i]<=m) {
      m=arrray[i];
    }
  }
  return array.indexOf(m);
}
}
*/


function reconArr(arr){
  let x = [];
  for(i=0; i<arr.length;i++){
    x.push(new Tupel(arr[i],i));
  }
  return x;
}

function compare(a,b){
//a>b
  if(a.getA>b.getA){
    return 1;
  }

//a<b
  if(a.getA<b.getA){
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
