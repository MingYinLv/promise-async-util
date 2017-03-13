/**
 * Created by MingYin Lv on 2016/12/14.
 */

var util = require('./index');
// var last = util.createLast();
//
// [1, 2, 3].forEach(() => {
//   const time = Math.random() * 5000;
//   console.log(time);
//   last(new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve({
//         time,
//       })
//     }, time);
//   })).then(data => {
//     console.log(data);
//   });
// });


const request = util.throttle((id) => {
  console.log('请求参数：%s', id);
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(id);
    }, 1000);
  });
});

[2, 1, 3].forEach((n) => {
  request(n).then((data) => {
    console.log(data);
  }).catch((err) => {
    throw err;
  });
});

