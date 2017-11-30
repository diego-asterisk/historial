/**
 * historial v 0.1.0
 * @author Diego Mañas https://github.com/diego-asterisk
 * @license http://unlicense.org/UNLICENSE
 *
 * Manipulate a div element to add stories
 * Stories are sets of paragraphs
 * Each story is stacked or queued to internal div elements
 */

function Historial(div) {
   /**
   * The history is at div
   */
   this.div = div;
   this.last = div;
   /**
   * Each new narrative is pushed into div
   */
   this.push = function () {
      this.last = addHistoryBefore(this.div);      
      return this.last;
   };
   /**
   * Each new sentence is queue into last div 
   */
   this.say = function (text) {
      return addSentence(this.last, text);
   };
   /**
   * Each new narrative can be queued into div
   */
   this.queue = function () {
      this.last = addHistory(this.div);
      return this.last;
   };
   function addHistoryBefore(div){
      var elem_div = document.createElement('div');
      var nodo_ref = div.getElementsByTagName('div')[0];
      div.insertBefore(elem_div,nodo_ref);
      
      return elem_div;
   }
   function addHistory(div){
      var elem_div = document.createElement('div');
      div.appendChild(elem_div);
      
      return elem_div;
   }
   function addSentence(div,text){
      var elem_p = document.createElement('p');
      elem_p.innerHTML = text;
      div.appendChild(elem_p);
      
      return elem_p;
   }   
}

