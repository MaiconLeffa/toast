# Toast

Toast is a simple and light toast component, no need to add provider, just call the toast function and it will be shown.

```jsx
import { toast } from "@maiconleffa/toast";

export function Demo() {
  function handleChange(dateRange) {
    console.log(dateRange);
  }

  return (

  );
}
```

Props
| Prop | Description |
| :---: | :---: |
| success | A success toast will be shown in green theme |
| warning | A warning toast will be shown in yellow theme |
| error | A error toast will be shown in red theme |
| custom | Create your own toast component using same behavior |
