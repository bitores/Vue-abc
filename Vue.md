# Vue

#### 生命周期

* init
* Created
* beforeCompile
* Compiled
* Ready
* Attatched
* Detached
* beforeDestory
* destoryed


*执行顺序*

```
1. 不具有keep-alive

进入：

	init->create->beforeCompile->complied->attatched->ready

移出：

	beforeDestory->detached->destoryed;

2. 具有keep-alive

第一次的时候

    进入：

    init->create->beforeCompile->complied->attatched->ready

    移出：

    detached；
之后的每次

    进入：

    attatched

    移出：

    detached

```

#### 钩子函数

* data
* activete
* deactivate
* canactivate
* candeactivate

*执行顺序*

```
进入：

canactivate->actiavte->date

移出：

candeactivate->deactiavte
```


#### 嵌套组件生命周期

```
1. 不具有keep-alive：
移入：
    1. canActivate;
    2. init;
    3. create;
    4. beforeCompile;
    5. (嵌套子组件：init,create,beforeCompile,compile);
    6. compile;
    7. activate;
    8. data;
    9. attached;
    10. (子组件attached);
    11. (子组件ready);
    12. ready;
移出：
    13. canDeactivate;
    14. deactivate;
    15. beforeDestroy;
    16. (子组件beforeDestroy);
    17. (子组件destoryed);
    18. detached;
    19. (子组件detached);
    20. destoryed;

2. 具有keep-alive：
移入：
    1. canActivate;
    2. activate;
    3. data;
    4. attached;
    5. (子组件attached);
移出：
    6. canDeactivate;
    7. deactivate;
    8. detached;
    9. (子组件detached);
```



#### 钩子函数activate和data的执行顺序


> 涉及钩子函数异步 resolve 规则：

```
1.如果钩子返回一个 Promise，则钩子何时 resolve 取决于该 Promise 何时 resolve。

2.如果钩子既不返回 Promise，也没有任何参数，则该钩子将被同步 resolve。

3.如果钩子不返回 Promise，但是有一个参数(transition)，则钩子会等到transition.next(),transition.abort()或是transition.redirect()之一被调用才 resolve。

4.在验证类的钩子，比如canActivate,canDeactivate以及全局 beforeEach 钩子中，如果返回值是一个布尔值 (Boolean)，也会使得钩子同步 resolve。
```