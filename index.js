/**
 * Created by MingYin Lv on 2016/12/14.
 */


function Last() {
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

module.exports = Last;


