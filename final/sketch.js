
let pos = 25;

const faders = document.querySelector('.fade-in')
console.info(faders[0])
const appearOptions = { };

const appearOnScroll = new IntersectionObserver
(function(
    entries,
     appearOnScroll
     ) {
         entries.forEach(entry =>{
             console.info(entry)
             if (!entry.isIntersecting){
                 return;
             } else {
                 entry.target.classList.add('appear');
                 appearOnScroll.unobserve(entry.target);
             }
         })
     }, 
     appearOptions)


     faders.forEach(fader => {
         appearOnScroll.observe(fader);
     })