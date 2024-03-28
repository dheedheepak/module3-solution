var icon=document.querySelector('i')
var sidenav=document.querySelector('.sidenav')
icon.addEventListener('click',()=>{
    if(sidenav.style.display=='none'){
        sidenav.style.display="block"
    }else{
        sidenav.style.display='none'
    }
})

function handleResize() {
    if (window.innerWidth >= 600) {
        sidenav.style.display = "none";
    }
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);