const imagesBtn = document.getElementById('images-btn');
const editInfoBtn = document.getElementById('edit-info-btn');
const submitBioForm = document.getElementById('submit-bio-form');

const displayImageUpload = () => {
    const uploadImgContainer = document.getElementById('upload-img-container');
    if (uploadImgContainer.classList.contains('d-none')) {
        uploadImgContainer.classList.remove('d-none');
        uploadImgContainer.classList.add('d-flex');
    } else {
        uploadImgContainer.classList.remove('d-flex');
        uploadImgContainer.classList.add('d-none');
    } 
}

const toTextArea = () => {
    const bioText = document.getElementById('bio-text');
    
    if (bioText.classList.contains('d-flex')){
        bioText.classList.remove('d-flex');
        bioText.classList.add('d-none');
    } else {
        bioText.classList.remove('d-none');
        bioText.classList.add('d-flex');
    }

    if (submitBioForm.classList.contains('d-none')) {
        submitBioForm.classList.remove('d-none');
        submitBioForm.classList.add('d-flex');
    } else {
        submitBioForm.classList.remove('d-flex');
        submitBioForm.classList.add('d-none');
    }
}

const editBio = () => {
    toTextArea();
}

const updateBio = async (e) => {
    e.preventDefault();
    const newBio = e.target.elements[0].value
    const resp = await fetch('/api/users/updateBio', {
        method: 'PUT',
        body: JSON.stringify({newBio}),
        headers: { 'Content-Type':'application/json' }
    })
    if (resp.ok) {
        document.location.reload()
    } else {
        alert('Something went terribly wrong...')
    }
}


imagesBtn.addEventListener('click', displayImageUpload);
editInfoBtn.addEventListener('click', editBio);
submitBioForm.addEventListener('submit', updateBio);

// const getImage = async () => {
//     const pfpImg = document.getElementById('pfp-img');
//     const image = await fetch('/api/pictures/getImage/1');
//     const parsedImg = await image.json();
//     // console.log(image);
//     pfpImg.src = parsedImg;
// }

// getImage();


document.querySelector('#upload-img-form').addEventListener('submit', async e => {
    e.preventDefault()
    const resp = await fetch('/api/pictures/uploadImage', {
        method: 'POST',
        body: JSON.stringify({pic: e.target.elements.imgURL.value}),
        headers: { 'Content-Type':'application/json' }
    })
    if (resp.ok) {
        document.location.reload()
    } else {
        alert('Something went terribly wrong...')
    }
})