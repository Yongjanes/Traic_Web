var heroSection = document.getElementById("hero");
var maskElement = document.getElementById("mask");
var cursorMaskElement;

function handleMouseOver() {
    console.log('Mouse over the hero section');
    // add code when mouse enters
    heroSection.removeChild(maskElement);

    // make a cursor follower
    var svgMarkup = '<svg width="100%" height="100%" viewBox="0 0 5760 3078" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5760 0H0V3078H5760V0ZM2880 1559C2891.05 1559 2900 1550.05 2900 1539C2900 1527.95 2891.05 1519 2880 1519C2868.95 1519 2860 1527.95 2860 1539C2860 1550.05 2868.95 1559 2880 1559Z" fill="#FCFCFC" fill-opacity="0.5"/> </svg>';

    cursorMaskElement = document.createElement('div');
    cursorMaskElement.innerHTML = svgMarkup;
    cursorMaskElement.id = 'cursor-mask';

    // make it follow
    heroSection.appendChild(cursorMaskElement);

    window.onmousemove = e => {
        const x = (e.clientX - cursorMaskElement.offsetWidth / 2) + 300,
            y = (e.clientY - cursorMaskElement.offsetHeight / 2) + 300;

        const keyframes = {
            transform: `translate(${x}px, ${y}px)`
        };

        cursorMaskElement.animate(keyframes, {
            duration: 400,
            fill: "forwards"
        });
    };
}

function handleMouseOut() {
    console.log('Mouse left the hero section');
    // add code when mouse leaves
    heroSection.removeChild(cursorMaskElement);

    var newElement = document.createElement('div');
    newElement.id = 'mask';
    heroSection.appendChild(newElement);
}

heroSection.addEventListener('mouseover', handleMouseOver);
heroSection.addEventListener('mouseout', handleMouseOut);
