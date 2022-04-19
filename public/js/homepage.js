const like = document.getElementById('likeBtn');
const dislike = document.getElementById('dislikeBtn');
const username = document.getElementById("username"); 
const bio = document.getElementById("bio"); 



async function newUser() {
    const response = await fetch ('/api/users/all');
    const userData = await response.json()
    return userData
}



async function init(){
    let allUsers = await newUser()
    function domSetUp(){
        let firstUser = allUsers.pop()
        username.innerHTML = firstUser.username;
        bio.innerHTML = firstUser.bio
    }
    domSetUp();
    dislike.addEventListener('click', e => {
        if(allUsers.length){
            // let currentUser = allUsers.pop()
            // username.innerHTML = currentUser.username;
            // bio.innerHTML = currentUser.bio
            domSetUp();
        }else{
            alert("That's everyone!")
        }
    });
    like.addEventListener('click', e => {
        if(allUsers.length){
            // let currentUser = allUsers.pop()
            // username.innerHTML = currentUser.username;
            // bio.innerHTML = currentUser.bio
            domSetUp();
        }else{
            alert("That's everyone!")
        }
    });
}




init()

