# react-native札记
## 基本命令
1. 查看链接设备：adb devices
2. 安装：react-native run-android
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
## 用到的npm包
### 定位用了react-native-amap-geolocation
### 地图显示用了react-native-map3d