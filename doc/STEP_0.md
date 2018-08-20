# Step 0: Getting started

## What is decorator?

- Simple class decorator

```javascript
@annotation
class MyClass { }

function annotation(target) {
    // target is MyClass
    target.annotated = true;
}
```

- Class decorator

```javascript
@isTestable(true)
class MyClass { }

function isTestable(value) {
    // value is true
    return function decorator(target) {
        // target is MyClass
        target.isTestable = value;
    }
}
```

- Class function decorator

```javascript
class MyClass {
    @enumerable(false)
    method() { }
}

function enumerable(value) {
    // value is false
    return function (target, key, descriptor) {
        // target is MyClass
        // key is "method"
        // descriptor is descriptor of method
        descriptor.enumerable = value;
        return descriptor;
    }
}
```


## What is MobX?

![https://raw.githubusercontent.com/mobxjs/mobx/master/docs/flow.png](https://raw.githubusercontent.com/mobxjs/mobx/master/docs/flow.png)



## [Next Step: Add a todo](STEP_1.md)
