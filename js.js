const container = document.getElementsByClassName("container")


// document.addEventListener('DOMContentLoaded',function (e){
    for (let i = 0; i < 255; i++) {
    const div = document.createElement('div')
    div.className = 'div'
    document.getElementsByClassName('container')[0].appendChild(div)

    let DIV = Array.from(document.getElementsByClassName("div"));
function divMouseEnter(e){
    e.target.style.backgroundColor="blue";
  }

for (var k = 0; k < DIV.length; k++) {
    DIV[k].addEventListener('mouseenter', divMouseEnter);
}
    }
// })


