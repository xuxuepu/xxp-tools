/**
 * @name 共用方法
 * @author epo
 * @description 封装常用的共用方法，实现高效重复调用。
 * create 2017-12-14
 */
export default {
  /**
   * 获取SessionStorage
   * @param {*name} name
   */
  getSessionStorage(name) {
    let resData = sessionStorage.getItem(name);
    let data = {};
    resData && (data = JSON.parse(resData));
    return data;
  },
  /**
   * 写入SessionStorage
   * @param {*name} name
   * @param {*data} data
   */
  setSessionStorage(name, data) {
    sessionStorage.setItem(name, JSON.stringify(data));
  },
  /**
   * 获取LocalStorage
   * @param {*name} name
   */
  getLocalStorage(name) {
    let resData = localStorage.getItem(name);
    let data = {};
    resData && (data = JSON.parse(resData));
    return data;
  },
  /**
   * 写入LocalStorage
   * @param {*name} name
   * @param {*data} data
   */
  setLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  },
  /**
   * 删除LocalStorage
   * @param {*name} name
   */
  removeLocalStorage(name) {
    localStorage.removeItem(name);
  },
  //判断是否全屏
  isFullScreen(){
    if(document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement){
      return true;
    }
    return false;
  },
  /**
   * 开始全屏
   */
  openFullScreen() {
    var docElm = document.documentElement;
    //W3C
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
    //FireFox
    else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
    //Chrome等
    else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    }
    //IE11
    else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  },
  /**
   * 结束全屏
   */
  closeFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  },
  /**
   *  页面元素滚动
   * @param element 滚动元素容器
   * @param to 滚动距离
   * @param duration 动画持续时间
   */
  scrollTo(element, to, duration) {
    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    let animateScroll = function(){
      currentTime += increment;
      element.scrollTop = Math.easeInOutQuad(currentTime, start, change, duration);
      if(currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  },
};

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};
