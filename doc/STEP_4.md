# Step 4: Editor and Is completed

    $ git co step-4

## Requirements

1. User can change the state of existing todo
1. User can edit existing todo
1. When user double click a todo, should show edit mode for this item
1. When the edit input on blur or presses key "Enter", should save the change


## Prompts

1. Add `completed` field
1. Add `changeTitle(title)`
1. Add `toggleState()`


## References

1. `@computed`: [https://mobx.js.org/refguide/computed-decorator.html](https://mobx.js.org/refguide/computed-decorator.html)


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


## [Next Step: Get count](STEP_5.md)
