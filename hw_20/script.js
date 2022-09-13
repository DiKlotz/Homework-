const element = document.querySelector('#element')
const chooseShape = document.querySelector('#chooseShape')
const chooseColor = document.querySelector('#chooseColor')
const rendShape = document.querySelector('#formShape')
     
rendShape.addEventListener('submit', event =>{
      
          event.preventDefault();
         
          element.style.background = chooseColor.value;
          element.classList = chooseShape.value;  
      });