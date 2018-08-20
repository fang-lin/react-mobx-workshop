# Step 4: Editor and Is completed

## Requirements

1. User can change the state of existing todo
2. User can edit existing todo
3. When user double click a todo, should show edit mode for this item
4. When the edit input on blur or presses key "Enter", should save the change


## Prompts

1. Add `completed` field
2. Add `changeTitle(title)`
3. Add `toggleState()`


## Stores

```
┌─────────────────────────┐         ┌─────────────────────────┐
│          Todos          │         │          Todo           │
├─────────────────────────┤         ├─────────────────────────┤
│ todos: Array            │         │ id: String              │
├─────────────────────────┤         │ title: String           │
│ addTodo()               │         │ completed: Boolean      │
│                         │         ├─────────────────────────┤
│                         │         │ destroy()               │
│                         │         │ changeTitle(title)      │
│                         │         │ toggleState()           │
└─────────────────────────┘         └─────────────────────────┘
```


##[Next Step: Get count](STEP_5.md)
