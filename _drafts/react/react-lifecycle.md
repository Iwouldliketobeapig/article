---
title: react生命周期(react lifecycle)
date: 2018-08-20
tag: 
  - react
categories:
  - 前端
---
![](/imgs/react/theme/life.jpg)

# React生命周期
![react生命周期](/imgs/react/lifecycle/lifecycle.jpg)

## 生命周期
### Mounting
在创建组件的实例并将其插入DOM时，将按以下顺序调用这些方法
* contructor()
* static getDerivedStateFromProps()
* render()
* componentDidMount()

### Updating
props或state的更改可能导致更新。 重新呈现组件时，将按以下顺序调用这些方法
* static getDerivedStateFromProps()
* shouldComponentUpdate()
* render()
* getSnapShotBeforeUpdate()
* componentDidMount()

### Unmounting
从DOM中移除组件时调用此方法
* componentWillDidMount()

### Error Handing
在渲染期间，生命周期方法或任何子组件的构造函数中发生错误时，将调用此方法
* componentDidCatch()

## 生命周期方法
### constructor()
  1. 初始化state
  2. 将事件方法绑定到示例

###### 提示
  1. 组件被mounted前被调用
  2. super(props)应该在statement之前
  3. 在constructor中使用this.props是undefined
  4. 不能使用setState

### static getDerivedStateFromProps(props, state)
  1. 返回一个object来更新state，或者返回null不做任何更新

###### 提示
  1. 在render前被调用
  2. 此组件无权访问组件实例
  3. 每个渲染都会触发此方法

### render()
  1. 组件类中唯一必须的方法
  2. 当被调用时会去检查this.state和this.props
  3. 尽量保证render的纯洁（>_<）

###### 返回值必须是以下几种：
  1. React元素
  2. 数组和片段
  3. Portals
  4. 字符串或者数字
  5. 布尔值或者null

### componentDidMount()
  1. 组件被安装后立即被调用
  2. 需要DOM节点的初始化应该放在这里。

###### 提示
  1. 加载数据最好放在这点
  2. 是设置订阅的好地方（应该在componentWillUnMount中接触订阅）
  3. 可以使用this.setState,会照成两次render(),会有一定的性能影响，但有时候是必须的

### componentWillUnMount()
  在组件卸载和销毁之前被调用。用来处理清理工作，如解除绑定，取消网络请求，清理Dom,解除绑定器等。

### shouldComponentUpdate()
  使用shouldComponentUpdate，确认组件是否需要因为state和props的改变而更新，默认行为是所有state改变都会触发组件更新
  当props和state更新时会触发此生命周期，首次不触发此生命周期
  返回true生命周期继续，返回false生命周期不继续

### getSnapshotBeforeUpdate()
  在最新的渲染输出提交给DOM前将会立即调用,返回值将传给componentDidUpdate

### componentDidCatch()
  渲染期间，生命周期方法或任何子组件的构造函数中发生错误时，将调用此方法
