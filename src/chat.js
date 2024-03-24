var inputEl = document.getElementById('chat-input');
var btnEl = document.getElementById('chat-btn');
var chatHistoryEl = document.getElementById('chat-history');

btnEl.addEventListener('click', function(event) {
  const chatMsg = inputEl.value.trim();
  if (!chatMsg) return;
  
  
  var chatMsgEl = document.createElement('div');
  chatMsgEl.className = 'chat-msg';
  chatMsgEl.textContent = chatMsg;
  chatHistoryEl.appendChild(chatMsgEl);


  btnEl.disabled = true;
  inputEl.value = '';
  var chatReplyEl = document.createElement('div');
  chatReplyEl.className = 'chat-reply';
  chatReplyEl.textContent = '...';
  chatHistoryEl.appendChild(chatReplyEl);
  chatHistoryEl.scrollTop = chatHistoryEl.scrollHeight;
  setTimeout(() => {
    chatReplyEl.textContent = chatMsg;
    btnEl.disabled = false;
  }, 1500)

});

inputEl.addEventListener('keypress', function(event) {
  if(event.key === 'Enter') {
    event.preventDefault();
    btnEl.click();
  }
});
