# 腾讯一面
## 网络协议分为哪几层
1. 物理层：物理层的任务是透明地传送比特流
2. 数据链路层：主要任务是负责在两个相邻结点之间的线路上无差错地传输以帧为单位的数据
3. 网络层：网络层的主要任务是为网络上的不同主机提供通信
4. 传输层：是通信子网和资源子网的接口和桥梁，起到了承上启下的作用
5. 会话层：组织和协调两个会话进程之间的通信，并对数据交换进行管理
6. 表示层：协商和建立数据交换的格式，解决各应用程序之间在数据格式表示上的差异
7. 应用层：用户应用程序和网络之间的接口，完成用户希望在网络上完成的各种工作
## udp协议和tcp协议的区别
TCP/IP是面向连接的，UDP是无连接的。
## 网络三次握手
1. 第一次握手：建立连接时，客户端发送syn包(syn=j)到服务器，并进入SYN_SEND状态，等待服务器确认；
2. 第二次握手：服务器收到syn包，必须确认客户的syn（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
3. 第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。
## 简述http协议
1. http是无连接：每次连接只处理一个请求，服务器处理完请求后，并收到客户端的应答后，即断开连接；
2. http媒体是独立的：只要客户端和服务器端知道如何处理数据类型，任何数据都可以用http传送；
3. http无状态：无状态是指协议对于事物处理没得记忆能力；
## 知道哪些状态码
1. [http协议前端常识](https://segmentfault.com/a/1190000014100927)
## 301和302的区别
301是永久重定向，302是临时重定向
## css水平居中
1. flex布局设置flex-direction: row, 然后justify-content: center;
2. flex布局设置flex-direction: column, 然后align-items: center;
3. 知道子元素宽度，用margin: 0 auto;
4. 知道子元素宽度，position: absoulte; margin-right: -(子元素的宽度);
5. 利用transform
## flex布局
[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
## js闭包
闭包就是能够读取其他函数内部变量的函数
## 构造函数中写return会怎么样
可以直接调用并获取返回值
```javascript
function A (a, b) {
  this.a = a;
  this.b = b;
  return this.a + this.b;
}
A(1, 2) // 3
const a = new A(1, 2); // A {a: 1, b: 2}
```
## 怎么手写一个ajax请求
1. 不考虑兼容ie低版本，新建一个XMLHttpRequest实例
```javascript
const xhr = new XMLHTTPRequest();
```
2. 调用open启动一个请求，已备发送
```javascript
// open接受三个参数，（请求方法，请求地址，是否异步）
xhr.open('get', 'example.com', false); // 同步请求会阻断js执行
```
3. 发送请求
```javascript
xhr.send(null); // send接收一个参数，参数为要发送的数据，如果不传就必须为null
```
#### 建一个请求到发送的的完整案列
```javascript
const xhr = new XMLHTTPRequest();
xhr.open('get', 'example.com', false);
xhr.send(null);
console.log(xhr);
```
## visiblety: false和display: none的区别
1. `visibility: hidden`: 元素不显示但是要占用空间
2. `display: none`: 元素不显示且不占用空间