import { Grade } from "../data/lesson-list.js";

const g11Subjects = document.querySelector('.js-g11');
const g12Subjects = document.querySelector('.js-g12');

let subjects = ""

Grade.forEach((lesson) => {
  subjects += `
   <section class="Grade js-grade-${lesson.id}">
      <div class="title">
        <p>${lesson.title}</p>
        <svg fill="var(--dark-color)" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g data-name="Layer 2">
          <g data-name="chevron-down">
          <rect width="24" height="24" opacity="0"/>
          <path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/>
          </g>
          </g>
        </svg>
      </div>
      <div class="subject-wrapper">
      ${lesson.grade.map((subject) => `
          <div class="each-sub">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 2500 2500" width="2500" height="2500">
        <defs><clipPath id="clipPath"><rect width="2500" height="2500"/></clipPath></defs><g clip-path="url(#clipPath)"><g id="Group"><path d=" M 2205.8 547.4 L 1151.9 547.4 L 917.7 313.2 L 332.2 313.2 C 203.39 313.2 98 418.59 98 547.4 L 98 1015.8 L 2440 1015.8 L 2440 781.6 C 2440 652.79 2334.61 547.4 2205.8 547.4 Z "/><path d=" M 2205.8 547.4 L 332.2 547.4 C 203.39 547.4 98 652.79 98 781.6 L 98 1952.6 C 98 2081.41 203.39 2186.8 332.2 2186.8 L 2205.8 2186.8 C 2334.61 2186.8 2440 2081.41 2440 1952.6 L 2440 781.6 C 2440 652.79 2334.61 547.4 2205.8 547.4 Z "/></g></g>
          </svg>
          <p>${subject.name}</p>
        </div>
          ` ).join('')
    }
      </div>
    </section>
  `
});

document.querySelector('.lesson-page').innerHTML += subjects;

const collaps = document.querySelectorAll('.title');
const natBtn = document.querySelector('.nat-btn');
const socBtn = document.querySelector('.soc-btn');

collaps.forEach((min) => {
  min.addEventListener('click', () => {
    const grade = min.closest('.Grade');
    grade.classList.toggle('lesson-on');
    min.querySelector('svg').classList.toggle('ninty-rotate');
  });
});

const soc11 = document.querySelector('.js-grade-SG11');
const soc12 = document.querySelector('.js-grade-SG12');
const nat11 = document.querySelector('.js-grade-NG11');
const nat12 = document.querySelector('.js-grade-NG12');

function onloadNatural(){
  soc11.classList.add('off');
  soc12.classList.add('off');
  natBtn.classList.add('selected-btn');
}

natBtn.addEventListener('click',() =>{
  soc11.classList.add('off');
  soc12.classList.add('off');
  nat11.classList.remove('off');
  nat12.classList.remove('off');
  natBtn.classList.add('selected-btn');
  socBtn.classList.remove('selected-btn');
});

socBtn.addEventListener('click', () => {
  nat11.classList.add('off');
  nat12.classList.add('off');
  soc11.classList.remove('off');
  soc12.classList.remove('off');
  socBtn.classList.add('selected-btn');
  natBtn.classList.remove('selected-btn');
});
onloadNatural();