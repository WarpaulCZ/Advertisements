
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
        window.location.assign('/users/' + body.user._id)

        localStorage.setItem("token",body.token)

        console.log("Request complete! response:", res);
    });
  });
}


document.querySelector('#login').addEventListener('click', login)

