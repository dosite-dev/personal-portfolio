


var aboutMeTabLinks = document.getElementsByClassName("aboutme-tab");

var aboutMeContents = document.getElementsByClassName("aboutme-content");
function opentab(tabname){
    for(aboutMeTabLink of aboutMeTabLinks ){
        aboutMeTabLink.classList.remove("activetab");
    }
    for(aboutMeContent of aboutMeContents ){
        aboutMeContent.classList.remove("activecontent");
    }
    event.currentTarget.classList.add("activetab");
    document.getElementById(tabname).classList.add("activecontent");

    
}
