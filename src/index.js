import './index.html';
import './index.scss';
import timeConverter from './modules/timeConverter';
import dayCalculator from './modules/daysCalculator';
import weighConvertor from './modules/weightConverter';

window.addEventListener('DOMContentLoaded', () => {
timeConverter();
dayCalculator();
weighConvertor();

});