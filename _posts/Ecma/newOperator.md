### Optional Chaining for JavaScript
##### 语法
`?.`运算符：如果操作数在？的左侧。 运算符的结果为undefined或null，表达式的结果为undefined。 否则，将正常触发目标属性访问，方法或函数调用。
##### 场景
1. 常有通过判断object的某个属性是否存在，再去进一步获取某一个值
```javascript
const street = user.address && user.address.street;
```
现在你可以这样实现
```javascript
const street = user.address?.streets;
```
2. 或者在dom中
```javascript
const fooInput = myForm.querySelector('input[name=foo]');
const fooValue = fooInput && fooInput.value;
```
现在
```javascript
const fooValue = myForm.querySelector('input[name=foo]')?.value;
```
3. 判断某个对象方法是否被实现或者传递
```javascript
const obj = { a: 1, b: 2 };
const objkeys = Object.keys?.(obj);
```
[!参考链接tc39](https://github.com/tc39/proposal-optional-chaining)

### Nullish Coalescing for JavaScript
##### 语法
`??`运算符：如果运算符左侧为undefined或null则返回运算符右侧
##### 场景
1. 访问某个属性值，如果为假值测设置默认值
```javascript
const doge = {
  name: 'xiaohuang',
  height: '50cm',
  weight: undefined,
  hasBaby: null,
  age: 0,
  babyName: '',
  babyAge: NaN,
}

const dogeWeight = doge.weight || 10; // 10
const dogeHasBaby = doge.hasBaby || false; // false
const dogeAge = doge.age || 0.1; // 0.1
const dogeBabyName = doge.babyName || 'defaultName'; // 'defaultName'
const dogeBabyAge = doge.babyAge || 'defaultAge'; // 'defautlAge'
```
可以这样写`??`
```javascript
const doge = {
  name: 'xiaohuang',
  height: '50cm',
  weight: undefined,
  hasBaby: null,
  age: 0,
  babyName: '',
  babyAge: NaN,
}

const dogeWeight = doge.weight ?? 10; // 10
const dogeHasBaby = doge.hasBaby ?? false; // false
const dogeAge = doge.age ?? 0.1; // 0
const dogeBabyName = doge.babyName ?? 'defaultName'; // ''
const dogeBabyAge = doge.babyAge ?? 'defaultAge'; // NaN
```

###### ||和??假值判断的区别
`||`：`false/''/undefined/null/NaN/0`都会被判定为假值

`??`：只有`undefined/null`会被判断为空值
[!参考链接tc39](https://github.com/tc39/proposal-nullish-coalescing)