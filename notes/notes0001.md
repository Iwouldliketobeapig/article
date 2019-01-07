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
2. /:{param}:  router params
3. Redirect: redirect router
4. Prompt: tip router
5. 