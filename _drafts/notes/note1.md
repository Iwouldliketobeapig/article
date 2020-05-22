###### Object.freeze()：冻结对象，不可修改；且被直接复制的对象同样是冻结的；

### 跨域
#### 什么造成的跨域
跨端口、跨协议、跨域名和iframe造成的
* 跨端口和跨协议前端是无法处理的
* 浏览器只会关心域名，不会识别不同域名相同的地址解析
###### 一、通过设置domain来解决iframe与主框架之间的跨域
###### 二、通过location.hash来实现iframe与主框架之间的数据交换
###### 三、
###### 四、通过JSONP跨域只支持get请求，兼容性很强
###### 五、通过cors请求，主要是服务器进行设置
###### 六、window.name
###### 七、通过postMessage来解决跨域问题

### 浏览器安全问题
##### xss(cross-site scripting)： 跨站脚本攻击
###### 攻击方式 - 解决方案
1. 通过输入<script>代码</script>进行攻击,收集用户信息，修改页面，控制浏览器等等,因为<script>是没有跨域问题
  `解决方案`：前端对显示数据进行编码（目前主流前端框架都已经在底层实现）
##### ifram
###### 攻击方式 - 解决方案
1. 在嵌入地方iframe的时候，第三方可能为不信任的iframe嵌入，或者第三方域名过期，被攻击，在iframe中做一些影响页面的操作（弹窗、跳转等）
  `解决方案`：在iframe嵌入的时候设置限制条件，html5提供了sandbox属性，以及一些细化的设置来限制iframe的操作
2. iframe可能被其他页面嵌入，然后通过覆盖设置透明度做点击劫持
  `解决方案`：通过设置X-Frame-Options: Deny设置不予许在iframe
##### 错误的内容推断
###### 攻击方式 - 解决方案
1. 在有可以上传的文件中，上传的文件类型与实际类型不符且浏览器自识别为可执行的文件
  `解决方案`：服务器端在反应头里面设置X-Content-Type-Options：nosniff
##### 三方不安全包
###### 攻击方式 - 解决方案
1. 引用的三方包可能会有漏洞，或者带来安全问题，或者开发者给自己留了后门
  `解决方案`：使用自动检测NSP(Node Security Platform)，Snyk等等
##### 本地储存数据泄露
###### 攻击方式 - 解决方案
1. 本地cookie、sessionStorage、localStorage中储存数据可能被XSS攻击获取敏感数据
  `解决方案`：本地尽量不储存敏感数据，然后解决xss攻击
##### csrf攻击
1. 在用户不知情的情况下模拟用户操作
  `解决方案`：设置authzsionToken和判断请求来源
##### CDN安全问题
1. cdn服务器可能会被攻击资源被切换
  `解决方案`：给资源设置SRI值