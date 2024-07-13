const container = document.getElementsByClassName("container");
const btn = document.getElementById('btn');
function resetGrid(x){
    for (let i = 0; i < x**2; i++) {
    const div = document.createElement('div')
    div.className = 'div'
    div.style.width=`${(480/(x+1))}px`;
    div.style.height=`${(480/(x+1))}px`;
    document.getElementsByClassName('container')[0].appendChild(div)}
    
    let DIV = Array.from(document.getElementsByClassName("div"));

  function divMouseEnter(e){
    e.target.style.backgroundColor="blue";
  }
  function divMouseLeave(e){
    e.target.style.backgroundColor="yellow";
  }

  let donald = Math.floor((window.innerWidth-50)/x);
  for (var k = 0; k < DIV.length; k++) {
    DIV[k].addEventListener('mouseenter', divMouseEnter);
    DIV[k].addEventListener('mouseleave', divMouseLeave);
    // DIV[k].style.minHeight=`${donald}px`;
    // DIV[k].style.minWidth=`${donald}px`;
}
}

document.addEventListener('DOMContentLoaded',resetGrid(16));

function removeElementsByClass(y){
  const elements = document.getElementsByClassName(y);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

function newGrid(){
  let x = prompt ('Please enter number for new grid','1');
  if (x>100||x<1){alert('please enter a number between 1-100')}
  removeElementsByClass('div');
  resetGrid(x);
}

btn.addEventListener('click', newGrid)

