# Step 3: Editor and refactor

## Requirements

1. User can edit existing todo
2. When user double click a todo, should show edit mode for this item
3. When the edit input on blur or presses key "Enter", should save the change


## Prompts

1. Refactor your stores
2. Create a store `Todo`
3. delete `removeTodo`
4. Add `changeTitle` and `destroy()`
2. Use `uuid()`


## Stores

```
┌─────────────────────────┐         ┌─────────────────────────┐
│          Todos          │         │          Todo           │
├─────────────────────────┤         ├─────────────────────────┤
│ todos: Array            │         │ id: String              │
├─────────────────────────┤         │ title: Array            │
│ addTodo()               │         ├─────────────────────────┤
│                         │         │ changeTitle(title)      │
│                         │         │ destroy()               │
└─────────────────────────┘         └─────────────────────────┘
```


[Next step: Is completed](STEP_4.md)
