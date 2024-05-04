// BMI Calculator
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var bodyWeight = 59; //59KG
var heightinMetres = 1.75; // 1.75 in metres
var BMI = (bodyWeight * heightinMetres);
console.log(__makeTemplateObject(["Your BMI is ", ""], ["Your BMI is ", ""]), BMI);
