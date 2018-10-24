---
title: React和Vue组件间数据传递demo
date: 2018-10-22
tag: 
  - react
categories:
  - 前端
---
![](/imgs/react/theme/props.jpg)

## 一、React

### (一)父组件向子组件传数据

1. 简单的向下传递参数

```jsx
/* Parent */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Child msg="来自父元素的问候"/>
      </div>
    );
  }
}

/* Child */
class Child extends Component {
  render() {
    return <div>{this.props.msg}</div>;
  }
}
```
[在CodeSandbox中打开](https://codesandbox.io/s/kx86ov1zm7)

2. 向更下一级传递参数

```jsx
/* Child1 */
class Child1 extends Component {
  render() {
    return (
      <div>
        <h3>Child1</h3>
        <p>{this.props.msg}</p>
        <Child1_Child1 {...this.props} />
      </div>
    );
  }
}

/* Child1_Child1 */
class Child1_Child1 extends Component {
  render() {
    return (
      <div>
        <h3>Child1_Child1</h3>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}
```
[在CodeSandbox中打开](https://codesandbox.io/s/kx86ov1zm7)

### (二)子组件向父组件传递参数

```jsx
/* Parent */
class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: "this is parent msg"
    };
  }

  changeMsg(msg) {
    this.setState({ msg });
  }

  render() {
    return (
      <div className="App">
        <h3>parent</h3>
        <p>{this.state.msg}</p>
        <Child1
          changeMsg={msg => {
            this.changeMsg(msg);
          }}
          msg={this.state.msg}
        />
      </div>
    );
  }
}

/* Child1 */
class Child1 extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.changeMsg("This child change msg");
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>Child1</h3>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}
```
[在CodeSandbox中打开](https://codesandbox.io/s/kyxq5m1l3)

### (三)兄弟组件传递参数

```jsx
/* Parent */
class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: "this is parent msg"
    };
  }

  changeMsg(msg) {
    this.setState({ msg });
  }

  render() {
    return (
      <div className="App">
        <h3>parent</h3>
        <p>{this.state.msg}</p>
        <Child1
          changeMsg={msg => {
            this.changeMsg(msg);
          }}
          msg={this.state.msg}
        />
        <Child1
          msg={this.state.msg}
        />
      </div>
    );
  }
}

/* Child1 */
class Child1 extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.changeMsg("This child change msg");
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>Child1</h3>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

/* Child2 */
class Child2 extends Component {
  render() {
    return (
      <div>
        <h3>Child2</h3>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}
```

## 二、Vue

### (一)父组件向子组件传数据

1. 简单的向下传递参数

```javascript
/* Parent */
<div id="app">
  <Child msg='ni daye'/>
</div>

/* Child1 */
<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
  // somecomde
};
```
[在CodeSandbox中打开](https://codesandbox.io/s/nwvrx02pxj)

2. 向更下一级传递参数

```javascript
/* Child1 */
<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
  // some code
};

/* Child1Child1 */
<template>
  <div class="hello">
    <p>{{ msg }}123123</p>
  </div>
</template>
<script>
export default {
  name: "Child1Child1",
  props: {
    msg: String
  }
  // some code
};
</script>
```
[在CodeSandbox中打开](https://codesandbox.io/s/nwvrx02pxj)

### (二)子组件向父组件传递参数

```javascript
/* Parent */
<template>
  <div id="app">
    <h3>parent</h3>
    <Child2 @changParent='dealFromChild2'/>
  </div>
</template>
<script>
import Child2 from "./components/Child2";

export default {
  name: "App",
  components: {
    Child2
  },
  data () {
    return {
      fromChild2: ''
    }
  },
  methods: {
    dealFromChild2 (val) {
      this.fromChild2 = val;
    }
  }
};
</script>

/* Child2 */
<script>
export default {
  name: "Child2",
  data() {
    return {};
  },
  mounted () {
    setTimeout(() =>{
      this.$emit('changParent', 'come from Child2')
    }, 1000)
  }
};
</script>
```
[在CodeSandbox中打开](https://codesandbox.io/s/nwvrx02pxj)

### (三)兄弟组件传递参数

```javascript
/* Parent */
<template>
  <div id="app">
    <h3>parent</h3>
    <Child2 @changParent='dealFromChild2'/>
    <Child1 :fromChild2='fromChild2'>
  </div>
</template>
<script>
import Child2 from "./components/Child2";
import Child1 from "./components/Child1";

export default {
  name: "App",
  components: {
    Child2
  },
  data () {
    return {
      fromChild2: ''
    }
  },
  methods: {
    dealFromChild2 (val) {
      this.fromChild2 = val;
    }
  }
};
</script>

/* Child2 */
<script>
export default {
  name: "Child2",
  data() {
    return {};
  },
  mounted () {
    setTimeout(() =>{
      this.$emit('changParent', 'come from Child2')
    }, 1000)
  }
};
</script>

/* Child1 */
<template>
  <div class="hello">
    <p>{{ fromChild2 }}</p>
  </div>
</template>
export default {
  name: "HelloWorld",
  props: {
    fromChild2: String
  }
  // some code
};
```
[在CodeSandbox中打开](https://codesandbox.io/s/nwvrx02pxj)

[在github上编辑此页](https://github.com/Iwouldliketobeapig/article/tree/master/_posts/react/react-vue-props.md)