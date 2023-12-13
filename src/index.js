import './index.html';
import './index.scss';
import timeConverter from './modules/timeConverter';
import dayCalculator from './modules/daysCalculator';

window.addEventListener('DOMContentLoaded', () => {
timeConverter();
dayCalculator();

});