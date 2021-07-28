export const getActivity = async() => {
  const url = 'http://www.boredapi.com/api/activity/';
  const bored = document.getElementById('bored');
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.activity);
  bored.textContent = data.activity;

};
