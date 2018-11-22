---
title: redux入门
date: 2018-08-20
tag: 
  - react
  - redux
categories:
  - 前端
---
![](/imgs/react/theme/life.jpg)

`管理javascript状态`

### 三大原则

*一、单一数据源*

整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

*二、State 是只读的*

唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

*三、使用纯函数来执行修改*

为了描述 action 如何改变 state tree ，你需要编写 reducers。

### 基础

*一、Action:*  是把数据从应用传到store的有效负荷。是store数据的唯一来源

*二、Reducer* 

1. Reducers指定了应用状态的变化如何响应 actions 并发送到 store

2. reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。

永远不要在reducer中做一下操作：

- 修改转入参数;
- 执行有副作用的操作，如 API 请求和路由跳转;
- 调用非纯函数，如 Date.now() 或 Math.random()。

**只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算**