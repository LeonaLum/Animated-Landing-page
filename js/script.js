// Först hämtar jag in alla element med classen fade-in
let appearingObjects = document.querySelectorAll(".fade-in");

//För att få elementen att dyka upp när man scrollar över
//dem så använder jag mig av intersectionObserver apiet.
//Först anger jag inställningarna för hur långt man ska
//scrolla innan elementen visas
const showOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "-150px"
};

//jag döper min intersection observer till appearOnScroll
//Den tar sedan in en funktion och showOptions med inställningar

//I funktionen loopar jag igenom varje element och ser om
//det har nåtts, om det har det så ska klassen show
//läggas till
const appearOnScroll = new IntersectionObserver(
  function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      else{
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, showOptions);

  appearingObjects.forEach(element => {
    appearOnScroll.observe(element);
  });
