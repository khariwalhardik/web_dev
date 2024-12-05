
let button=document.querySelector('button');
button.addEventListener('click', () => {
    fetch('/button-click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clicked: true }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message); // Log the server's response
        })
        .catch((error) => console.error('Error:', error));
});
let container = document.querySelector('.container');

// Add a double click event listener to the container
container.addEventListener("click", ()=> {
    container.style.backgroundColor = "red";
});
container.addEventListener("dblclick", ()=> {
    container.style.backgroundColor = "blue";
});


