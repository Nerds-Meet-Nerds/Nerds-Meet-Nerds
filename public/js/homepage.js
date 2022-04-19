const like = document.getElementById('likeBtn');
const dislike = document.getElementById('dislikeBtn');
const username = document.getElementById("username"); 
const bio = document.getElementById("bio");
const caro = document.querySelector('.carousel-inner');
const caroInd = document.querySelector('.carousel-indicators');


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
        caroInd.innerHTML = ''
        caro.innerHTML = ''
        for (let index in firstUser.pictures) {
            const newLi = document.createElement('li');
            newLi.outerHTML = '<li data-target="#carouselExampleIndicators" data-slide-to="0"></li>';
            const newDiv = document.createElement('div')
            newDiv.classList.add('carousel-item')
            newDiv.innerHTML = `<img class="d-block w-100 caroHt" src="${firstUser.pictures[index].pic}" alt="Slide">`
            if (index == 0) {
                newDiv.classList.add('active')
                newLi.classList.add('active')
            }
            caro.append(newDiv)
            caroInd.append(newLi)
        }
    }
    domSetUp();
    dislike.addEventListener('click', e => {
        if(allUsers.length){
            domSetUp();
        }else{
            alert("That's everyone!")
        }
    });
    like.addEventListener('click', e => {
        if(allUsers.length){
            domSetUp();
        }else{
            alert("That's everyone!")
        }
    });
}




init()

