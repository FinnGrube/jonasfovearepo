function shortest(start,end){

  let root = start;
  let stops = root.edges.length;
  let visited = [];

  let current = root;
  for(i = 0; i<stops,i++){
    let sorted = reconArr(current.edges).sort(compare);
    if(visited.indexOf(current.edges[shortest])==-1){

    }
  }

}

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


function reconArr(arr){
  let x = [];
  for(i=0; i<arr.length;i++){
    x.push(new Tupel(arr[i],i));
  }
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
