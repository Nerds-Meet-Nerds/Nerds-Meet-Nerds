const loginBtn = document.getElementById('load-player-btn');
const signUpBtn = document.getElementById('new-player-btn');
const loginPrompt = document.getElementById('login-prompt');
const signUpPrompt = document.getElementById('sign-up-prompt')

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



loginBtn.addEventListener('click', toggleDisplayLogin);
signUpBtn.addEventListener('click', toggleDisplaySignUp);