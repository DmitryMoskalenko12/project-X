import './index.html';
import './index.scss';
import timeConverter from './modules/timeConverter';
import dayCalculator from './modules/daysCalculator';
import weighConvertor from './modules/weightConverter';
import heronsFormula from './modules/heronsFormula';
import calculateTemp from './modules/temperatureCalc';
import pythagoras from './modules/pythagoras';
import speedCalculator from './modules/speedCalculator';
import volumeCalculator from './modules/volumeCalculatore';

window.addEventListener('DOMContentLoaded', () => {
    timeConverter();
    dayCalculator();
    weighConvertor();
    heronsFormula();
    calculateTemp();
    pythagoras();
    speedCalculator();
    volumeCalculator();
});