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
import ibmCalculator from './modules/ibmCalculator';
import lengthConverter from './modules/lengthConverter';
import powerCalculator from './modules/powerCalculator';
import stepsToMiles from './modules/steps-to-miles';
import hourSalaryCalculator from './modules/hourSalaryCalculator';
import percentCalculator from './modules/percentCalculator';
import feetToMiles from './modules/feetToMiles';
import lbsToKg from './modules/lbsToKg';
import mlToGrams from './modules/mlToGrams';
import ouncesToKilograms from './modules/ouncesToKilograms';
import cupsToOunces from './modules/cupsToOunces';

window.addEventListener('DOMContentLoaded', () => {
    timeConverter();
    dayCalculator();
    weighConvertor();
    heronsFormula();
    calculateTemp();
    pythagoras();
    speedCalculator();
    volumeCalculator();
    ibmCalculator();
    lengthConverter();
    powerCalculator();
    stepsToMiles();
    hourSalaryCalculator();
    percentCalculator();
    feetToMiles();
    lbsToKg();
    mlToGrams();
    ouncesToKilograms();
    cupsToOunces();
});