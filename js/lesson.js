import { G9_10 } from "../data/lesson-list.js";


const g10Subjects = document.querySelector('.js-g10');
const g11Subjects = document.querySelector('.js-g11');
const g12Subjects = document.querySelector('.js-g12');

let subjects = ""

G9_10.forEach((grade) =>{
  subjects += `
   <section class="Grade">
      <p>${grade.title}</p>
      <div class="subject-wrapper">
      ${
        grade.grade.map((subject) =>`
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

document.querySelector('.lesson-page').innerHTML += subjects