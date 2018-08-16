# Step 3: Refactor

## Requirements

1. Do not change previous features

## Prompts

1. Refactor your stores
2. Create a new store `Todo`
3. delete `removeTodo`
4. Add `destroy()`
2. Use `uuid()`


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
