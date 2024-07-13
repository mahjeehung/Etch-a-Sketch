const container = document.getElementsByClassName("container");

(function resetGrid(x){
  let grid = x;
  
  for (let i = 0; i < grid**2; i++) {
    const div = document.createElement('div')
    div.className = 'div'
    div.style.width=`${(480/(grid+1))}px`;
    div.style.height=`${(480/(grid+1))}px`;
    document.getElementsByClassName('container')[0].appendChild(div)}
    
    let DIV = Array.from(document.getElementsByClassName("div"));

  function divMouseEnter(e){
    e.target.style.backgroundColor="blue";
  }
  function divMouseLeave(e){
    e.target.style.backgroundColor="yellow";
  }

  let donald = Math.floor((window.innerWidth-50)/grid);
  for (var k = 0; k < DIV.length; k++) {
    DIV[k].addEventListener('mouseenter', divMouseEnter);
    DIV[k].addEventListener('mouseleave', divMouseLeave);
    // DIV[k].style.minHeight=`${donald}px`;
    // DIV[k].style.minWidth=`${donald}px`;
}
})(16);