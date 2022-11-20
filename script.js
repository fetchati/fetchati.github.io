var section, last_section;
document.addEventListener('scroll', onScroll);

function onScroll(event){
    getSection();
    if (section != last_section){
        pageChange();
    }
}

function onLoad(){
    last_section = 0;
    getSection();
    pageChange();
}

function getSection(){
    last_section = section;
    section = Math.round(window.pageYOffset/window.innerHeight);
}

function pageChange(event) {
    console.log("updating colors");
    updateColors();
}


function updateColors(){
    links = document.querySelectorAll("#navbar > a");

    for(element of links.values()){
        element.removeAttribute('style');
    }
  
    switch(section){
      case 0: document.getElementById("homelink").style.color="var(--accent1dark)"; return;
      case 1: document.getElementById("aboutlink").style.color="var(--accent1dark)"; return;
      case 2: document.getElementById("educationlink").style.color="var(--accent1dark)"; return;
      case 3: document.getElementById("skillslink").style.color="var(--accent1dark)"; return;
      case 4: document.getElementById("worklink").style.color="var(--accent1dark)"; return;
      case 5: document.getElementById("projectslink").style.color="var(--accent1dark)"; return;
      case 6: document.getElementById("contactlink").style.color="var(--accent1dark)"; return;
    }
}