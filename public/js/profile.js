const imagesBtn = document.getElementById('images-btn');
const editInfoBtn = document.getElementById('edit-info-btn');

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
    const submitBioForm = document.getElementById('submit-bio-form');
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


imagesBtn.addEventListener('click', displayImageUpload);
editInfoBtn.addEventListener('click', editBio);