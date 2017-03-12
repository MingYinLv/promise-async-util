/**
 * Created by MingYin Lv on 2017/3/11 下午7:06.
 */


/**
 * @description 当请求a和请求b的响应修改了同一个地方，先发请求a再发请求b，a因为网络原因比b后响应，会导致结果错误，使用这个方法可以解决。
 */
function createLast() {
  var lastPromise = null;
  /**
   * @return Promise
   */
  return (promise) => {
    lastPromise = promise;
    return new Promise((resolve) => {
      promise.then((data) => {
        if (lastPromise === promise) {
          resolve(data);
        }
      });
    });
  }
}

module.exports = createLast;
