# Event 

### 安装

```
npm install git+https://github.com/hapjs/event.git
```

### 使用
```js 
var cat = new Event();

cat.on('say', function(sound){
    console.log('Miao! ' + sound);
});

cat.fire('say', 'How are you?'); //=> Miao! How are you?
```

### api

`on(事件名)` 

绑定事件

`off(事件名)`

解绑事件

`fire(事件名, 事件参数)`

触发事件，并可以传给所有监听函数一个参数