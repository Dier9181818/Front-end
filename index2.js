let classA = ['小明', '小白', '小黃']
console.log('轉學前：', classA)

classA.push('小黑')
console.log('轉學後：', classA)

let igPhotos = [
'https://xx.img.com/a1.png',
'https://xx.img.com/a2.png',
'https://xx.img.com/a3.png',
]
console.log('igPhotos', igPhotos)

console.log(classA.length)
console.log('igPhotos', igPhotos.length)

console.log('第一筆', igPhotos[0])
console.log('第二筆', igPhotos[1])
console.log('第三筆', igPhotos[2])



// -----------------------------------------

const post = {
    image: 'https://xx.img.com/a1.png',
    desc: '這是一張照片',
    date: '2022/1/11',
    comment: ['好漂亮', '我也要去', '哇哇哇']
}

const post2 = {
    image: 'https://xx.img.com/a2.png',
    desc: '這是一張照片',
    date: '2022/1/12',
    comment: ['好醜', '我不要去', '嗚嗚嗚嗚']
}

const wall = [
    post,
    post2
]

console.log('wall', wall)

console.log('第一則留言：', post.comment[0]) //post的第一則留言