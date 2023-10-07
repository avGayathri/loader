import { eventBus } from './eventbus1.js';
export class PageLoader extends HTMLElement{
    constructor(){
        super();
         this.attachShadow({mode:'open'});

         const loader = document.createElement('div');
         loader.className = 'loader';
         this.shadowRoot.appendChild(loader);

         loader.style.width="50px";
         loader.style.height= "50px";
         loader.style.borderRadius="100px";
         loader.style.border= "16px solid rgb(233, 182, 241)";
         loader.style.borderTop= "16px solid #4d076b";
         loader.style.animation="spin 2s linear infinite";
         let rotation = 0; 
         function rotateElement() {
         rotation += 1; 
         loader.style.transform = `rotate(${rotation}deg)`; 
         }
         const intervalId = setInterval(rotateElement, 10);
        
           eventBus.subscribe('click', () => {
             if(loader.style.display==="none"){
                loader.style.display="block";
        
             }else{
                loader.style.display="none";
             }
            
          });
         
        
    }
}
customElements.define("page-loader",PageLoader);