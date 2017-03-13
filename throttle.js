/**
 * Created by MingYin Lv on 2017/3/12 下午3:09.
 */


/**
 * 常规的throttle要设置节流时间，这个方法在第一次调用返回之前，之后的调用都忽略
 * @param func 传入一个函数，该函数返回值要求是promise
 * @returns function
 */
function throttle(func) {
  var requesting = false;
  return function () {
    var args = Array.prototype.slice.call(arguments);
    return new Promise(function (resolve, reject) {
      if (!requesting) {
        requesting = true;
        func.apply(null, args)
          .then(function (data) {
            requesting = false;
            resolve(data);
          })
          .catch(function (err) {
            requesting = false;
            reject(err);
          });
      }
    });
  }
}

module.exports = throttle;


