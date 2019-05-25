## 缓存位置
### 四个缓存位置
* Sevicer worker：传输协议必须是https；自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。
* Memory cache：读取效率高，可持续性短，随着进程的释放而释放；
* Disk cache：时效性高；
* Push cache: 自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的；

## 强缓存
* 不会向服务器发送请求，直接从缓存中读取资源，状态码为200;显示from disk cache或from memory cache。可以通过设置Expirse和Cache-Control实现
* 不关心服务器是否已经改变
### Expirse
* 缓存过期时间，用来指定资源到期时间，是服务端的具体时间节点
* 告诉浏览器在过期时间前可以直接从缓存中读取数据，无需再次请求
* 修改本地时间可能照成缓存失效
* 现阶段是一种向上兼容的写法
### cache-Control
1. 可以在请求头或响应头中设置
2. 具体参数规则
  * public: 表示响应可以被客服端和代理服务端缓存
  * private: 表示响应只可以被客户端缓存
  * max-age=: 缓存过期时间，单位是秒
  * s-maxage: 覆盖max-age,作用一样，只在代理服务器中生效
  * no-store: 不缓存任何响应
  * no-cache: 资源被缓存，但是立即失效，下次发送请求验证资源是否过期
  * max-stale=: 指定时间内，即使缓存过期，也使用缓存，单位为秒
  * min-fresh=: 指定时间内获取最新的响应，单位为秒
3. 与Expirse同事存在优先级高于Exprise
## 协商缓存
* 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发送请求，由服务器根据标识决定是否使用缓存的过程。
* 协商缓存通过header中的Last-Modify和Etag设置
### 两种情况
1. 协商缓存生效，返回304和not Modify
2. 协商缓存失效，返回200和请求结果
### Last-Modify和If-Motified-Since
* 请求返回存储Last-Modify并储存Last-Modiy,下一次请求如果有Last-Modify则在请求header中的If-Modified-Since中携带该值，与服务器做对比
#### 弊端
* 如果打开本地缓存，即使没有对文件进行改变，会照成Last-Modify改变，服务器端不能命中缓存导致发送相同资源
* 只能以秒作为计算，如果
### Etag和if-None-Match
Etag是服务在响应请求时，返回的唯一标识。本地储存后，在请求时携带Etag的值在header中的if-None-Match中，如果不同才返回200和返回新的文件
### Etag和Last-Modify对比
* Etag的精准度更高
* Last-Modify的效率更高
* Etag的优先级更高
## 缓存机制
* 强制缓存的优先级高于协商缓存
## 实际场景运用缓存策略
1. 频繁变动的资源
```javascript
cache-control: no-cache
```
使用协商缓存，虽然不能减少http请求，但是能够降低响应数据的大小
2. 不常变动的资源
```javascript
cache-control: max-age=31536000
```
给一个相对大的值，这样就能直接从缓存中获取资源，降低请求数和资源。但是为了能够知道服务器资源已经改变，需要在资源上加标识如：哈希值，版本号等；
## 用户行为对浏览器缓存的影响
* 打开网页进行disk cache匹配
* 普通刷新优先使用memory cache然后再是disk memory
* 强制刷新：浏览器不使用缓存