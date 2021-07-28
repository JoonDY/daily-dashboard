export const createTime = () => {
  const time = document.getElementById('time');
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  
  if (min < 10) {
    min = `0${min}`;
  };

  const amPM = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.textContent = `${hour}:${min} ${amPM}`
  
  setTimeout(createTime, 1000);
}