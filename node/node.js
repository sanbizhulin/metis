/**
 * Created by sunmy on 16/4/12.
 */

/**
 * 单线程
 * 非阻塞 I/O (异步 I/O)
 * 事件驱动
 *
 * 全局对象(全局变量宿主) global
 * 全局变量(全局对象属性)
 *     process 描述进程状态
 *     console
 **/






/* 核心模块 */

/** util **/

/* util.inherits(constructor, superConstructor) */
//var util = require('util');
//// 基础对象
//function Parent (pro1, pro2) {
//    this.pro1 = pro1;
//    this.pro2 = pro2;
//    this.fun1 = function () {
//        console.log('hello world');
//    }
//}
//Parent.prototype.fun2 = function () {
//    console.log('HELLO WORLD');
//};
//// 继承对象
//function Children (pro) {
//    this.pro = pro;
//}
//// Children 仅继承了 Parent 的原型方法及属性
//util.inherits(Children, Parent);


/* util.inspect(object, [showHidden], [depth], [colors]) */
//var util = require('util');
//// 构造 Person 对象
//function Person () {
//    this.name = 'sunmy';
//    this.age = '23';
//}
//// person 对象 -> 字符串
//var person = new Person();
//util.inspect(person, true, 2, true);



/** events **/

/* events.EventEmitter() */
//var events = require('events');
//var emitter = new events.EventEmitter();
//// 注册事件监听器
//emitter.on('event', function (name) {
//    console.log('listener 1', 'name|' + name);
//});
//emitter.on('event', function (name) {
//    console.log('listener 2', 'name|' + name);
//});
//// 事件发射
//emitter.emit('event', 'sunmy');



/** fs **/

/* fs.readFile(filename, [encoding], [callback(err,data)]) */
//var fs = require('fs');
//fs.readFile('content', 'utf-8', function(err, data) {
//    if (err) {
//        console.error(err);
//    } else {
//        console.log(data);
//    }
//});


/* fs.open(path, flags, [mode], [callback(err, fd)]) */
/* fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)]) */
