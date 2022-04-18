const loginBtn = document.getElementById('load-player-btn');
const signUpBtn = document.getElementById('new-player-btn');

const displayLogin = () => {
    const loginPrompt = document.getElementById('login-prompt');
    if (loginPrompt.classList.contains('d-none')) {
        loginPrompt.classList.remove('d-none');
        loginPrompt.classList.add('d-flex');
    } else {
        loginPrompt.classList.remove('d-flex');
        loginPrompt.classList.add('d-none');
    } 
}

const displaySignUp = () => {
    const signUpPrompt = document.getElementById('sign-up-prompt')
    if (signUpPrompt.classList.contains('d-none')) {
        signUpPrompt.classList.remove('d-none')
        signUpPrompt.classList.add('d-flex');
    } else {
        signUpPrompt.classList.remove('d-flex');
        signUpPrompt.classList.add('d-none');
    } 
}



loginBtn.addEventListener('click', displayLogin);
signUpBtn.addEventListener('click', displaySignUp);