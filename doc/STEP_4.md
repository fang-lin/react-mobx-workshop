## Step 4: Is completed

# Requirements

1. User can change the state of existing todo


# You should know

1. Add `completed` field
2. `toggleState()`


# Stores

```
┌─────────────────────────┐         ┌─────────────────────────┐
│          Todos          │         │          Todo           │
├─────────────────────────┤         ├─────────────────────────┤
│ todos: Array            │         │ id: String              │
├─────────────────────────┤         │ title: Array            │
│ addTodo()               │         │ completed: Boolean      │
│                         │         ├─────────────────────────┤
│                         │         │ changeTitle(title)      │
│                         │         │ destroy()               │
│                         │         │ toggleState()           │
└─────────────────────────┘         └─────────────────────────┘
```

[Next step: Get count](STEP_5.md)
