const allStories = [
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 1",
    },
    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 2",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 3",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 4",
    },
    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 5",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 6",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 7",
    },
    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 8",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 9",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 10",
    },

    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 11",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 12",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 13",
    },
    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 14",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 15",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 16",
    },
    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 17",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 18",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 19",
    },
    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 20",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 21",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 22",
    },
    {
      thumbUrl: "images/slider/slider-2.png",
      imageUrl: "images/slider/slider-2.png",
      title: "Title No. 23",
    },
    {
      thumbUrl: "images/slider/slider-3.png",
      imageUrl: "images/slider/slider-3.png",
      title: "Title No. 24",
    },
    {
      thumbUrl: "images/slider/slider-1.png",
      imageUrl: "images/slider/slider-1.png",
      title: "Title No. 25",
    },
    
  ];
  
  const storiesContainer = document.querySelector(".st-container");
  const storiesContainer_1 = document.querySelector(".st-container-1");
  const storyFull = document.querySelector(".story-full");
  const storyFUllImage = document.querySelector(".story-full img");
  const storyFUllTitle = document.querySelector(".story-full .st-title");
  const closeBtn = document.querySelector(".story-full .close-btn");
  const leftArrow = document.querySelector(".story-full .left-arrow");
  const rightArrow = document.querySelector(".story-full .right-arrow");
  
  let currentIndex = 0;
  let timer;
  
  allStories.forEach((s, i) => {
    const content = document.createElement("div");
    content.classList.add("content");
    content.classList.add("swiper-slide");
  
    const img = document.createElement("img");
    img.setAttribute("src",s.thumbUrl);
 
  
    storiesContainer_1.appendChild(content);
    content.appendChild(img);
  
    content.addEventListener("click", () => {
      currentIndex = i;
      storyFull.classList.add("active");
      storyFUllImage.setAttribute("src",s.imageUrl);
  
      if (!s.title) {
        storyFUllTitle.style.display = "none";
      } else{
        storyFUllTitle.style.display = "block";
        storyFUllTitle.innerHTML = s. title;
      }
  
      clearInterval(timer);
      timer = setInterval(nextStory, 5000);
    })
  });
  
  closeBtn.addEventListener("click", () => {
    storyFull.classList.remove("active");
  })
  
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
  
      storyFUllImage.setAttribute("src", allStories[currentIndex].imageUrl);
  
      if (!allStories[currentIndex].title) {
        storyFUllTitle.style.display = "none";
      } else{
        storyFUllTitle.style.display = "block";
        storyFUllTitle.innerHTML = allStories[currentIndex].title;
      }
      clearInterval(timer);
      timer = setInterval(nextStory, 5000);
    }
  });
  
  const nextStory = () => {
    if (currentIndex < allStories.length -1 ) {
      currentIndex += 1;
  
      storyFUllImage.setAttribute("src", allStories[currentIndex].imageUrl);
  
      if (!allStories[currentIndex].title) {
        storyFUllTitle.style.display = "none";
      } else{
        storyFUllTitle.style.display = "block";
        storyFUllTitle.innerHTML = allStories[currentIndex].title;
      }
    }
  }
  
  rightArrow.addEventListener("click", () => {
    nextStory();
    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  });




  // ! Arrows

  const next_st=document.querySelector('#next-st')
  const prev_st=document.querySelector('#prev-st')

function handleScrollNext_st (direction_st) {
  const cards_st = document.querySelector('.st-container')
  cards_st.scrollLeft=cards_st.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /3 : window.innerWidth -100
}

function handleScrollPrev_st (direction_st) {
  const cards_st = document.querySelector('.st-container')
  cards_st.scrollLeft=cards_st.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /3 : window.innerWidth -100
}

next_st.addEventListener('click', handleScrollNext_st)
prev_st.addEventListener('click', handleScrollPrev_st)
