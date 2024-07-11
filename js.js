const container = document.getElementsByClassName("container")

document.addEventListener('DOMContentLoaded',function (e){
    for (let i = 0; i < 255; i++) {
    const div = document.createElement('div')
    div.className = 'div'
    document.getElementsByClassName('container')[0].appendChild(div)
    }
})
