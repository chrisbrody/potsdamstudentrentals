// used to open mobile navigation menu
open_menu = (event) => {
    let target = event.target
    // if the target contains a certain class =
    if(target.classList.contains('mobile_menu_button')) {
        
        // find menu item
        let menu = document.querySelectorAll('nav')[1]
        // restyle that item to show it
        menu.style.transform = 'translate(0)';
    };
}

// used to close mobile navigation menu
close_menu = (event) => {
    let target = event.target

    if( target.classList.contains('close_menu') ) {
        // find menu item
        let menu = document.querySelectorAll('nav')[1]
        // restyle that item to hide it
        menu.style.transform = 'translate(-110vw)';
    }
}



// $(window).scroll(function(){
    
//     if( $(this).scrollTop() > 200 ) {
//         console.log($(this))[0][0];
//     }
// });

// const checkScreenSize = () => {
//     console.log('checking screen size...');
    
//     let window_x = window.innerWidth;
//     let window_y = window.innerHeight;
    
//     // console.log(window_x, window_y)

//     if(window_x <= 1000) {
//         console.log('do mobile menu things')
        
//     } else {
//         console.log('do desktop menu things')
//     }
// }

// window.onload = checkScreenSize() 
// window.onresize = checkScreenSize 

