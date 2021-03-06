# File names

In order to optimize for smaller bundles and easier to understand we separate certain parts from
each other.

## Example

```
atoms
   ┣━ my-component
   ┃  ┣━ constants.ts
   ┃  ┣━ index.tsx
   ┃  ┣━ styled.ts
   ┃  ┣━ styles.ts 
   ┃  ┣━ types.ts
   ┃  ┣━ utils.ts
   ┃  ┗━ [*].ts
   ┗━ ...
```

* `constants.ts`: local constants
* `index.tsx`: the main component (`export default`)
* `styled.ts`: styled components via `@emotion/styled`
* `styles.ts`: styles  via `@material-ui/core/styles/makeStyles`
* `types.ts`: local type definitions
* `utils.ts`: local utility functions
* `[*].ts`: add more files in case you need them
  * i.e. `items.{ts,tsx,json}`
  
## Exports

We use named exports in all files except for the `index.tsx`.
We need to use `export default` to allow better DX when using components in dynamic imports

## File extension

Use `.tsx` if your file contains JSX. In all other cases use `.ts` (or `.json` when applicable) 

