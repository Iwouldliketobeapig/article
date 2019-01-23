1. AST(抽象语法树)
2. 词法分析(lexical analysis)：将字符序列转化为标记序列的过程
3. 语法分析(syntactic analysis): 根据给定的某种形式文法对给定的单词序列对构成的输入文本进行分析并确定其语法结构的过程
4. 程序执行之前经历三个步骤：词法分析 -> 语法分析 -> 代码生成
5. * LHS: 赋值操作的目标是谁(LHS)
   * RHS: 谁是赋值操作的源头(RHS)
6. 遍历嵌套作用域的过程：引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都 会停止。
7. React
  * Switch: 渲染与该地址匹配的第一个子节点<Route>或者<Redirect>
  * exact: 如果为true,则只有在路径完全匹配loaction.pathname时才匹配
8. 非覆盖式发布           --> study
9. Service Worker       --> study
10. 前端攻击
  * xss -> html编码 标签过滤 **he**
  * ifiame  -> sandbox
    * allow-forms: 允许嵌入的浏览上下文可以提交表单
    * allow-modals: 允许内嵌浏览环境打开模态窗口
    * allow-orientation-lock: 允许内嵌浏览环境禁用屏幕朝向锁定
    * allow-pointer-lock: 允许内嵌环境使用Pointer Lock Api
    * allow-popus: 允许弹窗
    * allow-popus-to-escape-sandbox: 允许沙箱打开新窗口，并且不强制要求系窗口设置沙箱标记
    * allow-persentation: 允许嵌入者控制是否iframe启用一个展示会话
    * allow-scripts: 允许嵌入的浏览上下文运行脚本
    * allow-top-navigation: 嵌入的页面的上下文可以导航
  * 点击攻击  -> x-Frame-Option(服务器配置)
    * DENY: 表示该页面不允许在frame中展示
    * SAMEORIGIN: 表示该页面可以在相同域名页面的frame中显示
    * ALLOW-FROM uri: 表示该页面可以在指定来源frame中显示
  * 错误的内容推断 -> X-Content-Type-Options
    * 禁用客户端MIME类型嗅探行为
  * 不安全的三方依赖包 -> nsp
  * https陷阱 -> Strict-Transport-Security: max-age=<seconds>; includeSubDomains; preload
  * 本地储存数据泄露 -> 本地不储存明干数据
  * 静态资源完整性校验 -> 浏览器提供的SRI（Subresource Integrity）功能
* 写一篇关于运算符的文章

## react-router
### examples
1. component class
2. /:{param}:  基本路由传参
3. Redirect: 重定向路由
4. Prompt: 提示路由
5. no match: <Router componet={NotMatch} /> 当路由未匹配时，将会匹配NotMatch;
6. recursive paths: 递归路径（暂时没有想到应用场景）
7. Sidebar:  侧边栏模式
8. Animated Transitions: 路由动画切换，引入react-transition-group
9. ambiguous matches: 暧昧的匹配，在<Switch>中的<Route>会匹配第一个匹配的路由
10. Route config: 路由数组配置
11. StaticRouter context

### guides
1. Philosophy: 动态路由、路由嵌套、响应式路线
2. Basic Component: 
  ```javascript
  <BrowserRouter /> // 用于响应服务器请求
  <HashRouter /> // 静态文件的服务器
  <Route /> // 匹配patchname,不匹配渲染null
  <Switch /> // 将分组<Router>,只匹配第一个<Router>,当没有匹配的时候可以匹配到没有pathname上
  <Link /> // react router 提供的a
  <NavLinke /> // 活跃link
  <Redirect /> // 重定向路由
  ```
3. Server Rendering
  ```javascript
  <StaticRouter
    content={content} // 静态服务器中，无法更改app的状态，通过判断content.url来判断是否重定向
  /> // 无状态
  ```
4. Code Splitting: 结合webpack的import和require.ensure()
5. Testing: 单测
6. Redux Integration: connect()、withRouter()
7. Static Router: React Router Config
8. React integration: React Router Redux

### Api
* <BrowserRouter>: 使用html5历史api纪律
  * basename: 所有地址的基本网址
  * getUserConfirmation: 确认导航功能,默认使用window.confirm
  * forceRefresh: 如果为true,在页面导航中会整夜刷新
  * keyLenght: number, loctaion.key的长度
  * children: node, 一个用于渲染的 single child element
* <HashRouter>: 使用URL的hash部分
  * basename: 所有地址的基本网址
  * getUserConfirmation: 确认导航功能,默认使用window.confirm
  * hashType: string, 用于window.location.hash编码类型
  * children: node, 一个用于渲染的 single child element
* <Link>: 可访问导航
  * to: string, 导航路径
  * to: Object
    * pathname: 导航路径
    * search: 查询字符串形式
    * hash: 放入网址的hash
    * state: 状态持续的location
  * repleace: 如果为 true，则单击链接将替换历史堆栈中的当前入口，而不是添加新入口
  * innnerRef: 允许访问ref底层
  * others: html标签属性等
* <NavLink>: 当与当前url匹配时，为起添加样式
  * activeClassName: 当匹配添加的css类
  * activeStyle: 当匹配时添加的style
  * exact: 路由完全匹配时才添加class、style
  * static: pathname的末尾的/要考虑在其中
  * isActive: 除去路由匹配外还可以自己添加一些判读
  * location: object
* 