
// TASKS


// #1    Вывести строку данных от 1 до 50 с помощью цикла

//  ПЕРВЫЙ СПОСОБ:
// let i = 0;
// while (i < 50) {
//     ++i
//     console.log(i);
//     if (i >= 49) {
//         break
//         }
// }

//  ВТОРОЙ СПОСОБ:
// let i = 0;
// do {
//     console.log(++i);
// } while(i < 50)


 // ???? ТРЕТИЙ СПОСОБ: почему с 0 начинается, если ++i ?????? 

for (let i = 0; i < 50; ++i) {
    console.log(i);
}   


//alert("new task 2");



// #2    Вывести числа от 50 до 25 с помощью цикла

//  ПЕРВЫЙ СПОСОБ:
// let i = 50;
// while (i > 25) {

//     console.log(i);
//     i--;
// }

//  ВТОРОЙ СПОСОБ:
// let i = 50;
// do {
//     console.log(i--);
// } while(i > 25)


//  ТРЕТИЙ СПОСОБ: 
// for (let i = 50; i > 25; --i) {
//     console.log(i);
// }   


//alert("new task 3");


// #3    Вывести все нечетные числа от 2500 до 3000 с помощью цикла

//  ПЕРВЫЙ СПОСОБ:
// let n = 2500;
// while (n < 3000) {
//     n++;
// if ( n%2 == 0 ) continue;
//     console.log(n);

// }

//  ВТОРОЙ СПОСОБ:
// let i = 2500;
// do { 
//     i++;
//     if (i % 2 == 0) continue;
//     console.log(i);
// } while(i < 3000)


//  ТРЕТИЙ СПОСОБ:
// for (let i = 2500; i < 3000; i++) {
//     if (i % 2 == 0 ) continue;
//     console.log(i);
// }   
