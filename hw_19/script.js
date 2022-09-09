const body = document.querySelector('body');
const block = document.createElement('div');
block.classList.add('block');
body.append(block);

const step = 10;
const maxWidth = document.body.clientWidth - block.clientWidth;
const maxHeight = document.body.clientHeight - block.clientHeight;

const KEYS = {

    ArrowUp: () => {
        if (block.offsetTop > 0 + step) {
            block.style.top = !block.style.top ? `-${step}px` : `${parseInt(block.style.top)-step}px`;
        } else {
            block.style.top = `${parseInt(block.style.top)+step*2}px`
            textFunc();            
        }  
    },

    ArrowDown: () => {
        if (block.offsetTop < maxHeight - step) {
            block.style.top = !block.style.top ? `${step}px` : `${parseInt(block.style.top)+step}px`
        } else {
            block.style.top = `${parseInt(block.style.top)-step*2}px`
            textFunc();            
        }
    },

    ArrowLeft: () => {
        if (block.offsetLeft > 0 + step) {
            block.style.left = !block.style.left ? `-${step}px` : `${parseInt(block.style.left)-step}px`
        } else {
            block.style.left = `${parseInt(block.style.left)+step*2}px`
            textFunc();            
        }  
    },

    ArrowRight: () => {
        if (block.offsetLeft < maxWidth - step) {
            block.style.left = !block.style.left ? `${step}px` : `${parseInt(block.style.left)+step}px`
        } else {
            block.style.left = `${parseInt(block.style.left) - step*2}px`
            textFunc();            
        }        
    },

    " ": () => {
        block.style.top = !block.style.top ? `-${step}px` : `${parseInt(block.style.top)-step}px`
        setTimeout(() => {
            block.style.top = !block.style.top ? `+${step}px` : `${parseInt(block.style.top)+step}px`            
        }, 300)
    },
    
    Control: () => {
        block.classList.add('sit-down');
        setTimeout(() => {
            block.classList.remove('sit-down');            
        }, 500)
    }
};

const textFunc = () => {
    block.innerHTML = `<p>БЕМС</p>`
    setTimeout(() => {
        block.innerHTML = ''
    }, 2000)
};

document.addEventListener('keydown', event => {
    KEYS[event.key] && KEYS[event.key]();
});