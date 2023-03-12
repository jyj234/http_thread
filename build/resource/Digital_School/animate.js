import {Clock} from './js/three.module.js'
import {stats} from './stats.js'
import {render} from './render.js'

// 创建一个时钟对象Clock
var clock = new Clock();
// 设置渲染频率为30FBS，也就是每秒调用渲染器render方法大约30次
var FPS = 5;
var renderT = 1 / FPS; //单位秒  间隔多长时间渲染渲染一次
// 声明一个变量表示render()函数被多次调用累积时间
// 如果执行一次renderer.render，timeS重新置0
var timeS = 0;
export function animate() {
  requestAnimationFrame(animate);
  //.getDelta()方法获得两帧的时间间隔
  //var T = clock.getDelta();
  //timeS = timeS + T;
  // requestAnimationFrame默认调用render函数60次，通过时间判断，降低renderer.render执行频率
  //if (timeS > renderT) {
    stats.begin();
    render();
    //renderer.render每执行一次，timeS置0
  //  timeS = 0;
    stats.end();
  //}
}