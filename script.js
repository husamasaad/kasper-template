
// Start of Swiper Scripts
const menuBtn = document.getElementById('toggle');
const menu = document.querySelector('.links');
const arrows = document.querySelectorAll('.arrows span');
const bullets = [...document.querySelectorAll('header .blt')];
const swipeImgs = [...document.querySelectorAll('.swipe-img')];
const swipeText = [...document.querySelectorAll('.swipe')];


    let current = 1;

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show')
});


bullets.forEach((blt, i) => {
  blt.onclick = () => {
    current = i;
    bullets.forEach((blt, i) => {
        blt.classList.remove('active');
    });
    swipeImgs.forEach((img => {
      img.classList.remove('active')
    }))
    swipeText.forEach((text => {
      text.classList.remove('active')
    }))
    bullets[current].classList.add('active');
    swipeImgs[current].classList.add('active');
    swipeText[current].classList.add('active');
  }
})

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {

    bullets.forEach((blt, i) => {
      if (blt.classList.contains('active')){
        current = i;
        blt.classList.remove('active');
      }
    })
    swipeImgs.forEach((img => {
      img.classList.remove('active')
    }))
    swipeText.forEach((text => {
      text.classList.remove('active')
    }))
    if (arrow.id == 'ar-right') {
      swipeRight(current);
    }
    if (arrow.id == 'ar-left') {
      swipeLeft(current);
    }
  })
})

function swipeRight(cur) {
  if (cur === (bullets.length - 1)) {
    cur = -1;
  }
  bullets[cur + 1].classList.add('active');
  swipeImgs[cur + 1].classList.add('active');
  swipeText[cur + 1].classList.add('active');
}

function swipeLeft(cur) {
  if (cur === 0) {
    cur = 3;
  }
  bullets[cur - 1].classList.add('active');
  swipeImgs[cur - 1].classList.add('active');
  swipeText[cur - 1].classList.add('active');
}

// End of Swiper Scripts


// Start of Portfolio Script

const images = {
  first: [
    "./imgs/shuffle-01.jpg",
    "./imgs/shuffle-02.jpg",
    "./imgs/shuffle-03.jpg",
    "./imgs/shuffle-04.jpg"
  ],
  second: [
    "./imgs/shuffle-05.jpg",
    "./imgs/shuffle-06.jpg",
    "./imgs/shuffle-07.jpg",
    "./imgs/shuffle-08.jpg"
  ],
  third: [
    "./imgs/shuffle-09.jpg",
    "./imgs/shuffle-10.jpg",
    "./imgs/shuffle-11.jpg",
    "./imgs/shuffle-12.jpg"
  ],
  fourth: [
    "./imgs/shuffle-13.jpg",
    "./imgs/shuffle-14.jpg",
    "./imgs/shuffle-15.jpg",
    "./imgs/shuffle-16.jpg"
  ]
}

const portfolio = document.querySelector('.img-container');
const filters = [...document.querySelectorAll(".filter li")];


loadImgs("all");

filters.forEach((filter) => {
  filter.onclick = () => {
    portfolio.innerHTML = "";
    loadImgs((filter.textContent).toLowerCase());
    filters.forEach((filterInner) => {
      filterInner.classList.remove("active");
    })
    filter.classList.add("active");
  }
})

function loadImgs(cat) {
  if (cat == "all") {
    for (let key in images) {
      images[key].forEach((img) => {
        let box = document.createElement('div');
        box.className = "img-box";
        box.innerHTML = `
        <img src="${img}" alt="">
        <div class="caption">
          <h4>Awesome Image</h4>
          <p>${key.toUpperCase()} Category</p>
        </div>
        `;
        portfolio.appendChild(box);
      })
    }
  } else {
    console.log(cat);
    images[cat].forEach((img) => {
      let box = document.createElement('div');
      box.className = "img-box";
      box.innerHTML = `
      <img src="${img}" alt="">
      <div class="caption">
        <h4>Awesome Image</h4>
        <p>${cat.toUpperCase()} Category</p>
      </div>
      `;
      portfolio.appendChild(box);
    })
  }
}



// End of Portfolio Script

// Start of Stats Scripts

const statElments = [...document.querySelectorAll('.amount')];

const stats = {
  projects: 256,
  drinks: 1236,
  mails: 1743,
  awards: 17
}

// start counting up from 0 when stats are visible in brouwser
let observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
  {
    updateStats();
  }
}, { threshold: [0] });

observer.observe(document.querySelector("#stats"));

function updateStats() {
  statElments.forEach((stat => {
    countUp(stat, stats[stat.id])
  }))
}




function countUp(element, max) {
  let count = 0;
  let counterInterval = setInterval(() => {
    if (count <= max) {
      element.textContent = count;
      count += (Math.ceil(max / 300));
    } else {
      element.textContent = max;
    }
  }, 10)
}

// End of Stats Scripts

// Start of Skills scripts

const skills = {
  writing: 95,
  frontEnd: 90,
  JavaScript: 85,
  Python: 60
}

const skillArr = Array.from(Object.keys(skills));

const skillsProg = [...document.querySelectorAll('.skills .prog-holder .prog span')];

let observerSkills = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
  {
    updateSkills();
  }
}, { threshold: [0] });

observerSkills.observe(document.querySelector(".skills"));


function updateSkills() {
  skillsProg.forEach((skill, i) => {
    console.log(skill)
    loadSkills(skill, skills[skillArr[i]]);
  })
}


function loadSkills(element, max) {
  let count = 0;
  let counterInterval = setInterval(() => {
    if (count <= max) {
      element.style.width = `${count}%`;
      element.dataset.progress = `${count}%`
      count += (Math.ceil(max / 300));
    } else {
      element.style.width = `${max}%`;
      element.dataset.progress = `${max}%`;
    }
  }, 10)
}

// End of Skills scripts



