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

const displayEditInfo = () => {
    const editInfoContainer = document.getElementById('edit-info-container')
    if (editInfoContainer.classList.contains('d-none')) {
        editInfoContainer.classList.remove('d-none')
        editInfoContainer.classList.add('d-flex');
    } else {
        editInfoContainer.classList.remove('d-flex');
        editInfoContainer.classList.add('d-none');
    } 
}



imagesBtn.addEventListener('click', displayImageUpload);
editInfoBtn.addEventListener('click', displayEditInfo);