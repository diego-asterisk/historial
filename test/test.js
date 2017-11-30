
module('History Basics');

test('Add sentence',function(){
  
  var container = document.createElement('div');
  var myHistory = new Historial(container);
  
  var d = myHistory.push();
  var p = myHistory.say('Text');
  
  ok(p,'Add sentence fails');
        
  });

test('Add history',function(){
  
  var container = document.createElement('div');
  var myHistory = new Historial(container);
  
  var d = myHistory.push();

  ok(d,'Add history fails');
        
  });

module('History Features');

test('Add text into sentence',function(){
  
  var container = document.createElement('div');
  var myHistory = new Historial(container);
  
  var d = myHistory.push();
  var p = myHistory.say('Text');
  
  var t = d.children[0].innerHTML;
  
  equal(t, 'Text', 'Add text into sentence fails');
        
  });

test('Add sentence into div',function(){
  
  var container = document.createElement('div');
  var myHistory = new Historial(container);
  
  var d = myHistory.push();
  var p = myHistory.say('Text');
  
  equal(d.childNodes.length, 1, 'Add sentence fails');
        
  });

test('Add history into container',function(){
  
  var container = document.createElement('div');
  var myHistory = new Historial(container);
  
  var d = myHistory.push();

  equal(container.childNodes.length, 1, 'Add history into container fails');
        
  });

