# Step 1: Add a new todo

## Requirements

1. User can input some words
2. When user presses key "Enter", should put the new input into todo list
3. Do not accept blank content


## Prompts

1. Create a store `Todos`
1. Use "mobx": `@observable` and `@action`
1. Use "mobx-react": `@inject` and `@observer`


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
