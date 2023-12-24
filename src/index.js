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
import teaspoonsToGrams from './modules/teaspoonsToGrams';
import mmToInches from './modules/mmToInches';
import randomNumber from './modules/randomNumber';
import marginCalculator from './modules/marginCalculator';
import areaOfCircle from './modules/areaOfCircle';
import moneyCounter from './modules/moneyCounter';
import factoring from './modules/factoring';
import ratioSimplifier from './modules/ratioSimplifier';
import triangleCalculator from './modules/triangleCalculator';
import milToMic from './modules/milToMic';
import cylindreVolume from './modules/cylinderVolume';

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
    teaspoonsToGrams();
    mmToInches();
    randomNumber();
    marginCalculator();
    areaOfCircle();
    moneyCounter();
    factoring();
    ratioSimplifier();
    triangleCalculator();
    milToMic();
    cylindreVolume();
});