---
title: emmitEvents
date: 2021-6-6
tag: 
  - javascript
categories:
  - 前端
---
![](/imgs/javascript/emmitEvents/index.png)


# 简单实现一个事件发布订阅模式
## 实现功能
* on 添加订阅事件
* emmit 发布事件
* once 添加一个只会被发布一次的事件
* off 取消订阅事件
### 代码
```typescript
interface Prototype {
  events: Object;
}

type Fun = (...args: any[]) => void;

class EventEmitter {
  events: {
    [prop: string]: Array<any>
  };
  constructor() {
    this.events = {};
  }

  on (type: string, callback: Fun): void {
    if (this.events[type]) {
      this.events[type].push(callback);
    } else {
      this.events[type] = [callback];
    }
  }

  emit (type: string, ...args: any[]): void {
    if (!this.events[type]) {
      return;
    }
    this.events[type].forEach(ele => ele(...args))
  }

  off (type: string, callback: Fun) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter(ele => callback !== ele);
  }

  once (type: string, callback: Fun) {
    const _this = this;
    function fn (...args: any) {
      callback(...args);
      _this.off(type, fn);
    }
    this.on(type, fn);
  }
}

const eventEmitter = new EventEmitter();

const onCallback: Fun = (...args) => {
  console.log(args);
}

eventEmitter.on('test', onCallback)
eventEmitter.emit('test', 1, 2, 3);
eventEmitter.emit('test', 4, 5, 6);
eventEmitter.off('test', onCallback);
eventEmitter.emit('test', 7, 8, 9);

eventEmitter.once('once', (str: string) => { console.log(str) })
eventEmitter.emit('once', 'once');
eventEmitter.emit('once', 'two');
```
### 执行结果
![](/imgs/javascript/emmitEvents/result.png)

## 运用
1. 发布订阅模式