const form = document.querySelector('.form');
form.addEventListener('submit', () => {
    let name= document.querySelector('.name').value;
    let email= document.querySelector('.email').value;
    let phone= document.querySelector('.phone').value;

    // console.log(name,email,phone);
    //now send this data to server
    
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,phone})
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

});