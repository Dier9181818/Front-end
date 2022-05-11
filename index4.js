
// // i++ -> i = i + 1
// // i+=2 -> i = i + 2

// for ( let i=0; i<10; i+=2){
//     console.log('i:', i)
// }

// console.log('')

// let classA = [100, 70, 59]
// for ( let i=0; i<3; i++){
//     console.log(classA[i])
// }


// const posts = [
//     {
//         name: 'Jia Yu 1',
//         desc: '貼文一'
//     },
//     {
//         name: 'Jia Yu 2',
//         desc: '貼文二'
//     }
// ]

// for ( let i=0; i<posts.length; i++){
//     if ( i===1 ){
//         let post = posts[i]
//         console.log(post)
//     }
// }


// while

let condition = true
let target = 10
let i = 0

while( condition ){
    if( i===target ){
        condition = false
    }
    console.log(i)
    i++
}