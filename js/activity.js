const bored = document.getElementById('bored');

export const getActivity = async() => {
  const url = 'http://www.boredapi.com/api/activity/';
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.activity);
  bored.textContent = data.activity;

};
