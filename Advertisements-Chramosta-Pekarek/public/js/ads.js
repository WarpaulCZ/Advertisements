
function json(response) {
    return response.json()
}

const login = () => {
let data = { email: document.querySelector('#email').value, password: document.querySelector('#password').value };
fetch("/users/login", {
    method: "POST", 
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
      }
  }).then(res => {
    res.json()
    .then(body => {
        //TODO
        console.log(body.token)
        localStorage.setItem("token",body.token)
    });

    
    console.log("Request complete! response:", res);
  });
}


/*const fetchAds = () => {
    fetch('/advertisements')
    .then(status)
    .then(json)
    .then( (data) => {
        adsRender(data)
    })
    .catch( (error) => { renderErrorMessage(error) })
}*/

//window.onload = fetchAds()

document.querySelector('#login').addEventListener('click', login)
