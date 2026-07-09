import { notes } from "../data/note-list.js";

const mainBody = document.querySelector('.notes');
const uploader = document.querySelector('.add-file');
const adder = document.querySelector('.float');

uploader.addEventListener('click', () =>{
  adder.classList.toggle('float-open');
});



