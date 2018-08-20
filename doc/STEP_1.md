# Step 1: Add a new todo

## Requirements

1. User can input some words
1. When user presses key "Enter", should put the new input into todo list
1. Do not accept blank content


## Prompts

1. Create a store `Todos`
1. Use "mobx": `@observable` and `@action`
1. Use "mobx-react": `@inject` and `@observer`


## References

1. `@observable`: [https://mobx.js.org/refguide/observable-decorator.html](https://mobx.js.org/refguide/observable-decorator.html)
1. `@action`: [https://mobx.js.org/refguide/action.html](https://mobx.js.org/refguide/action.html)
1. `@inject` and `@observer`: [https://github.com/mobxjs/mobx-react](https://github.com/mobxjs/mobx-react)


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
