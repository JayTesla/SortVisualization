let arr = [];

function setup() {
  createCanvas(400,400);     
  
  for(let i=0;i<40;i++)
  {
    arr[i] = int(random(2,height));
  }
  //print(arr.length)
  quicksort(arr,0,arr.length-1);

}

async function quicksort(value,start,end)
  {
    if(start>=end)
      return ;
    
      let pivot=await partition(value,start,end);
    
     await Promise.all([quicksort(value,pivot+1,end),
                        quicksort(value,start,pivot-1)]);
    
  }
async function partition(value,start,end)
  {
    let pivot_value=value[end];
    let pivot_ind=start;
    for(let i=start;i<=end;i++)
    {
      if(value[i]<pivot_value)
      {
        await swap(value,i,pivot_ind);
        pivot_ind++;
      }
     
    }
    await swap(value,pivot_ind,end);
    return pivot_ind;
  }
 
async function swap(value,a,b)
{
  print(a,b);
  await sleep(100); 
  let temp = value[a];
      value[a] = value[b];
      value[b] = temp;
 
}

function draw()
{
  background(0);
  for(let i=0;i<arr.length;i++)
  {
    rect(i*10,height-arr[i],10,arr[i]);
  }
  print("draw",arr);
    
}

function sleep(ms) { 
            return new Promise(resolve => setTimeout(resolve, ms)); 
        } 