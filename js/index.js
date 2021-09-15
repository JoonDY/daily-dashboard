import { createTime } from './time.js';
import { getLocation } from './weather.js';
import { getStocks } from './stocks.js';
import { getActivity } from './activity.js';

const initApp = () => {
  createTime();
  getLocation();
  getStocks();
  getActivity();

  const activityBtn = document.getElementById('activity-btn');
  activityBtn.addEventListener('click', getActivity);
};

initApp();
