let value = [],i=0,flag=0;
let run_button,reset_button;
let slider;
let canvas;
let t1=-1,t2=-1;

function selection()
{
  
}
function setup() {

  
  canvas = createCanvas(400,400);
  canvas.position(100,100);
  slider = createSlider(1,width/10,width/20);
  run_button = createButton("SORT");
  reset_button = createButton("RESET");
  
  sketch();   
  slider.input(changearray);
  run_button.mousePressed(run);
  reset_button.mousePressed(reset);
  
}
function changearray()
{
  i=0;
  value=[];
  for(let i=0;i<slider.value();i++)
  {
    value[i]=int(random(height));
  }
}
function run()
{
  i=0;
  flag=1;
}
function reset()
{ 
  flag=0; 
  sketch();
  loop();
}
function sketch(){
  i=0;
  t1=-1;t2=-1;
  for(let i=0;i<slider.value();i++)
  {
    value[i]=int(random(2,height));
  }

}

function draw() {
  //print("IN DRAW"); 
  // console.log(document.getElementById("algoid").value);
  background(255);
  stroke(255);
  //draws rectangle vertically of width 10
  for(let i=0;i<value.length;i++)
  {
    if(i==t1 || i==t2)
    {
     fill(255,0,0); 
    }
    else
    {
      fill(0);
    }
    rect(i*10,height-value[i],10,value[i]);
  }
    
//selection sort doing one step at a time  
if(flag)
{
  if(i<value.length)
  {
    let min_ind=i;
    for(let j=i+1;j<value.length;j++) 
    {
      if(value[j]<value[min_ind])
      {
        min_ind=j;
      }
    }
    t1=i;
    t2=min_ind;
    swap(i,min_ind);
  }
  i++;
}
}
//Swaps min index and current element
function swap(i,min_ind)
{
  let temp = value[min_ind];
      value[min_ind] = value[i];
      value[i] = temp;
  
}

