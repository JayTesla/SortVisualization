let value = [],i=0,j=0,flag=0;
let run_button,reset_button;
let speed,n_val;
let canvas;
let t1=-1,t2=-1;

function bubble() {
  if (i < value.length - 1) {
    if (j < value.length - i - 1) {
      if (value[j] > value[j + 1]) {
        t1 = j;
        t2 = j + 1
        swap(j, j + 1);
      }
      j++;
    } else {
      i++;
      j = 0;

    }
  }
  
}

function selection()
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
function setup() {
  canvas = createCanvas(400,400);
  canvas.parent("mycanvas");
  // canvas.position(100,100);

  n_val = createSlider(1,width/10,width/20);
  speed = createSlider(5,60,5);

  n_val.parent("sld_val");
  speed.parent("sld_spd");

  run_button = createButton("SORT");
  reset_button = createButton("RESET");
  run_button.parent("bt1");
  reset_button.parent("bt2");
  
  sketch();
  speed.input(speedchange);   
  n_val.input(changed);
  run_button.mousePressed(run);
  reset_button.mousePressed(reset);
  
}
function speedchange()
{
  frameRate(speed.value());
}
function changed()
{
  i=0;
  j=0;
  value=[];
  for(let i=0;i<n_val.value();i++)
  {
    value[i]=int(random(2,height));
  }
  //frame rate changed
  
}
function run()
{
  document.getElementById("algoid").disabled=true;
  i=0;
  flag=1;
}
function reset()
{ 
  document.getElementById("algoid").disabled=false;
  flag=0; 
  sketch();
  loop();
}
function sketch(){
  i=0;
  j=0;
  t1=-1;t2=-1;
  for(let i=0;i<n_val.value();i++)
  {
    value[i]=int(random(2,height));
  }

}

function draw() {
  //print("IN DRAW"); 
  // console.log();
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
  
  let a = document.getElementById("algoid").value
    if(a=='s')
      selection();
    else if (a=='b') {
      bubble();
    } 
}
}
//Swaps min index and current element
function swap(i,min_ind)
{
  let temp = value[min_ind];
      value[min_ind] = value[i];
      value[i] = temp;
  
}

