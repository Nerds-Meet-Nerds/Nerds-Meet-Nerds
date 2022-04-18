document.querySelector('.chatroom-open') && document.querySelectorAll('.chatroom-open').forEach(chatroombtn => {
    chatroombtn.addEventListener('click', e => {
        // console.log(e.target.id);
        document.location.replace(`/chatroom?${e.target.id}`)
    })
})