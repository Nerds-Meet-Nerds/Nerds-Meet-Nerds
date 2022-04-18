document.querySelector('#navbar-home').addEventListener('click', e => {
    e.preventDefault();
    document.location.replace('/homepage')
})
document.querySelector('#navbar-profile').addEventListener('click', e => {
    e.preventDefault();
    document.location.replace('/profile')
})
document.querySelector('#navbar-dashboard').addEventListener('click', e => {
    e.preventDefault();
    document.location.replace('/dashboard')
})
document.querySelector('#navbar-logout').addEventListener('click', async e => {
    e.preventDefault();
    if (confirm('Are you sure you wish to log out?')){
        const resp = await fetch('/api/users/logout', {
            method: 'POST',
        })
        if (resp.ok) {
            document.location.replace('/')
        } else {
            alert('Something went terribly wrong')
        }
    }
})