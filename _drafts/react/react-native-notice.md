# react-native札记
## 基本命令
1. 查看链接设备：adb devices
2. 安装：react-native run-android
3. 打包apk
```javascript

```
## 坑
1. 每次link后，都需要重装一次app
## react navigation
### navigation
1. navigate 路由跳转
2. goBack 返回
## 方法
1. 滚动加载,下拉加载
```javascript
import { RefreshControl } from 'react-native'

// 滚动
onScroll = (e) => {
  var offsetY = e.nativeEvent.contentOffset.y; // 已经滚动的距离
  var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; // 可滚动的可见区域高度
  var contentSizeHeight = Math.round(e.nativeEvent.contentSize.height); // 可滚动的总高度
  if (Math.round(offsetY + oriageScrollHeight) >= contentSizeHeight) {
    console.log('do something');
  }
}

_onRefresh = () => {
  console.log('do something');
}

<ScrollView
  style={styles.scroll}
  onScroll={this.onScroll}
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={this._onRefresh}
    />
  }
>
```

2. 输入结束后回调
```javascript
searchEndEdit = (event) => {
  console.log(event.nativeEvent.text);
}

<TextInput 
  searchEndEdit={this.searchEndEdit}
/>
```

3. 通过AppState在退出app的时候做持久化储存

## 用到的npm包
### 定位用了react-native-amap-geolocation
### 地图显示用了react-native-map3d
### 星星用到了react-native-star-rating
## 问题
1. 样式值写错误导致app闪退
```javascript
paddingTop: '20' // 错误
```

2. TextInput组件value设置为**Number**类型的时候不能赋值，目前解决方案是转为**String**

3. Task :app:compileDebugJavaWithJavac FAILED

npm i jetifier
npx jetify