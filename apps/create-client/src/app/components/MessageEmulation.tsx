import React from 'react';

function sendMessage() {
  fetch('http://localhost:3333/api/redis')
    .then(() => alert('Сообщение отправлено!'))
    .catch(() => alert('Ошибка'))
}

export const MessageEmulation = () => {
  return (
    <div>
      <p>Эмуляция сообщений</p>
      <button onClick={sendMessage}>Отправить сообщение в Redis</button>
    </div>
  )
}
