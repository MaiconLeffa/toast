# Toast

Toast is a simple and light toast component, no need to add provider, just call the toast function and it will be shown.

![Captura de Tela 2024-03-16 às 15 06 35](https://github.com/MaiconLeffa/toast/assets/41764184/c7860c66-9571-4d41-93b1-add2ef5b264c)

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
      <button onClick={success}>
        success
      </button>
      <button onClick={warning}>
        warning
      </button>
      <button onClick={error}>
        error
      </button>
      <button onClick={custom}>
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

Toast props
| prop | type | default | Description |
| :---: | :---: | :---: | :---: |
| content | ReactNode, string, HTMLElement | null | The toast content, can be a string or a React component |
| duration | number | 5000 | Duration to dismiss the toast in milisseconds |

