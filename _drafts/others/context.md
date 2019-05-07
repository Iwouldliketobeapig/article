
# React Context
`绝大多数应用程序不需要使用 context.如果你想让你的应用更稳定，别使用context。因为这是一个实验性的API，在未来的React版本中可能会被更改。`

## 如何使用
1. 安装并引入prop-types
2. 父组件中设置getChildContext()
```javascript
class A extends React.Component {
  getClildContext () {
    return {
      info: 'test'
      /** some code */
    }
  }
}
```
3. 父子组件设置childContextTypes
```javascript
import PropTypes from 'prop-types';

A.childContextTypes = {
  info: PropTypes.string
}
```
4. 子组件定义contextTypes获取context中获取并定义变量类型
```javascript
B.contextTypes = {
  info: PropTypes.string
}
```
5. 子组件获取context变量
```javascript
class B extends React.Component {
  render () {
    return <div>{this.context.info}</div>
  }
}
```
### 完整demo
```javascript
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class A extends React.Component {
  getClildContext () {
    return {
      info: 'test'
      /** some code */
    }
  }

  render () {
    return <B />
  }
}
A.childContextTypes = {
  info: PropTypes.string
}

class B extends React.Component {
  render () {
    return <div>{this.context.info}</div>
  }
}
B.contextTypes = {
  info: PropTypes.string
}
```

## 使用要点
1. 如果一个组件中定义了contextTypes,在下面的生命周期会获得额外的参数
```javascript
constructor(props, context);
componentWillReceiveProps(nextProps, nextContext);
shouldComponentUpdate(nextProps, nextState, nextContext);
componentWillDidUpdate(nextProps, nextState, nextContext);
componentDidUpdate(prevProps, PrevState, prevContext);
```
2. 无状态下引用context
```javascript
import PropTypes from 'prop-types'

const C = ({ children }, context) => {
  return (
    <h2>{context.info}</h2>
  )
}

C.contextTypes = {
  info: PropTypes.string
}
```
3. 千万不要更新context，可以通过与state绑定更新context，有风险的如果中间父组件通过shouldComponentUpdate返回false,那么接下来的组件中的context是不会更新得。
```javascript
class A extends React.PureComponent {
  constructor () {
    super();
    this.state = {
      info: 'test'
    }
  }

  getChildContext () {
    return {
      info: this.state.info
    }
  }
}
```
4. PureComponent检测不到context的改变

[这是一个完整的demo](https://codesandbox.io/s/wnj19x0ypw)