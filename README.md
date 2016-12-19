# Event 

useage
```js 
var cat = new Event();

cat.on('say', function(sound){
    console.log('Miao! ' + sound);
});

cat.fire('say', 'Hungry!'); 
// Miao! Hungry!

```
