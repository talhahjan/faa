const navMenu=document.getElementById('nav-menu');
const toggleBtn=document.getElementById('toggle-btn');
const navBar=document.querySelector('nav');
toggleBtn.addEventListener('click', ()=> navMenu.classList.toggle('hidden'));



window.addEventListener('scroll', ()=>{
  navBar.classList.toggle('shadow-lg', window.scrollY > 0);
  navMenu.classList.toggle('hidden', window.scrollY > 0);
})

$('.owl-carousel').owlCarousel({
    // center: true,
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }

});

// animate numbers 
const statistics=document.getElementById('statistics');

const counterNum=document.querySelectorAll('#statistics h2');

const speed=200;



const observer=new  IntersectionObserver((entries, observer)=>{
const [entry]=entries;
if(!entry.isIntersecting) return ;

counterNum.forEach((CurElem)=>{

const updateNumber=()=>{
const targetNumber=parseInt(CurElem.dataset.numbers);

const initialNumber=parseInt(CurElem.innerText);

const incrementNumber=Math.trunc(targetNumber/speed);


if(initialNumber < targetNumber){
  CurElem.innerText=`${initialNumber + incrementNumber}+`;
  setTimeout(updateNumber, 10);
}

}

  updateNumber();
});
observer.unobserve(statistics)  ;
},{
  root:null,
  threshold:0.3,
});



observer.observe(statistics);

