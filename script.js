'use strict'

const auto = {  }

auto.mark = 'Ford'
auto.model = 'JT100'
auto.year = 2011
auto.speed = '180_km_per_h'

auto.info = function(){
   console.log(auto)
}

auto.distanse = function(x){
    let time = 0;
    let timeRezult = 0;
    time = x / parseInt(auto.speed)

    while (time >= 4) {
        time = time - 4
        timeRezult = timeRezult + 5 
    }
    timeRezult =  timeRezult + time
    timeRezult = Math.floor(timeRezult * 100 ) / 100 
    console.log(timeRezult + ' Hours')
    return timeRezult 
}

auto.info()

console.log(auto.distanse(930)+ ' Hours' )



const square = {}

square.a = {x: 3, y: 4}
square.b = {x:-5, y:-3}

function sqrInfo(sqr){

console.log(sqr.a, sqr.b)
}

sqrInfo(square)


function sqrWidth(sqr){
    let wid = 0
    wid  = Math.abs(sqr.a.x) + Math.abs(sqr.b.x)
    return wid
}

console.log(sqrWidth(square))

function sqrHeight(sqr){
    let heig = 0
    heig =  Math.abs(sqr.a.y) + Math.abs(sqr.b.y)
    return heig
}

console.log(sqrHeight(square))


function sqrSqr(sqr){
    let sqre = 0
    sqre = (Math.abs(sqr.a.y) + Math.abs(sqr.b.y)) * (Math.abs(sqr.a.x) + Math.abs(sqr.b.x))
    return sqre
}


console.log(sqrSqr(square))


function sqrPerimetr(sqr){
    let sqrPer = 0 
    sqrPer = (Math.abs(sqr.a.x) + Math.abs(sqr.b.x) + Math.abs(sqr.a.y) + Math.abs(sqr.b.y))*2
    return sqrPer
}

console.log(sqrPerimetr(square))