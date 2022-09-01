//Custom mouse
const cursor = document.querySelector('.cursor');
const cursorTracer = document.querySelector('.cursorTracer');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorTracer.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor);

let links = document.querySelectorAll('a').forEach(links =>{
    links.onmouseover = () => {
        cursor.classList.add('active');
        cursorTracer.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor.classList.remove('active');
        cursorTracer.classList.remove('active');
    }
});

let btns = document.querySelectorAll('.tog').forEach(btns =>{
    btns.onmouseover = () => {
        cursor.classList.add('active');
        cursorTracer.classList.add('active');
    }

    btns.onmouseleave = () => {
        cursor.classList.remove('active');
        cursorTracer.classList.remove('active');
    }
});

document.addEventListener('click', () => {
    cursorTracer.classList.add('expand');
    setTimeout(() => {
        cursorTracer.classList.remove('expand');
    },500)
})


let resets = document.querySelectorAll('.page_reset').forEach(resets =>{
    resets.onmouseover = () => {
        cursor.classList.add('active');
        cursorTracer.classList.add('active');
    }

    resets.onmouseleave = () => {
        cursor.classList.remove('active');
        cursorTracer.classList.remove('active');
    }
});