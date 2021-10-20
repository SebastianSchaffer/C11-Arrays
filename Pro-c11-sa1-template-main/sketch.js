var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);

  var sum=0;
  var avg=0;
  for(var i=0; i<weight.length; i++){
    sum+=weight[i]
  }
  avg = sum/weight.length
  console.log(avg)
}

function draw() 
{
  background(30);
}

 

