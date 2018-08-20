# Step 5: Save to Local Storage

## Requirements

1. Save and update todo data to Local Storage
1. Load the todo data and display them when the page has been refresh


## Prompts

1. User "mobx": `reaction`
1. `toJS`: converts an (observable) object to a js data structure
1. `fromJS`: create an/some (observable) object(s) from js data structure


## References

1. `reaction`: [https://mobx.js.org/refguide/reaction.html](https://mobx.js.org/refguide/reaction.html)
1. `toJS`: [https://mobx.js.org/refguide/tojson.html](https://mobx.js.org/refguide/tojson.html)


## Stores

```
┌───────────────────────────┐         ┌─────────────────────────┐
│          Todos            │         │          Todo           │
├───────────────────────────┤         ├─────────────────────────┤
│ todos: Array              │         │ id: String              │
├───────────────────────────┤         │ title: String           │
│ addTodo()                 │         │ completed: Boolean      │
│ get totalCount()          │         ├─────────────────────────┤
│ get completedCount()      │         │ destroy()               │
│ toJS()                    │         │ changeTitle(title)      │
│ static fromJS()           │         │ toggleState()           │
│ loadFromLocalStorage()    │         │ toJS()                  │
│ subscribeToLocalStorage() │         │ static fromJS()         │
└───────────────────────────┘         └─────────────────────────┘
```
