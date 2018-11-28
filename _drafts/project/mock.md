---
title: Mock
tag: 
  - node
  - mock.js
categories:
  - 前端
---
![](/imgs/project/mock/theme.jpg)

## 目前项目中的mock分析
### 使用
1. api中调用ajax方法时第二个参数传入true启用mock数据

**列：**
```javascript
let data: Response<IData> = await this.callAjax(req, true);
```
[gitlab查看相应代码](http://gitlab.kingxunlian.com/dutao/kts-platform/blob/0f0aa285ae957e6415acd35b889e790dcac235bd/src/api/systemManage/companyInfo/countryInfo/index.ts#L18)
2. 在__dirname/config/mock/data中添加数据文件及定义返回数据

**列：**
```javascript
module.exports = {
	"body":[
		{
			"code":"CHN",
			"name":"中国"
		},
		{
			"code":"AFG",
			"name":"阿富汗"
		}
	],
	"ok":true,
	"status":{
	"description":null,
	"message":null,
	"path":null,
	"returnCode":"200",
	"serviceCode":null,
	"time":null
	}
}
```
[gitlab查看相应代码](http://gitlab.kingxunlian.com/dutao/kts-platform/blob/mockTest/config/mock/data/countryInfo.js)
3. 在__dirname/config/mock/index.js中添加key-value值

**列：**
```javascript
/**
* key: 请求路径，value: 返回数据
*/
module.exports = JSON.stringify({
  "/global/auth/web-token/login":{},
  "/zone/grouplist":require("./data/groupdata"),
  "/zone/invoicelist":require("./data/invoicedata"),
  "/zone/network/connection/query":require("./data/networkmylist"),
  "/zone/network/connection/query-waiting":require("./data/networkwaitingjoin"),
  "/zone/network/connection/company-info":require("./data/companyinfo"), 
  "/zone/company/country/info": require("./data/countryInfo"),
});
```
[在gitlab上查看相应代码](http://gitlab.kingxunlian.com/dutao/kts-platform/blob/mockTest/config/mock/index.js#L8)
### 实现原理
- 向服务器发送请求时通过参数判断是否使用mock数据，满足条件则从`window['$$_kxl_mock']`中获取数据

```javascript
/**
* 向服务器发送一个请求
* @param request 一个请求
* @param domain 请求地址头
* @param mock 是否用mock数据
*/
public call = (request: Request, domain: string, mock: boolean): Promise<Response<IResponse>> => {
	return new Promise((resolve: (value: Response<IResponse>) => void) => {

		this.requestProcessing(request);

		const superagentCallback = (er: any, res: IResponse) => {
			const info: Response<IResponse> = new Response(er, res); // 返回数据
			this.runCallback(info, request.callback, resolve); // 调用回掉
		};

		if (mock && window['$$_kxl_mock'] && window['$$_kxl_mock'][request.uri]) {
			setTimeout(
				() => {
					console.info('[mock][' + request.uri + ']', window['$$_kxl_mock'][request.uri]);
					const res = {
						body: JSON.parse(JSON.stringify(window['$$_kxl_mock'][request.uri])),
						ok: true
					};
					superagentCallback(null, res as IResponse);
				}, 100);
		} else {

			Superagent.call(request.type, domain + request.uri, superagentCallback, request.params, request.options);
		}
	});
}
```
[gitlab查看相应代码](http://gitlab.kingxunlian.com/front-end/basic/kts-scaffold-framework/blob/master/src/server/Agent/index.ts#L26)

- 向window中添加数据，利用html-webpack-plugin

`webpack插件plugins中配置html-webpack-plugin`
```javascript
config.plugins[1] = new HtmlWebpackPlugin({
		inject: true,
		template: paths.appHtml,
		config: JSON.stringify(configData),
		env: require('../config/env_config'),
		mock: require('../config/mock'),
		version: new Date().getTime(),
		compileTime: new Date().toString(),
	})
```
[gitlab查看相应代码](http://gitlab.kingxunlian.com/dutao/kts-platform/blob/dev/scripts/start.js#L61)

`在html模板中添加window.$$_kxl_mock`
```javascript
<script type="text/javascript">window.$$_kxl_mock = <%= htmlWebpackPlugin.options.mock %>;</script>
```
[gitlab查看相应代码](http://gitlab.kingxunlian.com/dutao/kts-platform/blob/mockTest/public/index.html#L13)
[友情链接：html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

## 扩展 -- Mock.js
**为什么使用Mock.js**
* 前后端分离：让前端攻城师独立于后端进行开发；
* 增加单元测试的真实性：通过随机数据，模拟各种场景；
* 开发无侵入：不需要修改既有代码，就可以拦截 Ajax 请求，返回模拟的响应数据；
* 用法简单：符合直觉的接口；
* 数据类型丰富：支持生成随机的文本、数字、布尔值、日期、邮箱、链接、图片、颜色等；
* 方便扩展：支持支持扩展更多数据类型，支持自定义函数和正则；

### 步奏

1. 安装mockjss

```bash
npm i --D mockjs
```
2. 我在项目中创建了个mock，定义了个[test](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/mock/user/test.js)

```javascript
const Mock = require('mockjs')
Mock.mock('/test', 'get',
  {
    'userList|1-10': [
      {
        'id|1-10': 2
      }
    ]
  }
)
```
3. 在src下的App.vue中[引入](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/src/main.js#L8)(通过添加环境变量引入，可以快速切换)

```javascript
import '../mock'
```
4. [HelloWord.vue](https://github.com/Iwouldliketobeapig/vue-app-optimization/blob/master/src/components/HelloWorld.vue#L115)中测试

```javascript
axios.get('/test')
  .then(res => {
    console.log(res)
  })
```
[查看mockjs详情](http://mockjs.com/)

