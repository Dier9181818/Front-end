// // 構造函數
// // function createCard(initName){
// //     this.name = initName
// // }

// class Card {
//     constructor(initName){
//         this.name = initName
//     }
// }

// const c1 = new Card('Jia Yu')
// console.log('c1', c1)
// console.log(c1.name)

// class Card {
//     constructor(initName){
//         this.name = initName
//         //this.hellooo = this.hello.bind(this)
//     }

//     hello = () => {
//         console.log('hello', this.name);
//     }
// }

// const c1 = new Card('Jia Yu')
// console.log('c1', c1)
// c1.hello()

// const a = { name: 'AA' }
// a.hellooooo = c1.hello  //在a中建立一個function，賦予c1當作變數
// a.hellooooo() //執行c1.hello的是a，此時的this指向const a = { name: 'AA' }中的name






// 繼承

class Car {
    constructor(initName) {
        this.name = initName
    }
    start () {
        console.log('車子啟動')
    }
}

class Porshe extends Car {
    constructor(namePorshe){
        super(namePorshe) // link to class(Car),有name 
    }

    start2 () {
        super.start()
        console.log('車子排氣')
    }

    start () {
        super.start()
        console.log('Porshe車子啟動')
    }

}

const p1 = new Porshe('我的保時捷')
p1.start()
console.log('name', p1.name);