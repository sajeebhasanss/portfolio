const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const navTable = document.getElementById('tId')

/*Navbar js start : */
function openn(){
    openBtn.style.display = "none";
    closeBtn.style.display = "inherit";
    navTable.style.margin = "0px";

}

function closee(){
    openBtn.style.display = "inherit";
    closeBtn.style.display = "none";
    navTable.style.marginLeft = "-858px";
}

function navNone(){
    if (window.innerWidth<=858) {
        navTable.style.marginLeft =  "-858px";
        openBtn.style.display =  "inherit";
        closeBtn.style.display =  "none";
    }
}

/*Navbar js finish*/

/*aos js start*/

AOS.init({

    duration: 1000
});

/*aos js finish*/