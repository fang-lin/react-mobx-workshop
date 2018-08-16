# Step 1: Add a new todo

## Requirements

1. User can input some words
2. When user presses key "Enter", should put the new input into todo list
3. Do not accept blank content


## Prompts

1. Create a store `Todos`
2. Use `@observable` and `@action` of "mobx"
3. Use "mobx-react" `<Provider/>` to provide store to `App`,
4. Use "mobx-react" `@inject` and `@observer`


## Stores

```
┌─────────────────────────┐
│          Todos          │
├─────────────────────────┤
│ todos: Array            │
├─────────────────────────┤
│ addTodo()               │
└─────────────────────────┘
```

## [Next Step: Remove a todo](STEP_2.md)
