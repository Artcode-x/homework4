
// z 1
let m = 1;

let p = Number(2);

while (i <= p) {
    alert('Привет!');
    m++;
}

  //
//z 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


//z 3 

for (let i = 7; i <= 22; i++) {
    console.log(i);
}



//z 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (let key in obj) {
    alert(key + ' - зарплата ' +  obj[key] + '$');
    console.log (`${key} - зарплата ${obj[key]} долларов`)
}


 
//z 5
let n = 1000;
let i = 0;

for (; n > 50; i++) {
    n /= 2;
}

console.log(`Получилось число - ${n}. Количество итераций - ${i}`);




/*for (let n = 1000; n > 50; n++) {
    if ( n /= 2) {
     alert(n);}
     }
     */

    

// z6 
let firstFriday = 7;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
};

