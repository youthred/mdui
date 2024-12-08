# JavaScript 全局方法

## mdui.mutation()

MDUI 中部分组件的初始化方式为在 DOM 加载完毕后执行初始化函数，这导致动态生成组件时，组件无法自动初始化。MDUI 提供了 `mdui.mutation()` 方法来解决这个问题。

- `mdui.mutation()`

调用该方法后，将初始化页面中所有未初始化的组件。

```js
var html =
  '<select class="mdui-select" mdui-select>' +
  '  <option value="1">State 1</option>' +
  '  <option value="2">State 2</option>' +
  '  <option value="3">State 3</option>' +
  '</select>';

// 动态添加了一个 Select 组件，但通过自定义属性调用时，该组件无法自动初始化
$('body').append(html);

// 调用该方法，将初始化页面中所有未初始化的组件。
mdui.mutation();
```

- `mdui.mutation(selector, apiInit)`

如果为 `mdui.mutation()` 方法传入了两个参数，则可用于初始化你自行编写的组件。第一个参数为 CSS 选择器，第二个参数是初始化函数。

调用 `mdui.mutation(selector, apiInit)` 时，会将 CSS 选择器和初始化函数绑定，并执行 `$(selector).each(apiInit)` 调用初始化函数。

等到下次调用 `mdui.mutation()` 时，若 CSS 选择器对应的组件未初始化，则会自动调用初始化函数。

- `$(selector).mutation()`

若需要初始化指定元素内的组件，可以调用 `$(selector).mutation()`，该方法初始化了 selector 及其子元素中未初始化的组件。
