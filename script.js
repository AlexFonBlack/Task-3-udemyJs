'use strict';

let money, time;

function start () {
    money = +prompt ('Ваш бюджет за месяц?');
    time = prompt ('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ('Ваш бюджет за месяц?');
    }
}
start();
    
let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

console.log(appDate);

function chooseOptExpenses() {
    for (let i =1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appDate.optionalExpenses[i] = questionOptExpenses;
                
    }
}
chooseOptExpenses();

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt ('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt ('Во сколько обойдётся?', '');
        if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length <50) {
            console.log('Done');
            appDate.expenses[a] = b;
        } else {
            console.log('не верное заполнение');
            i--;   
        }
        
    }
}
chooseExpenses();

function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / 30).toFixed();

    alert ("Ежедневный бюджет: " + appDate.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
    if(appDate.moneyPerDay < 100){
        console.log("минимальный уровень достатка")
    } else if (appDate.moneyPerDay> 100 && appDate.moneyPerDay<2000){
        console.log("средний уровень достатка");
    } else if (appDate.moneyPerDay>2000){
        console.log("высокий уровень достатка")
    } else {
        console.log("произошла ошибка")
    }
}
detectLevel();

function checkSavings() {
    if (appDate.savings == true) {
        let save = +prompt("Какова сумма накопления?"),
            percent = +prompt("Под какой процент?");
        
        appDate.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозите: " + appDate.monthIncome);
    }
}

checkSavings();



//ФУНКЦИИ
/*let calc = function (a, b){ // экспешон
    return (a + b);
};

console.log (calc(2, 4));

function retVar () {  //деклорейшон
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log (anotherNum);*/

//let calc = (a, b) => a+b//стрелочная функуция

//console.log (calc(4, 7));

//................................

//# МЕТОДЫ У СТРОК И ЧИСЕЛ!

/*let str = "test";
console.log(str.length); //длина строки


console.log(str.toUpperCase()); // перевод в верхний регистор
console.log(str.toLowerCase()); // перевод в нижний регистор

let twelve = "12.4";

console.log(Math.round(twelve)); // округление до целого числа

let two = "2.5597px";

console.log(parseInt(two)); // перевод значение в целое число. результат 2
console.log(parseFloat(two)); // перевод значение в ->
                              //->число с плавоющей точкой результат 2
*/