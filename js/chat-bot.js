let chatBot = ''
const AIchat = document.querySelector('.chat-bot');
const body = document.body;

chatBot += `
  <section class="chat-bot">
  <button class="close-chat-bot">
      >> Close
    </button>
    <div class="AIlogo">
      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.41 56.41">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path class="cls-1" d="M40.92,22.81l15.49,3.79L29.81,0l3.79,15.49c.91,3.73,3.59,6.4,7.32,7.32Z"/>
            <path class="cls-1" d="M33.27,40.59l-3.46,15.82,26.6-26.6-15.82,3.46c-3.81.83-6.48,3.51-7.32,7.32Z"/>
            <path class="cls-1" d="M23.31,15.99L26.6,0,0,26.6l15.99-3.29c3.85-.79,6.52-3.46,7.32-7.32Z"/>
            <path class="cls-1" d="M22.86,40.87c-.9-3.74-3.57-6.41-7.32-7.32L0,29.81l26.6,26.6-3.74-15.54Z"/>
          </g>
        </g>
      </svg>
      <p><span>Hi Altaye</span><br> I'm lenjisa, How can I help you today?</p>
    </div>
    <div class="text-bar">
      <textarea placeholder="Ask me anything..."></textarea>
      <button>Send</button>
    </div>
  </section>

  <svg class="chat-opener" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.41 56.41">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path class="cls-1" d="M40.92,22.81l15.49,3.79L29.81,0l3.79,15.49c.91,3.73,3.59,6.4,7.32,7.32Z"/>
            <path class="cls-1" d="M33.27,40.59l-3.46,15.82,26.6-26.6-15.82,3.46c-3.81.83-6.48,3.51-7.32,7.32Z"/>
            <path class="cls-1" d="M23.31,15.99L26.6,0,0,26.6l15.99-3.29c3.85-.79,6.52-3.46,7.32-7.32Z"/>
            <path class="cls-1" d="M22.86,40.87c-.9-3.74-3.57-6.41-7.32-7.32L0,29.81l26.6,26.6-3.74-15.54Z"/>
          </g>
        </g>
  </svg>
`

body.innerHTML += chatBot;
const closeBtn = document.querySelector('.close-chat-bot');
const chatOn = document.querySelector('.chat-opener');

closeBtn.addEventListener('click', () =>{
  body.classList.add('chat-close')
})

chatOn.addEventListener('click', () =>{
  body.classList.remove('chat-close');
})
