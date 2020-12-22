# 一、Producer and Observer
```
document.addEventListener('click',function handler(e){
    console.log(e)
})
```
上面代码中的Producer是DOM事件机制
Observer是handler,对事件做出反应


```
Rx.Observable.fromEvent(document,'keydown')
.filter(({key})=?key==='Shift)
.scan(count=>count+1,0)
.subscribe(count=>console.log(`按了${count}遍Shift键盘`))
```
上面代码Producer还是DOM事件机制。
Observer是`subscribe`参数。

两段代码对比，可以理解为Rxjs是连接Producer和Observer的枢纽。
Rxjs将Producer转换为Observable,然后对Observable进行各种变换,在交给Observer。

# 二、创建Observable
Rxjs的Producer转换为Observable的方法:`fromEvent`,`fromPromise`等。
根本的方法是`create`。



# 三、Cold and Hot
冷热概念就是看Producer的创建受不受RSJX控制。
Cold:这个Producer在create回调中产生，那么就是Cold
Hot:在Producer之前创建，比如DOM事件，create回调中仅仅添加listener那么就是Hot

