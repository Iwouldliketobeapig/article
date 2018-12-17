---
title: Error
tag: 
  - javascript
  - javascript高级程序语言设计
categories:
  - 前端
---
![](/imgs/javascript/theme/error.jpg)

# javascript各种error详解
  这篇主要是为了了解javascript的报错类型，开发中经常会遇到类似的报错，不管是原生的语法还是调用第三方的插件，了解错误的原理能够帮组我们快速的定位bug。同时我们在为别人提供第三方插件或者是接口的时候，合理的运用，能够为其他开发者提供更语义化的报错。
## error类型介绍
### EvalError
  本对象代表一个关于eval抛出的错误，此异常不会再被javascript抛出，但是EvalError对象仍然保持兼容性。
### InternalError
  对象表示出现在JavaScript引擎内部的错误
![](/imgs/javascript/error/internalErrorC.jpg)
### RangeError
  对象标明一个错误，当一个值不在其所允许的范围或者集合中。
![](/imgs/javascript/error/rangeErrorC.jpg)
### ReferenceError
  （引用错误） 对象代表当一个不存在的变量被引用时发生的错误。
![](/imgs/javascript/error/referenceErrorC.jpg)
### SyntaxError
  对象代表尝试解析语法上不合法的代码的错误。
![](/imgs/javascript/error/syntaxErrorC.jpg)
### TypeError
  （类型错误） 对象用来表示值的类型非预期类型时发生的错误
![](/imgs/javascript/error/typeErrorC.jpg)
### URIError
  对象用来表示以一种错误的方式使用全局URI处理函数而产生的错误。
## 使用方法
1. 所有的error类型的调用方式都一样
```javascript
new [type]Error([message[, fileName[, lineNumber]]])
```
* message
  可选，可读的错误描述
* fileName
  可选，包含造成异常代码的文件名
* lineNumber
  可选，造成异常的代码所在的行数
2. 举两个栗子
* 假如你写了一个年龄的接口，一般来说小于0岁大于200岁就是不正常的
```javascript
function judgeAge (age) {
  if (0 < age < 200) {
    throw RangeError("你输入的年龄范围错误")
  }
}
```
![](/imgs/javascript/error/rangeError.jpg)
* 还是这个年龄接口
```javascript
function judgeAge (age) {
  if (typeof age !== 'number') {
    throw RangeError("你输入的年龄类型错误")
  }
}
```
![](/imgs/javascript/error/typeError.jpg)
>[在MDN查看常见错误](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Not_a_codepoint)