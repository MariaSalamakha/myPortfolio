const buttons = document.querySelectorAll('.buttonActionMenu');
let selectedButton = document.querySelector('.selected');

const setAnchorOnSelected = () => {
  if (selectedButton) {
    selectedButton.style.anchorName = '--selected';
  }
};

setAnchorOnSelected();


buttons.forEach(item => {
  item.addEventListener('click', () => {
    if (selectedButton) {
      selectedButton.classList.remove('selected');
      selectedButton.style.anchorName = '';
    }
    selectedButton = item;
    selectedButton.classList.add('selected');
    setAnchorOnSelected();
  });

  const handleInteractionStart = () => {
    if (item !== selectedButton) {
      if (selectedButton) {
        selectedButton.style.anchorName = '';
      }
      item.style.anchorName = '--selected';
    }
  };

  item.addEventListener('mouseenter', handleInteractionStart);
  item.addEventListener('focus', handleInteractionStart);

  const handleInteractionEnd = () => {
    if (item !== selectedButton) {
      item.style.anchorName = '';
      setAnchorOnSelected();
    }
  };

  item.addEventListener('mouseleave', handleInteractionEnd);
  item.addEventListener('blur', handleInteractionEnd);
});


  const worksLink = document.querySelector('a[href="#works"]');
  const aboutLink = document.querySelector('a[href="#three"]');

  function moveDown(event) {
    const svg = event.currentTarget.querySelector('svg');
    svg.style.transform = 'translateY(10px)'; 
    svg.style.transition = 'transform 0.8s'; 
  }
  function moveBack(event) {
    const svg = event.currentTarget.querySelector('svg');
    svg.style.transform = 'translateY(0)';
  }
  worksLink.addEventListener('mouseover', moveDown);
  worksLink.addEventListener('mouseout', moveBack);

  aboutLink.addEventListener('mouseover', moveDown);
  aboutLink.addEventListener('mouseout', moveBack);

  
let picture = document.querySelector("#pictureBlacknWhite");

picture.addEventListener("mouseenter", () => {
  picture.src = "0A3A0290.JPG";
});

picture.addEventListener("mouseleave", () => {
  picture.src = "0A3A0290 (1).JPG";
});


window.addEventListener("load", () => {
  gsap.fromTo(".mainHeader", 
    { opacity: 0, y: -300 }, 
    { opacity: 1, y: 0, delay: 0.7, duration: 0.9, ease: "power1" }
  );
  gsap.fromTo(".nameHeader", 
    { opacity: 0, y: 300 }, 
    { opacity: 1, y: 0, delay: 1.6, duration: 0.9, ease: "power1" }
  );
  gsap.fromTo(".pictureContainer", 
    { opacity: 0 }, 
    { opacity: 1, delay: 2.5, duration: 1.9, ease: "elastic.out(1,0.3)" }
  );
  gsap.fromTo(".liquidGlassMenu", 
    { opacity: 0, x: 300 }, 
    { opacity: 1, x: 0, delay: 4.4, duration: 0.9, ease: "back" }
  );
  gsap.fromTo(".rowRight", 
    { opacity: 0, x: -300 }, 
    { opacity: 1, x: 0, delay: 5.3, duration: 0.9, ease: "back" }
  );
  gsap.fromTo(".rowCenter", 
    { opacity: 0, y: -350 }, 
    { opacity: 1, y: 0, delay: 6.2, duration: 0.9, ease: "back" }
  );
});


const hexagons = document.querySelectorAll(".hexagon");

hexagons.forEach(hex=> {
  const overlay = hex.querySelector(".overlay-svg");
  let hasFlipped = false; 

  overlay.addEventListener("mouseenter", () => {
  if (!hasFlipped) {
    overlay.style.transform = "translate(-50%, -50%) rotateY(180deg)";
    overlay.style.opacity = "0";
    hasFlipped = true; 
  }});

  hex.addEventListener("mouseleave", () => {
  overlay.style.display = "block";     
  overlay.style.transform = "translate(-50%, -50%) rotateY(0deg)";
  overlay.style.opacity = "1";
  hasFlipped = false;   
});
})

const worksSection = document.querySelector("#works");

const worksObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      worksSection.classList.add("visible");
    }
  });
}, {
  threshold: 0.3
});

worksObserver.observe(worksSection);

const OFFSET = 100; 

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if(targetElement){
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});