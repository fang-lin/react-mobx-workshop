# Step 3: Refactor

## Requirements

1. Do not change previous features

## Prompts

1. Refactor your stores
1. Create a new store `Todo`
1. delete `removeTodo`
1. Add `destroy()`
1. Use `uuid()`


## Stores

```
┌─────────────────────────┐         ┌─────────────────────────┐
│          Todos          │         │          Todo           │
├─────────────────────────┤         ├─────────────────────────┤
│ todos: Array            │         │ id: String              │
├─────────────────────────┤         │ title: String           │
│ addTodo()               │         ├─────────────────────────┤
│                         │         │ destroy()               │
└─────────────────────────┘         └─────────────────────────┘
```


## [Next Step: Editor and Is completed](STEP_4.md)
