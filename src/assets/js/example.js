


// for point 11. 

var a1 = [
  { a:1,b:'a',f:false },
  { a:2,b:'b'},
  { a:3,c:'c',f:0 },
  ]
  let allkeys = []
  a1.forEach((objInArr) => {
    allkeys = allkeys.concat(Object.keys(objInArr))
  }) 
  a1.forEach((objInArr, i) => {
    allkeys.forEach((key) => {
        if(key!=='c'){
      if (objInArr[key] === undefined) { 
        a1[i][key] = 'A'
          }
      }
    })
  })
  console.log(a1)



//   for 13 point.

let b1 = [{a:1, b:'a'}, {a:2, b:'b'}, {a:3, c:'c'}];
let b2 = b1.map(x =>{
    return Object.assign({}, x, { a: x.a+1 });
     
});

console.log(b2)