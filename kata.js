let x = "a a a  b  c c  d d d d  e e e e e"
let top3 = []
let temp = 0

second = (text, i, temp, t, j) => {
    let r = text.split(' ').filter(word => word == text[i])
    if (r.length > temp) {
        temp = r.length
        return t[j] = r [0]
       
    }else {
    }
} 

mayor = (j ) => {
    for (let i =0; i < x.length; i++) {
        second(x, i, temp, top3, j)
    }
    
}

for (let j = 0; j < 3; j++ ) {
    mayor(j)
}

console.log(top3)




