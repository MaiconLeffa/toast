# Toast

Toast is a simple and light toast component, no need to add provider, just call the toast function and it will be shown.

```jsx
import { toast } from "@maiconleffa/toast";

export function Demo() {
  function success() {
    toast.success({
      content: <>I`m a success Toast</>
    });
  }

  function error() {
    toast.error({
      content: <>I`m a error Toast</>
    });
  }

  function warning() {
    toast.warning({
      content: <>I`m a warning Toast</>
    });
  }

  function custom() {
    toast.custom({
      content: <>I`m a custom Toast</>
    });
  }

  return (
    <div>
      <button className="" onClick={success}>
        success
      </button>
      <button className="ml-4" onClick={warning}>
        warning
      </button>
      <button className="ml-4" onClick={error}>
        error
      </button>
      <button className="ml-4" onClick={custom}>
        custom
      </button>
    </div>
  );
}
```

Toast options
| type | Description |
| :---: | :---: |
| success | A success toast will be shown in green theme |
| warning | A warning toast will be shown in yellow theme |
| error | A error toast will be shown in red theme |
| custom | Create your own toast component using same behavior |


