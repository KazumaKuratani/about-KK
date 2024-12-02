document.addEventListener("DOMContentLoaded",function(){
  const pickup = document.querySelector('.pickup');
  pickup.classList.add('pickupAnimation');
})

const title = document.querySelectorAll('.title');
const titlecb = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('titleAnimation'); 
      observer.unobserve(entry.target); 
    }
  });
};

const titleC = new IntersectionObserver(titlecb, {
  threshold: 0.5,
});
title.forEach(el =>titleC.observe(el));




const content1 = document.querySelectorAll('.content1');
const cb = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('content1-animation'); 
      observer.unobserve(entry.target); 
    }
  });
};

const io = new IntersectionObserver(cb, {
  threshold: 0.5,
});
content1.forEach(el =>io.observe(el));



const content2 = document.querySelectorAll('.content2');
const cb2 = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('content2-animation'); 
      observer.unobserve(entry.target); 
    }
  });
};

const io2 = new IntersectionObserver(cb2, {
  threshold: 0.5,
});
content2.forEach(el =>io2.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const lastMessage = document.querySelector(".last-messeage");
  const borders = document.querySelectorAll(".last-border-left, .last-border-right");
  const text = document.querySelector(".last-messeage p");

  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lastMessage.classList.add("last-messeage-animation");

        setTimeout(() => {
          borders[0].classList.add("visible");
        }, 300);

        setTimeout(() => {
          text.classList.add("visible");
        },400);

        setTimeout(() => {
          borders[1].classList.add("visible");
        }, 300);

        observer.unobserve(entry.target); 
      }
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.1 });
  observer.observe(lastMessage);
});


