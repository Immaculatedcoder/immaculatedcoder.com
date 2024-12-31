const sideMenu = document.getElementById('sideMenu')
// const sideMenu = document.querySelector('#sideMenu')
// It looks for an element with the ID SideMenu

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
    // -16 rem is smame as right-64
    // So it like we are setting the transform: translate
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}