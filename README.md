# async-last

`var Last = require('./index');`  
`var last = new Last();`  
`[1, 2, 3].forEach(()=> {`  
`　　const time = Math.random() * 5000;`  
`　　console.log(time);`  
`　　last(new Promise(function (resolve) {`  
`　　　　setTimeout(function () {`  
`　　　　　　resolve({`  
`　　　　　　　time,`  
`　　　　　　})`  
`　　　　}, time);`  
`　　})).then(data => {`  
`　　　　console.log(data);`  
`　　});`  
`});`  

result: 4000ms
