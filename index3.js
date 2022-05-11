/*if ( 100 > 50   條件  ) {

    // 條件成立時要做的事情
    console.log('確實成立')

} else {

    //條件不成立時要做的事情
    console.log('錯誤')

}

// ---------------------------------

if ( 100 < 50 ) {
    console.log('確實成立')
} else {
    console.log('錯誤')
}*/

// true or false
//  let condition = ! (true && false)
//  console.log('condition', condition)

//  let condition1 = ! (true && true)
//  console.log('condition1', condition1)
// let condition0 = 100 < 50
// console.log('condition0', condition0)

// console.log('');

// + - * / 算術運算子
// && || ! 邏輯運算子

// let condition1 = true || true
// console.log('condition1', condition1)

// let condition2 = true || false
// console.log('condition2', condition2)

// let condition3 = false || true
// console.log('condition3', condition3)

// let condition4 = false || false
// console.log('condition4', condition4)

// || 兩邊只要有true，結果就是true （由左往右看，如果左邊是true，就不看右邊）


// let scoreA = 100
// let scoreB = 99
// let condition1 = scoreA === scoreB
// console.log('condition1', condition1)

// let scoreC = 100
// let scoreD = 100
// let condition2 = scoreC === scoreD
// console.log('condition2', condition2)

// let score = 60

// if (score >= 100) {
//     console.log('好棒棒')
// } else if (score>70) {
//     console.log('再加油')
// }else if (score>60) {
//     console.log('下次小心點')
// } else {
//     console.log('去補修！')
// }


// Switch case

let key = 150

switch (key) {
    case 100:
        console.log('考了100分')
        break;

    case 200:
        console.log('考了200分')
        break;

    case 300:
        console.log('考了300分')
        break;

    default:
        console.log('沒去考試')
        break;
}