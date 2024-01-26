// eventloop

// const a = () => { };
// const b = () => {
//     a();

//     syncReq();
// };


// const c = () => {
//     b();
// }

// c();

// console.log("1");

// setTimeout(function () {
//     console.log("timeout");
// }, 3000);

// console.log("2");

// console.log("3");


// setTimeout(function () {
//     console.log("timeout1");
// }, 0);

// console.log("1");

// setTimeout(function () {
//     console.log("timeout2");
// }, 2000);

// setTimeout(function () {
//     console.log("timeout3");
// }, 4000);

// console.log("2");

// console.log("3");

// t1, t2, t3



// -------------------------------

// function a() {
//     console.log("a");
// }

// function b() {
//     console.log("b");
// }

// function c() {
//     console.log("c");
// }

// a();

// new Promise(function (res, rej) {
//     console.log("create promise");
//     setTimeout(function timer() {
//         res(console.log("timeout"));
//     }, 5000);
// });

// b();
// c();



// -------------------------------

// setTimeout(() => {
//     console.log('1');
// }, 0);
// setTimeout(() => {
//     console.log('2');
// }, 1000);
// new Promise(function (res, rej) {
//     console.log('3');
//     res();
//     console.log('4');
// }).then(() => {
//     console.log('5');
// });
// console.log('6');
// async function test1() {
//     console.log('7');
//     await test2();
//     console.log('8');
// }
// async function test2() {
//     console.log('9');
// }
// test1();
// console.log('10');
// 3,4,6,7,9,10,5,8,1,2

const myPromise = (delay) => {
    return new Promise((res, rej) => {
        setTimeout(res, delay);
    });
};

setTimeout(() => {
    console.log("in setTimeout1 || 1");
}, 1000);

myPromise(1000).then(() => console.log("in Promise 1|| 2"));

setTimeout(() => {
    console.log("in setTimeout2 || 3");
}, 100);

myPromise(2000).then(() => console.log("in Promise 2|| 4"));