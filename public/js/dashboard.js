document.querySelector('.chatroom-open') && document.querySelectorAll('.chatroom-open').forEach(chatroombtn => {
    chatroombtn.addEventListener('click', e => {
        document.location.replace(`/chatroom?${e.target.id}`)
    })
})