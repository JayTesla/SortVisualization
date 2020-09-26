let value = [];
let i=0;
let button;
let flag=0;
let slider;
function setup() {
  //print("IN SETUP")
  frameRate(5);
  createCanvas(400,400);
  slider = createSlider(1,width/10,width/20);
  sketch();   
  slider.input(changearray);
  button = createButton("RUN");
  let button1 = createButton("RESET");
  button.mousePressed(run);
  button1.mousePressed(reset);
  
}
function changearray()
{
  value=[];
  for(let i=0;i<slider.value();i++)
  {
    value[i]=int(random(height));
  }
}
function run()
{
  //print("IN RUN");
  flag=1;
  loop();
}
function reset()
{
  
 // print("IN RESET")
  flag=0; 
  sketch();
  loop();
}
function sketch(){
 // print("IN SKETCH");
  i=0;
  for(let i=0;i<slider.value();i++)
  {
    value[i]=int(random(height));
  }
  //print(value[0])
  noLoop();
}

function draw() {
 // print("IN DRAW"); 
  background(255);
  fill(0);
  stroke(255);
  //draws rectangle vertically of width 10
  for(let i=0;i<value.length;i++)
  {
    rect(i*10,height-value[i],10,value[i]);
    //  line(i,height,i,height-value[i]);
  }
    
//selection sort doing one step at a time  
if(flag)
{
  if(i<value.length-1)
  {
   // print("CHANGING")
    let min_ind=i;
    for(let j=i+1;j<value.length;j++) 
    {
      if(value[j]<value[min_ind])
      {
        min_ind=j;
      }
    }
    swap(i,min_ind);
  }
  else{
    noLoop();
  }

  i++;
}
else{
  noLoop();
}
}
//Swaps min index and current element
function swap(i,min_ind)
{
  let temp = value[min_ind];
      value[min_ind] = value[i];
      value[i] = temp;
  
}

