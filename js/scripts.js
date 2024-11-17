const pics = [
    {
      image: "img/sassolungo.jpg",
      title: "Sassolungo",
      text: "Imponenti pareti e pinnacoli, dove la natura mostra la sua forza e serenità.",
    },
    {
      image: "img/seceda.jpg",
      title: "Seceda",
      text: "Pendii verdi e vette scolpite, un paesaggio da fiaba in alta quota.",
    },
    {
      image: "img/sella.jpg",
      title: "Sella",
      text: "Maestose rocce, un regno di avventure selvagge e viste mozzafiato.",
    },
    {
      image: "img/seiser-alm.jpg",
      title: "Alpe di Siusi",
      text: "Pianure incantate e distese fiorite, immerse nel cuore delle Dolomiti.",
    },
    {
      image: "img/sass-pordoi.jpg",
      title: "Sass Pordoi",
      text: "Vertiginosi dirupi e scogliere, dove il cielo incontra la pietra.",
    },
    {
      image: "img/piz-boe.jpg",
      title: "Piz Boe",
      text: "Una vetta scolpita dal vento, che si erge fiera tra le nubi.",
    }
  ];
  
  // HTML elements
  const galleryElem = document.querySelector(".gallery");
  const thumbnailsElem = document.querySelector(".thumbnails");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".back");
  
  // 1. Inserire le slide all'interno della pagina
  let slides = "";
  let thumbs = "";
  for (let i = 0; i < pics.length; i++) {
    const { image, title, text } = pics[i];
    slides += `
      <figure>
        <figcaption>
          <h2>${title}</h2>
          <h3>${text}</h3>
        </figcaption>
        <img alt="Svezia" src="${image}" />
      </figure>
    `;
  
    thumbs += `<img src="${image}" alt=""> `;
  }
  galleryElem.innerHTML = slides;
  thumbnailsElem.innerHTML = thumbs;
  
  // 2. Prelevare tutte le slide
  const slideElems = document.querySelectorAll(".gallery figure");
  const thumbnailImages = document.querySelectorAll(".thumbnails img");
  
  // Imposto lo stato di partenza
  let activeIndex = 0;
  slideElems[activeIndex].classList.add("active");
  thumbnailImages[activeIndex].classList.add("active");
  
  const hideSlide = (index) => {
    slideElems[index].classList.remove("active");
    thumbnailImages[index].classList.remove("active");
  };
  
  const showSlide = (index) => {
    slideElems[index].classList.add("active");
    thumbnailImages[index].classList.add("active");
  };
  
  const showNexSlide = () => {
    hideSlide(activeIndex);
    if (activeIndex >= slideElems.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    showSlide(activeIndex);
  }
  
  let intervalId =  setInterval(showNexSlide, 10000);
  
  nextBtn.addEventListener("click", showNexSlide);
  
  prevBtn.addEventListener("click", () => {
    hideSlide(activeIndex);
    if (activeIndex <= 0) {
      activeIndex = slideElems.length - 1;
    } else {
      activeIndex--;
    }
    showSlide(activeIndex);
  });
  
  for (let i = 0; i < thumbnailImages.length; i++) {
    const curThumbnail = thumbnailImages[i]; // object
    curThumbnail.addEventListener("click", () => {
      hideSlide(activeIndex);
      activeIndex = i;
      showSlide(activeIndex);
    });
  }