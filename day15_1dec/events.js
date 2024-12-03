let button = document.getElementById('btn');

button.addEventListener('click', function() {
    alert('button clicked');
    document.querySelector('.box').style.backgroundColor = 'red';
    document.querySelector('.box').style.color = 'white';
    document.querySelector('.box').style.fontSize = '20px';
    document.querySelector('.box').innerHTML="Button Clicked";
    }); 


    button.addEventListener('contextmenu', function() {
        alert('right click is disabled');
        }); 
//add event listener has two arguments, the first is the event type, the second is the function that will be called when the event is triggered.

//we can use mdn reference to find the event type that we want to use.
//https://developer.mozilla.org/en-US/docs/Web/Events
