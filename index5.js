// //宣告
// function hello(){
//     console.log('你好')
// }

// function hello2(){
//     console.log('你好2')
// }

// function hello3(){
//     console.log('你好3')
// }

// //執行
// hello()
// hello2()
// hello3()


// function AddMoney(){
//     console.log( 100 + 200 - 100 )
// }

// // 購物車頁面
// AddMoney()

// //結帳頁面
// AddMoney()

// 有參數的function
// 接受兩個以上的參數
// function AddMoney( price1, price2, discount ){
//     console.log('price1', price1)
//     console.log('price2', price2)
//     console.log('discount', discount)
//     console.log( price1 + price2 - discount )
// }

// // 購物車頁面
// AddMoney( 2000, 100, 10)

// //結帳頁面
// AddMoney( 3000, 50, 10 )

// 有回傳值的function (return)
// function AddMoney( price1, price2, discount ){
//     let result = price1 + price2 - discount
//     return result
// }

// let total = AddMoney( 5000, 5000, 1000 )
// console.log('total', total)

// function AddMoney( price1, price2, discount ){
//     let result = price1 + price2 - discount
//     let message = '普通會員'

//     if ( result >= 50000 ){
//         message = '尊榮會員'
//         console.log(message)
//         return message
//     }

//     if ( result >= 20000 ){
//         message = '白金會員'
//         return message
//     }

//     return message

// }

// let message = AddMoney(50000, 21000, 1000)
// console.log('message', message)



// 構造函數
function createCard(initName){
    this.name = initName
}

const a1 = new createCard('小明1')
const a2 = new createCard('小明2')
const a3 = new createCard('小明3')
const a4 = new createCard('小明4')
const a5 = new createCard('小明5')

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
