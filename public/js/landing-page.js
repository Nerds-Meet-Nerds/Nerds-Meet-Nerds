const loginBtn = document.getElementById('load-player-btn');
const signUpBtn = document.getElementById('new-player-btn');
const loginPrompt = document.getElementById('login-prompt');
const signUpPrompt = document.getElementById('sign-up-prompt');
const backBtns = document.querySelectorAll('a');


const toggleDisplayLogin = () => {
    // If not being displayed, display and check if
    //  signup displaying. If it is, toggle it off.
    if (loginPrompt.classList.contains('d-none')) {
        loginPrompt.classList.remove('d-none');
        loginPrompt.classList.add('d-flex');
        if (signUpPrompt.classList.contains('d-flex')) {
            signUpPrompt.classList.remove('d-flex');
            signUpPrompt.classList.add('d-none');
        }
    // If is being displayed, toggle display off
    } else {
        loginPrompt.classList.remove('d-flex');
        loginPrompt.classList.add('d-none');
        
    } 
}

const toggleDisplaySignUp = () => {
    // If not being displayed, display and check if
    //  signup displaying. If it is, toggle it off.
    if (signUpPrompt.classList.contains('d-none')) {
        signUpPrompt.classList.remove('d-none')
        signUpPrompt.classList.add('d-flex');
        if (loginPrompt.classList.contains('d-flex')) {
            loginPrompt.classList.remove('d-flex');
            loginPrompt.classList.add('d-none');
        }
    // If is being displayed, toggle display off
    } else {
        signUpPrompt.classList.remove('d-flex');
        signUpPrompt.classList.add('d-none');
    } 
}

backBtns.forEach( btn => {
    switch (btn.id) {
        case 'login-back':
            btn.addEventListener('click', toggleDisplayLogin)
            break;
        case 'signup-back':
            btn.addEventListener('click', toggleDisplaySignUp)
            break;
    }
})

document.querySelector('#login-form').addEventListener('submit', async e => {
    e.preventDefault();
    var locator;
    var password;
    for (input of e.target.elements) {
        switch (input.name) {
            case 'locator':
                locator = input.value;
                break;
            case 'pass':
                password = input.value;
                break;
        }
    }
    const resp = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ locator, password}),
        headers: { 'Content-Type': 'application/json' }
    })

    console.log(resp);

    if (resp.ok) {
        document.location.replace('/homepage')
    } else {
        alert('Something went terribly wrong')
    }
})

document.querySelector('#signup-form').addEventListener('submit', async e => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const conPass = e.target.elements.con_pass.value;
    console.log(username, email, password, conPass);

    if(username && email && password && conPass){
        if(password === conPass) {
            const resp = await fetch('/api/users/signup', {
                method: 'POST', 
                body: JSON.stringify({username, email, password}),
                headers: {'Content-Type': 'application/json'}
            });
            if(resp.ok){
                document.location.replace('/profile');
            }else {
                alert('Something went terribly wrong!');
            }
        }else {
            alert('Your password does not match.')
        }
    }else {
        alert('Please fill in each field.')
    }
});



loginBtn.addEventListener('click', toggleDisplayLogin);
signUpBtn.addEventListener('click', toggleDisplaySignUp);