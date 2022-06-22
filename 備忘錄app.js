const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

class RenderFeature{
    append() {

    }

    render () {
        let htmlStr = ''
    
        listContent.forEach(function(item) {
            htmlStr = htmlStr + ` 
            <div class="item"> 
                <div>
                <p>內容：${item.content}</p>   
                <p>時間：${item.date} ${item.time}</p>
                </div>
            </div> 
            `
        })
    
        list.innerHTML = htmlStr
    }
}

const r1 = new RenderFeature()

addedBtn.addEventListener('click', function() {
    listContent.unshift({  //執行一次物件，會在的陣列最後補上新的
        content: content.value,
        date: date.value,
        time: time.value
    })

    r1.render()

})

deletedBtn.addEventListener('click', function(){
    listContent.shift()

    r1.render()

})
