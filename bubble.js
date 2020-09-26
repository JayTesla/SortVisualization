let value = [],i=0,j=0,flag=0;
let run_button,reset_button;
let slider;
let canvas;
let t1=-1,t2=-1;

function setup() {
  canvas = createCanvas(400,400);
  canvas.position(800,100);
  slider = createSlider(1,width/10,width/20);
  run_button = createButton("SORT");
  reset_button = createButton("RESET");
  
  sketch();   

  run_button.addClass("btn btn-success");
  
  slider.input(changearray);
  run_button.mousePressed(run);
  reset_button.mousePressed(reset);
  
}
function changearray()
{
  i=0;
  j=0;
  value=[];
  for(let i=0;i<slider.value();i++)
  {
    value[i]=int(random(height));
  }
}
function run()
{
  i=0;
  j=0;
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
  j=0;
  t1=-1;t2=-1;
  for(let i=0;i<slider.value();i++)
  {
    value[i]=int(random(2,height));
  }

}

function draw() {
  //print("IN DRAW"); 
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

if (flag) {
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
}
//Swaps min index and current element
function swap(i,min_ind)
{
  let temp = value[min_ind];
      value[min_ind] = value[i];
      value[i] = temp;
  
}



// if (flag) {
//   if (i < value.length - 1) {
//     if (j < value.length - i - 1) {
//       if (value[j] > value[j + 1]) {
//         t1 = j;
//         t2 = j + 1
//         swap(j, j + 1);
//       }
//       j++;
//     } else {
//       i++;
//       j = 0;

//     }
//   }
// }