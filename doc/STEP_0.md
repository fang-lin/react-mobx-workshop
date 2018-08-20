# Step 0: Getting started

## What is decorator?

- Simple class decorator

```javascript
@annotation
class MyClass { }

function annotation(target) {
   target.annotated = true;
}
```

- Class decorator

```javascript
@isTestable(true)
class MyClass { }

function isTestable(value) {
   return function decorator(target) {
      target.isTestable = value;
   }
}
```

- Class function decorator

```javascript
class C {
  @enumerable(false)
  method() { }
}

function enumerable(value) {
  return function (target, key, descriptor) {
     descriptor.enumerable = value;
     return descriptor;
  }
}
```


## What is MobX?




## [Next Step: Add a todo](STEP_1.md)
