import { eventBus } from './eventbus1.js';
export class PageButton extends HTMLElement{
    constructor(){
        super();

         this.attachShadow({mode:'open'});
 
         this.shadowRoot.innerHTML = `
         <button type="button" id="mybutton">STOP</button>`;

         const myfunction1=(event)=>
           {
            this.buttonElement.textContent="START";
           eventBus.publish("click");

           };

        this.buttonElement=this.shadowRoot.getElementById('mybutton');

        this.buttonElement.addEventListener("click",myfunction1);
          

    }
}
customElements.define("page-button",PageButton);