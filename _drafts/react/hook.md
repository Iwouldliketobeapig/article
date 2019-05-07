### useState优点
  1. 给无状态函数组件添加状态
  2. 使用事不需要this.state
  3. 更新时候不需要this
  4. 单个组件可以使用多个useState

### 钩子规则
  1. 只能在顶层调用钩子。不要在循环，控制流和嵌套的函数中调用钩子
  2. 只能从React的函数式组件中调用钩子。不要在常规的JavaScript函数中调用钩子
```javascript
// ESLint插件eslint-plugin-react-hooks

// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```