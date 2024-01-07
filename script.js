var parentElement = document.getElementById("hero");
var childElement = document.getElementById("mask");
function handleMouseOver(){
    console.log('mouse over the element');
    // add code when mouse enters
    childElement = document.getElementById('mask');
    parentElement.removeChild(childElement);   
    //make a cursor follower
    var svgMarkup = '<svg width="100%" height="100%" viewBox="0 0 5760 3078" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5760 0H0V3078H5760V0ZM2880 1559C2891.05 1559 2900 1550.05 2900 1539C2900 1527.95 2891.05 1519 2880 1519C2868.95 1519 2860 1527.95 2860 1539C2860 1550.05 2868.95 1559 2880 1559Z" fill="#FCFCFC" fill-opacity="0.5"/></svg>';
    
    
    var container = document.createElement('div');
    container.innerHTML = svgMarkup;
    container.id = 'cursor-mask';
    // make it follow
    parentElement.appendChild(container);
    window.onmousemove = e =>{
        const x = (e.clientX + window.pageXOffset - container.offsetWidth / 2) + 300,
              y = (e.clientY + window.pageYOffset - container.offsetHeight / 2) + 300;
        
        const keyframes = {
            transform: `translate(${x}px, ${y}px)`
        }
        container.animate(keyframes, {
            duration: 800,
            fill: "forwards"
        });
    }
}

function handleMouseOut(){
    console.log('Mouse left the element');
    //add code when mouse lefts
    childElement = document.getElementById('cursor-mask');
    parentElement.removeChild(childElement);
    var newElement = document.createElement('div');
    newElement.id = 'mask';
    newElement.style.overflow = 'hidden';
    // newElement.parentElement.style.overflow = 'hidden';
    parentElement.appendChild(newElement);
}

parentElement.addEventListener('mouseenter', handleMouseOver);
parentElement.addEventListener('mouseleave', handleMouseOut);