import{T as v,_ as c}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as l,c as p,a as o,g as t,b as d,e as a,F as r,o as s,_ as i}from"./index-15cb1481.js";const u=l({__name:"jq",setup(g){const n=()=>{mdui.$.showOverlay(),setTimeout(()=>{mdui.$.hideOverlay()},2e3)},f=()=>{mdui.$.lockScreen(),setTimeout(()=>{mdui.$.unlockScreen()},2e3)};return(b,e)=>(s(),p(r,null,[o(v),e[18]||(e[18]=t('<h1 class="title mdui-text-color-theme" data-v-5d029e5f>JavaScript 工具库</h1><div class="intro mdui-typo" data-v-5d029e5f><p data-v-5d029e5f>MDUI 内置了一个轻量的 JavaScript 工具库，它拥有和 jQuery 类似的 api 和 jQuery 风格的链式调用，但体积仅为 jQuery 的六分之一。</p><p data-v-5d029e5f>你可以通过 <code data-v-5d029e5f>mdui.$</code> 来调用该库，但最好把 <code data-v-5d029e5f>mdui.$</code> 存储到一个简短的变量中以方便调用，例如：</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>var $ = mdui.$;</code></pre><p data-v-5d029e5f>在后面的文档中，都使用 <code data-v-5d029e5f>$</code> 来表示 <code data-v-5d029e5f>mdui.$</code>。</p></div>',2)),o(c,{class:"first-screen"}),e[19]||(e[19]=t('<nav class="toc mdui-text-color-theme" data-v-5d029e5f><ul data-v-5d029e5f><li data-v-5d029e5f><a href="#jq-core" data-v-5d029e5f>核心</a></li><li data-v-5d029e5f><a href="#jq-plugin" data-v-5d029e5f>插件编写</a></li><li data-v-5d029e5f><a href="#jq-url" data-v-5d029e5f>URL</a></li><li data-v-5d029e5f><a href="#jq-array" data-v-5d029e5f>数组和对象操作</a></li><li data-v-5d029e5f><a href="#jq-type" data-v-5d029e5f>数据类型判断</a></li><li data-v-5d029e5f><a href="#jq-obj" data-v-5d029e5f>对象访问</a></li><li data-v-5d029e5f><a href="#jq-class" data-v-5d029e5f>CSS 类</a></li><li data-v-5d029e5f><a href="#jq-attr" data-v-5d029e5f>节点属性</a></li><li data-v-5d029e5f><a href="#jq-data" data-v-5d029e5f>数据存储</a></li><li data-v-5d029e5f><a href="#jq-style" data-v-5d029e5f>样式</a></li><li data-v-5d029e5f><a href="#jq-selector" data-v-5d029e5f>查找节点</a></li><li data-v-5d029e5f><a href="#jq-dom" data-v-5d029e5f>节点操作</a></li><li data-v-5d029e5f><a href="#jq-form" data-v-5d029e5f>表单</a></li><li data-v-5d029e5f><a href="#jq-event" data-v-5d029e5f>事件</a></li><li data-v-5d029e5f><a href="#jq-ajax" data-v-5d029e5f>AJAX</a></li><li data-v-5d029e5f><a href="#jq-other" data-v-5d029e5f>更多常用方法</a></li></ul></nav>',1)),d("div",{class:"chapter"},[d("div",{class:"mdui-typo"},[e[17]||(e[17]=t(`<h2 class="chapter-title chapter-title-first mdui-text-color-theme" data-v-5d029e5f>核心 <a class="anchor" id="jq-core" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>该方法有多种用法：</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，返回包含匹配元素的 JQ 对象。该方法是通过 <code data-v-5d029e5f>querySelectorAll</code> 实现的。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;)</code></pre><p data-v-5d029e5f>可以传入 DOM 元素、任意数组、NodeList、JQ 对象，返回包含指定元素的 JQ 对象。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(document)</code></pre><p data-v-5d029e5f>可以传入 HTML 字符串，返回包含根据 HTML 创建的 DOM 的 JQ 对象。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;&lt;div id=&quot;wrapper&quot;&gt;
  &lt;span id=&quot;inner&quot;&gt;&lt;/span&gt;
&lt;/div&gt;&#39;)</code></pre><p data-v-5d029e5f>可以传入一个函数，在 DOM 加载完毕后会调用该函数。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(function () { console.log(&#39;DOM Loaded&#39;) })</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>插件编写 <a class="anchor" id="jq-plugin" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.extend()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>如果只传入一个对象，该对象中的属性将合并到 JQ 对象中，相当于在 JQ 的命名空间下添加新的功能。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.extend({
  customFunc: function () {}
})

// 然后就可以这样调用自定义方法了
$.customFunc()
</code></pre><p data-v-5d029e5f>如果传入了两个或更多个对象，所有对象的属性都添加到第一个对象，并返回合并后的对象。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>var object = $.extend(
  { key1: val1 },
  { key2: val2 },
  { key3: val3 }
);

// 此时第一个对象和返回值都是 { key1: val1, key2: val2, key3: val3 }</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.fn.extend()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在 JQ 的原型链上扩展方法。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.fn.extend({
  customFunc: function () {}
})

// 然后就可以这样使用扩展的方法了
$(document).customFunc()</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>URL <a class="anchor" id="jq-url" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.param()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>将对象或数组序列化，返回一个可用于 URL 参数的字符串。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.param({ width: 1680, height: 1050 })
// width=1680&amp;height=1050

$.param({ foo: { one: 1, two: 2 } })
// foo[one]=1&amp;foo[two]=2

$.param({ ids: [1, 2, 3] })
// ids[]=1&amp;ids[]=2&amp;ids[]=3</code></pre><p data-v-5d029e5f>若传入参数是一个数组，则该数组格式必须与 <code data-v-5d029e5f>.serializeArray()</code> 的返回格式一致：</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>param([
  { &quot;name&quot;: &quot;name&quot;, &quot;value&quot;: &quot;mdui&quot; },
  { &quot;name&quot;: &quot;password&quot;, &quot;value&quot;: &quot;123456&quot; }
])
// name=mdui&amp;password=123456</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>数组对象操作 <a class="anchor" id="jq-array" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.each()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>遍历数组或对象。返回值为第一个参数，即被遍历的数组或对象。</p><p data-v-5d029e5f>函数的第一个参数为数组的索引位置、或对象的键；第二个参数为数组或对象对应位置的值。</p><p data-v-5d029e5f>回调函数中的 <code data-v-5d029e5f>this</code> 指向数组或对象对应位置的值。若回调函数返回 <code data-v-5d029e5f>false</code>，则停止遍历。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 遍历一个数组
$.each([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], function (index, value) {
  console.log(index + &#39;:&#39; + value);
})

// 结果：
// 0:a
// 1:b
// 2:c</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 遍历一个对象
$.each({&#39;name&#39;: &#39;mdui&#39;, &#39;lang&#39;: &#39;zh&#39;}, function (key, value) {
  console.log(key + &#39;:&#39; + value);
})

// 结果
// name:mdui
// lang:zh</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.merge()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>把第二个数组的元素追加到第一个数组中，并返回合并后的数组。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>var first = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
var second = [&#39;c&#39;, &#39;d&#39;, &#39;e&#39;];
var result = $.merge(first, second);

console.log(first); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]
console.log(result); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.unique()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>过滤掉数组中的重复元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>var result = $.unique([1, 2, 12, 3, 2, 1, 2, 1, 1, 1, 1]);
console.log(result); // [1, 2, 12, 3]</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.map()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>遍历数组或对象，返回由函数的返回值组成的新数组。</p><p data-v-5d029e5f>函数的第一个参数为数组或对象对应位置的值，第二个参数为数组的索引位置、或对象的键。</p><p data-v-5d029e5f>函数可以返回任何值，若函数返回的是数组，则会被展开；若返回的是 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code>，则会被忽略。函数内部的 <code data-v-5d029e5f>this</code> 指向 <code data-v-5d029e5f>window</code> 对象。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 遍历数组
var result = $.map([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], function (value, index) {
  return index + value;
});
console.log(result); // [&#39;0a&#39;, &#39;1b&#39;, &#39;2c&#39;]</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 回调函数返回数组时，会被展开
var result = $.map([1, 2, 3], function (value, index) {
  return [value, value + 1];
});
console.log(result); // [1, 2, 2, 3, 3, 4]</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 遍历对象
var result = $.map({ name: &#39;mdui&#39;, password: &#39;123456&#39; }, function (value, key) {
  return key + &#39;:&#39; + value;
});
console.log(result); // [&#39;name:mdui&#39;, &#39;password:123456&#39;]</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.contains()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>判断父节点是否包含子节点，返回布尔值。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.contains(document, document.body); // true
$.contains(document.body, document); // false</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>数据类型判断 <a class="anchor" id="jq-type" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.is()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>如果集合中至少有一个元素和参数匹配，则返回 <code data-v-5d029e5f>true</code>，否则返回 <code data-v-5d029e5f>false</code>。</p><p data-v-5d029e5f>参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象、或回调函数。</p><p data-v-5d029e5f>参数为回调函数时，函数的第一个参数为索引位置，第二个参数为当前元素，<code data-v-5d029e5f>this</code> 指向当前元素。若函数返回 <code data-v-5d029e5f>true</code>，表示匹配；若返回 <code data-v-5d029e5f>false</code>，表示不匹配。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).is(&#39;.box&#39;); // true
$(&#39;.box&#39;).is(&#39;.boxss&#39;); // false
$(&#39;.box&#39;).is($(&#39;.box&#39;)[0]); // true</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 通过回调函数的返回值做判断
$(document).is(function (index, element) {
  return element === document;
});
// true</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>对象访问 <a class="anchor" id="jq-obj" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.length</code></td><td data-v-5d029e5f><p data-v-5d029e5f>返回当前集合中元素的数量。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;body&#39;).length; // 1</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.each()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>遍历当前集合，为集合中每一个元素执行一个函数。如果函数返回 <code data-v-5d029e5f>false</code>，则结束遍历。</p><p data-v-5d029e5f>函数的第一个参数为元素的索引位置，第二个参数为当前元素。函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;img&#39;).each(function(index, element) {
  this.src = &#39;test&#39; + index + &#39;.jpg&#39;;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.map()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>遍历当前集合，为集合中的每个元素执行一个函数，返回由函数返回值组成的新集合。若函数返回 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code> 则会被过滤。</p><p data-v-5d029e5f>函数的第一个参数为元素的索引位置，第二个参数为当前元素。函数的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>var result = $(&#39;input.checked&#39;).map(function (index, element) {
  return $(this).val();
});

// result 为匹配元素的值组成的 JQ 对象</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.eq()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>返回仅包含指定索引位置的元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;div&#39;).eq(0); // 返回仅包含第一个元素的 JQ 对象
$(&#39;div&#39;).eq(-1); // 返回仅包含最后一个元素的 JQ 对象
$(&#39;div&#39;).eq(-2); // 返回仅包含倒数第二个元素的 JQ 对象</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.first()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>返回仅包含第一个元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;div&#39;).first(); // 返回仅包含第一个 div 的 JQ 对象</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.last()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>返回仅包含最后一个元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;div&#39;).last(); // 返回仅包含最后一个 div 的 JQ 对象</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.get()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>返回指定索引位置的元素。若未传入参数，则返回集合中所有元素组成的数组。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;div&#39;).get(); // 返回所有 div 元素组成的数组
$(&#39;div&#39;).get(0); // 返回第一个 div 元素
$(&#39;div&#39;).get(-1); // 返回最后一个 div 元素</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.index()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>如果没有传入参数，则返回集合中第一个元素相对于同辈元素的索引位置。</p><p data-v-5d029e5f>如果传入了一个 CSS 选择器作为参数，则返回集合中第一个元素相对与 CSS 选择器匹配元素的索引位置。</p><p data-v-5d029e5f>如果传入了一个 DOM 元素，则返回该 DOM 元素在集合中的索引值。</p><p data-v-5d029e5f>如果传入一个 JQ 对象，则返回对象中第一个元素在当前集合中的索引位置。</p><pre data-v-5d029e5f><code class="language-html" data-v-5d029e5f>&lt;div id=&quot;child&quot;&gt;
  &lt;div id=&quot;child1&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child2&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child3&quot;&gt;&lt;/div&gt;
  &lt;div id=&quot;child4&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;#child3&#39;).index(); // 2
$(&#39;#child3&#39;).index(&#39;#child div&#39;); // 2
$(&#39;#child div&#39;).index($(&#39;#child3&#39;).get(0); // 2</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.slice()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>返回当前集合的子集。</p><p data-v-5d029e5f>第一个参数为子集的起始位置，第二个参数为子集的结束位置；若未传入第二个参数，表示包含从起始位置到结尾的所有元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 返回集合中第三个（包含第三个）之后的所有元素
$(&#39;div&#39;).slice(3);

// 返回集合中第三个到第五个（包含第三个，不包含第五个）之间的元素
$(&#39;div&#39;).slice(3, 5);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.filter()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>从当前集合中筛选出与指定表达式匹配的元素。参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、回调函数。</p><p data-v-5d029e5f>参数为函数时，函数的第一个参数为索引位置，第二个参数为当前元素，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。函数返回 <code data-v-5d029e5f>true</code> 时，当前元素会被保留，返回 <code data-v-5d029e5f>false</code> 时，当前元素会被移除。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 筛选出所有含 .box 的 div 元素
$(&#39;div&#39;).filter(&#39;.box&#39;);

// 筛选出所有已选中选项
$(&#39;#select option&#39;).filter(function (index, element) {
  return element.selected;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.not()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>从当前集合中筛选出与指定表达式不匹配的元素。参数可以是 CSS 选择器、DOM 元素、DOM 元素数组、回调函数。</p><p data-v-5d029e5f>参数为函数时，函数的第一个参数为索引位置，第二个参数为当前元素，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。函数返回 <code data-v-5d029e5f>true</code> 时，当前元素会被移除，返回 <code data-v-5d029e5f>false</code> 时，当前元素会被保留。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 筛选出所有不含 .box 类的 div 元素
$(&#39;div&#39;).not(&#39;.box&#39;);

// 筛选出所有未选中选项
$(&#39;#select option&#39;).not(function (index, element) {
  return element.selected;
});</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>CSS 类 <a class="anchor" id="jq-class" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.hasClass()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>判断集合中的第一个元素是否含有指定 CSS 类。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 判断第一个 div 元素是否含有 .item
$(&#39;div&#39;).hasClass(&#39;item&#39;)</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.addClass()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>为集合中的每个元素添加 CSS 类，多个类名之间可以用空格分隔。</p><p data-v-5d029e5f>也可以传入一个返回 CSS 类名的回调函数。函数的第一个参数为索引位置，第二个参数为该元素上原有的 CSS 类名，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 为所有 div 元素添加 .item
$(&#39;div&#39;).addClass(&#39;item&#39;)</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 为所有 div 元素添加 .item1 和 .item2
$(&#39;div&#39;).addClass(&#39;item1 item2&#39;)</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 为所有 div 元素添加由回调函数返回的 CSS 类
$(&#39;div&#39;).addClass(function (index, currentClassName) {
  return currentClassName + &#39;-&#39; + index;
})</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.removeClass()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>移除集合中的元素上的 CSS 类，多个类名之间可以用空格分隔。</p><p data-v-5d029e5f>也可以传入一个返回 CSS 类名的回调函数。函数的第一个参数为索引位置，第二个参数为该元素上原有的 CSS 类名，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若没有传入参数，则将直接移除元素上的 <code data-v-5d029e5f>class</code> 属性。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 移除所有 div 元素上的 .item
$(&#39;div&#39;).removeClass(&#39;item&#39;)</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 移除所有 div 元素上的 .item1 和 .item2
$(&#39;div&#39;).removeClass(&#39;item1 item2&#39;)</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 移除所有 div 元素上的由回调函数返回的 CSS 类
$(&#39;div&#39;).removeClass(function (index, currentClassName) {
  return &#39;item&#39;;
})</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 直接移除 class 属性
$(&#39;div&#39;).removeClass()</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.toggleClass()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>元素上的 CSS 类，有则删除，无则添加。多个类名之间可以用空格分隔。</p><p data-v-5d029e5f>也可以传入一个返回 CSS 类名的回调函数。函数的第一个参数为索引位置，第二个参数为该元素上原有的 CSS 类名，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 切换所有 div 元素上的 .item
$(&#39;div&#39;).toggleClass(&#39;item&#39;)</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 切换所有 div 元素上的 .item1 和 .item2
$(&#39;div&#39;).toggleClass(&#39;item1 item2&#39;)</code></pre><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 切换所有 div 元素上的由回调函数返回的 CSS 类
$(&#39;div&#39;).toggleClass(function (index, currentClassName) {
  return &#39;item&#39;;
})</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>节点属性 <a class="anchor" id="jq-attr" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.prop()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的属性值。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取第一个元素的属性值
$(&#39;input&#39;).prop(&#39;checked&#39;);</code></pre><p data-v-5d029e5f>也可以是设置集合中所有元素的属性值。</p><p data-v-5d029e5f>设置的属性值可以是回调函数的返回值。回调函数的第一个参数为元素的索引位置，第二个参数为该元素上原有的属性值，函数内的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若属性值或回调函数的返回值为 <code data-v-5d029e5f>void</code> 或 <code data-v-5d029e5f>undefined</code>，则不会修改原有属性。</p><p data-v-5d029e5f>也可以通过传入对象来同时设置多个属性。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置所有选中元素的属性值
$(&#39;input&#39;).prop(&#39;checked&#39;, true);

// 通过回调函数的返回值设置属性值
$(&#39;input&#39;).prop(&#39;checked&#39;, function (index, oldPropValue) {
  return true;
});

// 同时设置元素的多个属性值
$(&#39;input&#39;).prop({
  checked: false,
  disabled: function (index, oldPropValue) {
    return true;
  }
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.removeProp()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>删除集合中所有元素上指定的属性值。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;input&#39;).removeProp(&#39;disabled&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.attr()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的属性值。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取第一个元素的属性值
$(&#39;div&#39;).attr(&#39;username&#39;);</code></pre><p data-v-5d029e5f>也可以是设置集合中所有元素的属性值。</p><p data-v-5d029e5f>设置的属性值可以是回调函数的返回值。回调函数的第一个参数为元素的索引位置，第二个参数为该元素上原有的属性值，函数内的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若属性值或回调函数的返回值为 <code data-v-5d029e5f>void</code> 或 <code data-v-5d029e5f>undefined</code>，则不会修改原有属性。若属性值或回调函数的返回值为 <code data-v-5d029e5f>null</code>，则删除指定属性。</p><p data-v-5d029e5f>也可以通过传入对象来同时设置多个属性。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置所有选中元素的属性值
$(&#39;div&#39;).attr(&#39;username&#39;, &#39;mdui&#39;);

// 通过回调函数的返回值设置属性值
$(&#39;div&#39;).attr(&#39;username&#39;, function (index, oldAttrValue) {
  return &#39;mdui&#39;;
});

// 同时设置元素的多个属性值
$(&#39;div&#39;).attr({
  username: &#39;mdui&#39;,
  lastname: function (index, oldAttrValue) {
    return &#39;test&#39;;
  }
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.removeAttr()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>删除集合中所有元素上指定的属性值，多个属性名之间可以用空格分隔。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 删除集合中所有元素上的一个属性
$(&#39;div&#39;).removeAttr(&#39;username&#39;);

// 删除集合中所有元素上的多个属性
$(&#39;div&#39;).removeAttr(&#39;username lastname&#39;);
</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.val()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的值。</p><p data-v-5d029e5f>若元素是 <code data-v-5d029e5f>&lt;select multiple=&quot;multiple&quot;&gt;</code>，则将返回一个包含每个选择项的数组。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取选中的第一个元素的值
$(&#39;#input&#39;).val();</code></pre><p data-v-5d029e5f>也可以是设置集合中所有元素的值。</p><p data-v-5d029e5f>设置的值可以是字符串、数值、字符串数组、回调函数。</p><p data-v-5d029e5f>若值为回调函数，第一个参数为元素的索引位置，第二个参数为元素的原有的值，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若元素为 <code data-v-5d029e5f>&lt;input type=&quot;checkbox&quot;&gt;</code>、<code data-v-5d029e5f>&lt;input type=&quot;radio&quot;&gt;</code>、<code data-v-5d029e5f>&lt;option&gt;</code>，则元素值、或函数返回值可以为数组，此时将选中值在数组中的元素，并取消值不在数组中的元素。</p><p data-v-5d029e5f>若值、或函数返回值为 <code data-v-5d029e5f>undefined</code>，则会将元素值设为空。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置选中元素的值
$(&#39;#input&#39;).val(&#39;input value&#39;);

// 通过回调函数的返回值设置元素值
$(&#39;#input&#39;).val(function (index, oldValue) {
  return &#39;new value&#39;;
});
</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.text()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中所有元素的文本内容（包含它们的后代元素）</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取所有 .box 元素的文本
$(&#39;.box&#39;).text();</code></pre><p data-v-5d029e5f>也可以是设置集合中所有元素的文本。</p><p data-v-5d029e5f>设置的值可以是字符串、数值、布尔值、回调函数。</p><p data-v-5d029e5f>若为回调函数，第一个参数为元素的索引位置，第二个参数为元素原有的文本内容，函数内的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若设置的值、或回调函数返回值为 <code data-v-5d029e5f>undefined</code>，则不修改对应元素的文本。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置选中元素的文本内容
$(&#39;.box&#39;).text(&#39;text content&#39;);

// 通过回调函数的返回值设置元素的文本内容
$(&#39;.box&#39;).text(function (index, oldTextContent) {
  return &#39;new text content&#39;;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.html()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的 HTML 内容。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取第一个 .box 元素的 HTML 内容
$(&#39;.box&#39;).html();</code></pre><p data-v-5d029e5f>也可以是设置集合中所有元素的 HTML 内容。</p><p data-v-5d029e5f>设置的值可以是 HTML 字符串、DOM 元素、回调函数。</p><p data-v-5d029e5f>若为回调函数，第一个参数为元素的索引位置，第二个参数为元素原有的 HTML 内容，函数内的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>如设置的值、或函数返回值为 <code data-v-5d029e5f>undefined</code>，则不修改对应元素的 HTML。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置选中元素的 HTML
$(&#39;.box&#39;).html(&#39;&lt;div&gt;new html content&lt;/div&gt;&#39;);

// 通过回调函数的返回值设置元素的 HTML 内容
$(&#39;.box&#39;).html(function (index, oldHTMLContent) {
  return &#39;&lt;div&gt;new html content&lt;/div&gt;&#39;;
});</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>数据存储 <a class="anchor" id="jq-data" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.data()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在指定元素上读取或存储数据。</p><p data-v-5d029e5f>存储数据时，若值为 <code data-v-5d029e5f>undefined</code>，则相当于读取元素上对应的数据。即 <code data-v-5d029e5f>$.data(element, &#39;key&#39;, undefined)</code> 和 <code data-v-5d029e5f>$.data(element, &#39;key&#39;)</code> 等效。</p><p data-v-5d029e5f>注意：该方法不会检索元素上的 <code data-v-5d029e5f>data-*</code> 属性。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 在指定元素上存储数据，返回存储的值
$.data(document.body, &#39;layout&#39;, &#39;dark&#39;); // 返回 dark

// 在指定元素上同时存储多个数据
$.data(document.body, {
  primary: &#39;indigo&#39;,
  accent: &#39;pink&#39;,
});

// 获取在指定元素上存储的数据
$.data(document.body, &#39;layout&#39;); // 返回 dark

// 获取在指定元素上存储的所有数据
$.data(document.body); // 返回 { layout: &#39;dark&#39;, primary: &#39;indigo&#39;, accent: &#39;pink&#39; }</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.removeData()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>移除指定元素上存储的数据。</p><p data-v-5d029e5f>多个键名可以用空格分隔，也可以用数组表示多个键名。未指定键名时，将移除元素上的所有数据。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 移除元素上键名为 name 的数据
$.removeData(document.body, &#39;name&#39;);

// 移除元素上键名为 name1 和 name2 的数据。下面两种方法等效：
$.removeData(document.body, &#39;name1 name2&#39;);
$.removeData(document.body, [&#39;name1&#39;, &#39;name2&#39;]);

// 移除元素上存储的所有数据
$.removeData(document.body);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.data()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的元素上读取或存储数据。</p><p data-v-5d029e5f>存储数据时，若值为 <code data-v-5d029e5f>undefined</code>，则不进行存储。</p><p data-v-5d029e5f>注意：该方法检索的数据会包含元素上的 <code data-v-5d029e5f>data-*</code> 属性。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 在当前集合中的元素上存储数据
$(&#39;.box&#39;).data(&#39;layout&#39;, &#39;dark&#39;);

// 在当前集合中的元素上同时存储多个数据
$(&#39;.box&#39;).data({
  primary: &#39;indigo&#39;,
  accent: &#39;pink&#39;,
});

// 获取当前集合中第一个元素上存储的指定数据
$(&#39;.box&#39;).data(&#39;layout&#39;); // 返回 dark

// 获取在当前集合中第一个元素上存储的所有数据
$(&#39;.box&#39;).data(); // 返回 { layout: &#39;dark&#39;, primary: &#39;indigo&#39;, accent: &#39;pink&#39; }</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.removeData()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>移除当前集合的元素上存储的数据。</p><p data-v-5d029e5f>多个键名可以用空格分隔，也可以用数组表示多个键名。未指定键名时，将移除元素上的所有数据。</p><p data-v-5d029e5f>注意：该方法只会移除通过 <code data-v-5d029e5f>.data()</code> 方法设置的数据，不会移除 <code data-v-5d029e5f>data-*</code> 属性上的数据。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 移除键名为 name 的数据
$(&#39;.box&#39;).removeData(&#39;name&#39;);

// 移除键名为 name1 和 name2 的数据。下面两种方法等效：
$(&#39;.box&#39;).removeData(&#39;name1 name2&#39;);
$(&#39;.box&#39;).removeData([&#39;name1&#39;, &#39;name2&#39;]);

// 移除元素上存储的所有数据
$(&#39;.box&#39;).removeData();</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>样式 <a class="anchor" id="jq-style" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.css()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的 CSS 属性值。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).css(&#39;color&#39;)</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素的 CSS 属性值。</p><p data-v-5d029e5f>属性值可以是字符串、数值、或一个返回字符串或数值的回调函数。</p><p data-v-5d029e5f>若属性值是回调函数，第一个参数为元素的索引位置，第二个参数为元素原有的 CSS 属性值，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若属性值或回调函数返回 <code data-v-5d029e5f>void</code>、<code data-v-5d029e5f>undefined</code>、<code data-v-5d029e5f>null</code>，则不对当前元素的 CSS 属性值进行修改。</p><p data-v-5d029e5f>若属性值或回调函数返回数值，则会添加 <code data-v-5d029e5f>px</code> 作为单位。若该属性无法使用 <code data-v-5d029e5f>px</code> 作为单位，则会直接把该值转为字符串。</p><p data-v-5d029e5f>也可以通过传入一个键值对对象，来同时设置多个 CSS 属性。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的样式值
$(&#39;.box&#39;).css(&#39;color&#39;, &#39;red&#39;)

// 通过回调函数的返回值设置所有元素的样式值
$(&#39;.box&#39;).css(&#39;color&#39;, function (index, oldCSSValue) {
  return &#39;green&#39;;
});

// 通过传入一个对象同时设置多个样式
$(&#39;.box&#39;).css({
  &#39;background-color&#39;: &#39;white&#39;,
  color: function (index, oldCSSValue) {
    return &#39;blue&#39;;
  },
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.width()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的宽度（像素值），不包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的宽度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).width();</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素的宽度（不包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的宽度）。</p><p data-v-5d029e5f>值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。</p><p data-v-5d029e5f>回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的宽度值，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若值、或回调函数的返回值为数值，则会自动添加 <code data-v-5d029e5f>px</code> 作为单位。</p><p data-v-5d029e5f>若值、或回调函数的返回值为 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code>，则不修改元素的宽度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的宽度
$(&#39;.box&#39;).width(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).width(10);

// 通过回调函数的返回值设置宽度
$(&#39;.box&#39;).width(function (index, oldWidth) {
  return 10;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.height()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的高度（像素值），不包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的高度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).height();</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素的高度（不包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的高度）。</p><p data-v-5d029e5f>值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。</p><p data-v-5d029e5f>回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的高度值，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若值、或回调函数的返回值为数值，则会自动添加 <code data-v-5d029e5f>px</code> 作为单位。</p><p data-v-5d029e5f>若值、或回调函数的返回值为 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code>，在不修改元素的高度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的高度
$(&#39;.box&#39;).height(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).height(10);

// 通过回调函数的返回值设置高度
$(&#39;.box&#39;).height(function (index, oldWidth) {
  return 10;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.innerWidth()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的宽度（像素值），包含 <code data-v-5d029e5f>padding</code>，不包含 <code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的宽度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).innerWidth();</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素的宽度（包含 <code data-v-5d029e5f>padding</code>，不包含 <code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的宽度）。</p><p data-v-5d029e5f>值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。</p><p data-v-5d029e5f>回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的宽度值，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若值、或回调函数的返回值为数值，则会自动添加 <code data-v-5d029e5f>px</code> 作为单位。</p><p data-v-5d029e5f>若值、或回调函数的返回值为 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code>，则不修改元素的宽度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的宽度
$(&#39;.box&#39;).innerWidth(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).innerWidth(10);

// 通过回调函数的返回值设置宽度
$(&#39;.box&#39;).innerWidth(function (index, oldWidth) {
  return 10;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.innerHeight()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的高度（像素值），包含 <code data-v-5d029e5f>padding</code>，不包含 <code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的高度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).innerHeight();</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素的高度（包含 <code data-v-5d029e5f>padding</code>，不包含 <code data-v-5d029e5f>border</code>、<code data-v-5d029e5f>margin</code> 的高度）。</p><p data-v-5d029e5f>值可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。</p><p data-v-5d029e5f>回调函数的第一个参数为元素的索引位置，第二个参数为元素原有的高度值，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若值、或回调函数的返回值为数值，则会自动添加 <code data-v-5d029e5f>px</code> 作为单位。</p><p data-v-5d029e5f>若值、或回调函数的返回值为 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code>，在不修改元素的高度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的高度
$(&#39;.box&#39;).innerHeight(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).innerHeight(10);

// 通过回调函数的返回值设置高度
$(&#39;.box&#39;).innerHeight(function (index, oldHeight) {
  return 10;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.outerWidth()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的宽度（像素值），包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>的宽度，不包含 <code data-v-5d029e5f>margin</code> 的宽度，可以传入参数 <code data-v-5d029e5f>true</code>，使宽度包含 <code data-v-5d029e5f>margin</code> 的宽度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 包含 padding、border 的宽度
$(&#39;.box&#39;).outerWidth();

// 包含 padding、border、margin 的宽度
$(&#39;.box&#39;).outerWidth(true);</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素的宽度（包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>，不包含 <code data-v-5d029e5f>margin</code> 的宽度，可以在第二个参数中传入 <code data-v-5d029e5f>true</code>，使宽度包含 <code data-v-5d029e5f>margin</code> 的宽度）。</p><p data-v-5d029e5f>第一个参数可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。</p><p data-v-5d029e5f>回调函数的第一个参数为元素的索引位置，第二个参数为元素的原有宽度，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若值、或回调函数的返回值为数值，则会自动添加 <code data-v-5d029e5f>px</code> 作为单位。</p><p data-v-5d029e5f>若值、或回调函数的返回值为 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code>，则不修改元素的宽度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的宽度
$(&#39;.box&#39;).outerWidth(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).outerWidth(10);

// 第二个参数为 true，则宽度将包含 margin
$(&#39;.box&#39;).outerWidth(10, true);

// 通过回调函数的返回值设置宽度
$(&#39;.box&#39;).outerWidth(function (index, oldWidth) {
  return 10;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.outerHeight()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素的高度（像素值），包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>的高度，不包含 <code data-v-5d029e5f>margin</code> 的高度，可以传入参数 <code data-v-5d029e5f>true</code>，使高度包含 <code data-v-5d029e5f>margin</code> 的高度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 包含 padding、border 的高度
$(&#39;.box&#39;).outerHeight();

// 包含 padding、border、margin 的高度
$(&#39;.box&#39;).outerHeight(true);</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素的高度（包含 <code data-v-5d029e5f>padding</code>、<code data-v-5d029e5f>border</code>，不包含 <code data-v-5d029e5f>margin</code> 的高度，可以在第二个参数中传入 <code data-v-5d029e5f>true</code>，使高度包含 <code data-v-5d029e5f>margin</code> 的高度）。</p><p data-v-5d029e5f>第一个参数可以是带单位的字符串、数值、或返回带单位的字符串或数值的回调函数。</p><p data-v-5d029e5f>回调函数的第一个参数为元素的索引位置，第二个参数为元素的原有高度，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若值、或回调函数的返回值为数值，则会自动添加 <code data-v-5d029e5f>px</code> 作为单位。</p><p data-v-5d029e5f>若值、或回调函数的返回值为 <code data-v-5d029e5f>null</code> 或 <code data-v-5d029e5f>undefined</code>，则不修改元素的高度。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的高度
$(&#39;.box&#39;).outerHeight(&#39;20%&#39;);

// 值为数值时，默认单位为 px
$(&#39;.box&#39;).outerHeight(10);

// 第二个参数为 true，则高度将包含 margin
$(&#39;.box&#39;).outerHeight(10, true);

// 通过回调函数的返回值设置高度
$(&#39;.box&#39;).outerHeight(function (index, oldWidth) {
  return 10;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.hide()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>隐藏集合中的所有元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).hide();</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.show()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>显示集合中的所有元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).show();</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.toggle()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>切换集合中所有元素的显示状态。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).toggle();</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.offset()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素相对于 <code data-v-5d029e5f>document</code> 的坐标。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).offset(); // { top: 20, left: 30 }</code></pre><p data-v-5d029e5f>也可以设置集合中所有元素相对于 <code data-v-5d029e5f>document</code> 的坐标。</p><p data-v-5d029e5f>参数为一个包含 <code data-v-5d029e5f>top</code> 和 <code data-v-5d029e5f>left</code> 属性的对象，或一个返回此格式对象的回调函数。</p><p data-v-5d029e5f>若参数是回调函数，第一个参数为元素的索引位置，第二个参数为元素的原有坐标，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>若参数中 <code data-v-5d029e5f>top</code> 或 <code data-v-5d029e5f>left</code> 的值为 <code data-v-5d029e5f>undefined</code>，则不修改对应的值。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 设置集合中所有元素的坐标
$(&#39;.box&#39;).offset({ top: 20, left: 30 });

// 通过回调函数的返回值设置元素的坐标
$(&#39;.box&#39;).offset(function (index, oldOffset) {
  return { top: 20, left: 30 };
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.offsetParent()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>返回集合中第一个元素的用于定位的父元素。即父元素中第一个 <code data-v-5d029e5f>position</code> 为 <code data-v-5d029e5f>relative</code> 或 <code data-v-5d029e5f>absolute</code> 的元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).offsetParent();</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.position()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取集合中第一个元素相对于父元素的偏移。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).position(); // { top: 20, left: 30 }</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>查找节点 <a class="anchor" id="jq-selector" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.find()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的所有元素中，根据 CSS 选择器找到指定的后代节点的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 找到 #box 的后代节点中，包含 .box 的节点集合
$(&#39;#box&#39;).find(&#39;.box&#39;)</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.children()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的所有元素中，获取直接子元素组成的集合。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，对子元素进行过滤。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 找到 #box 的所有直接子元素
$(&#39;#box&#39;).children();

// 找到 #box 的所有直接子元素中，包含 .box 的元素集合
$(&#39;#box&#39;).children(&#39;.box&#39;)</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.has()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的所有元素中，筛选出含有指定子元素的元素。</p><p data-v-5d029e5f>参数可以是 CSS 选择器或 DOM 元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 给含有 ul 的 li 加上背景色
$(&#39;li&#39;).has(&#39;ul&#39;).css(&#39;background-color&#39;, &#39;red&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.parent()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中，所有元素的直接父元素的集合。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的父元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 返回 .box 元素的直接父元素
$(&#39;.box&#39;).parent();

// 返回 .box 元素的直接父元素中含有 .parent 类的元素
$(&#39;.box&#39;).parent(&#39;.parent&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.parents()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中，所有元素的祖先元素的集合。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅返回与该参数匹配的祖先元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 返回 span 元素的所有祖先元素
$(&#39;span&#39;).parents();

// 返回 span 元素的所有是 p 元素的祖先元素
$(&#39;span&#39;).parents(&#39;p&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.parentsUntil()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中，每个元素的所有父辈元素，直到遇到和第一个参数匹配的元素为止（不包含匹配元素）。</p><p data-v-5d029e5f>第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。</p><p data-v-5d029e5f>可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。</p><p data-v-5d029e5f>若没有指定参数，则所有的祖先元素都将被匹配，即和 <code data-v-5d029e5f>.parents()</code> 效果一样。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .item 元素的所有祖先元素
$(&#39;.item&#39;).parentsUntil();

// 查找 .item 元素的所有父辈元素，直到遇到 .parent 元素为止
$(&#39;.item&#39;).parentsUntil(&#39;.parent&#39;);

// 获取 .item 元素的所有是 div 元素的祖先元素，直到遇到 .parent 元素为止
$(&#39;.item&#39;).parentsUntil(&#39;.parent&#39;, &#39;div&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.prev()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中所有元素的前一个同辈元素组成的集合。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素的前一个元素的集合
$(&#39;.box&#39;).prev();

// 获取 .box 元素的前一个 div 元素的集合
$(&#39;.box&#39;).prev(&#39;div&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.prevAll()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中所有元素的前面的所有同辈元素组成的集合。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素前面的所有同辈元素
$(&#39;.box&#39;).prevAll();

// 获取 .box 元素前面的所有含 .selected 的同辈元素
$(&#39;.box&#39;).prevAll(&#39;.selected&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.prevUntil()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中，每个元素前面所有的同辈元素，直到遇到和第一个参数匹配的元素为止（不包含匹配元素）。</p><p data-v-5d029e5f>第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。</p><p data-v-5d029e5f>可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素前面所有的同辈元素
$(&#39;.box&#39;).prevUntil();

// 获取 .box 元素前所有的同辈元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).prevUntil(&#39;.until&#39;);

// 获取 .box 元素前面同辈的 div 元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).prevUntil(&#39;.until&#39;, &#39;div&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.next()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中所有元素的后一个同辈元素组成的集合。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素的后一个元素的集合
$(&#39;.box&#39;).next();

// 获取 .box 元素的后一个 div 元素的集合
$(&#39;.box&#39;).next(&#39;div&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.nextAll()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中所有元素的后面的所有同辈元素组成的集合。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的同辈元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素后面的所有同辈元素
$(&#39;.box&#39;).nextAll();

// 获取 .box 元素后面的所有含 .selected 的同辈元素
$(&#39;.box&#39;).nextAll(&#39;.selected&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.nextUntil()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中，每个元素后面所有的同辈元素，直到遇到和第一个参数匹配的元素为止（不包含匹配元素）。</p><p data-v-5d029e5f>第一个参数可以是 CSS 选择器、DOM 元素、JQ 对象。</p><p data-v-5d029e5f>可以传入第二个参数，必须是 CSS 选择器，表示仅返回和该参数匹配的元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素后面所有的同辈元素
$(&#39;.box&#39;).nextUntil();

// 获取 .box 元素后所有的同辈元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).nextUntil(&#39;.until&#39;);

// 获取 .box 元素后面同辈的 div 元素，直到遇到 .until 元素为止
$(&#39;.box&#39;).nextUntil(&#39;.until&#39;, &#39;div&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.closest()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>从当前元素向上逐级匹配，返回最先匹配到的元素。</p><p data-v-5d029e5f>参数可以是 CSS 选择器、DOM 元素、JQ 对象。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素的父元素中最近的 .parent 元素
$(&#39;.box&#39;).closest(&#39;.parent&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.siblings()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>获取当前集合中，每个元素的兄弟元素。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅获取和该参数匹配的兄弟元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 获取 .box 元素的所有兄弟元素
$(&#39;.box&#39;).siblings();

// 获取 .box 元素的所有兄弟元素中含 .selected 的元素
$(&#39;.box&#39;).siblings(&#39;.selected&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.add()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>添加元素到当前集合中。</p><p data-v-5d029e5f>参数可以是 HTML 字符串、CSS 选择器、JQ 对象、DOM 元素、DOM 元素数组、NodeList。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 把含 .selected 的元素添加到当前集合中中
$(&#39;.box&#39;).add(&#39;.selected&#39;);</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>节点操作 <a class="anchor" id="jq-dom" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.empty()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>移除当前元素中所有的子元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;.box&#39;).empty();</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.remove()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>从 DOM 中移除当前集合中的元素。</p><p data-v-5d029e5f>可以传入一个 CSS 选择器作为参数，仅移除与该参数匹配的元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 移除所有 p 元素
$(&#39;p&#39;).remove();

// 移除所有含 .box 的 p 元素
$(&#39;p&#39;).remove(&#39;.box&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.prepend()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的元素内部的前面插入指定内容。</p><p data-v-5d029e5f>参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p><p data-v-5d029e5f>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>该方法返回原始集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).prepend(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;&lt;b&gt;Hello&lt;/b&gt;I would like to say: &lt;/p&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).prepend(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;I would like to say: &lt;/p&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).append(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;p&gt;&lt;b&gt;Hello0&lt;/b&gt;Hello&lt;/p&gt;</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.prependTo()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>把当前集合中的元素追加到指定元素内部的前面。</p><p data-v-5d029e5f>参数可以是 CSS 选择器、HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。</p><p data-v-5d029e5f>该方法返回原始集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).prependTo(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;);

// 结果：[ &lt;p&gt;&lt;p&gt;Hello&lt;/p&gt;I would like to say: &lt;/p&gt; ]</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.append()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的元素内部的后面插入指定内容。</p><p data-v-5d029e5f>参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p><p data-v-5d029e5f>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数是当前元素的索引位置，第二个参数是元素的原始 HTML，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>该方法返回原始集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).append(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;b&gt;Hello&lt;/b&gt;&lt;/p&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).append(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;&lt;/p&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).append(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;p&gt;Hello&lt;b&gt;Hello0&lt;/b&gt;&lt;/p&gt;</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.appendTo()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>把当前集合中的元素追加到指定元素内部的后面。</p><p data-v-5d029e5f>参数可以是 CSS 选择器、HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。</p><p data-v-5d029e5f>该方法返回原始集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).appendTo(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;)
// 结果：&lt;p&gt;I would like to say: &lt;p&gt;Hello&lt;/p&gt;&lt;/p&gt;</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.after()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的元素后面插入指定内容，作为其兄弟节点。</p><p data-v-5d029e5f>参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p><p data-v-5d029e5f>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数为当前元素的索引位置，第二个参数为元素的原始 HTML，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>该方法返回原始集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).after(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;)
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).after(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;)
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).after(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;p&gt;Hello&lt;/p&gt;&lt;b&gt;Hello0&lt;/b&gt;</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.insertAfter()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>把当前集合中的元素插入到目标元素的后面，作为其兄弟元素。</p><p data-v-5d029e5f>如果当前集合中的元素是页面中已有的元素，则将移动该元素，而不是复制。如果有多个目标，则将克隆当前集合中的元素，并添加到每个目标元素的后面。</p><p data-v-5d029e5f>可以传入一个 HTML 字符串、CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象作为参数，来指定目标元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;).insertAfter(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.before()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>在当前集合的元素前面插入指定内容，作为其兄弟节点。</p><p data-v-5d029e5f>参数类型可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。支持传入多个参数。</p><p data-v-5d029e5f>也可以传入一个返回 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象的回调函数，函数的第一个参数为当前元素的索引位置，第二个参数为元素的原始 HTML，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>该方法返回原始集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 插入一个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).before(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;)
// 结果：&lt;b&gt;Hello&lt;/b&gt;&lt;p&gt;I would like to say: &lt;/p&gt;

// 插入多个元素
$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).before(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;, &#39;&lt;b&gt;World&lt;/b&gt;&#39;)
// 结果：&lt;b&gt;Hello&lt;/b&gt;&lt;b&gt;World&lt;/b&gt;&lt;p&gt;I would like to say: &lt;/p&gt;

// 通过回调函数插入一个元素
$(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;).before(function (index, oldHTML) {
  return &#39;&lt;b&gt;&#39; + oldHTML + index + &#39;&lt;/b&gt;&#39;;
});
// 结果：&lt;b&gt;Hello0&lt;/b&gt;&lt;p&gt;Hello&lt;/p&gt;</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.insertBefore()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>把当前集合中的元素插入到目标元素的前面，作为其兄弟元素。</p><p data-v-5d029e5f>如果当前集合中的元素是页面中已有的元素，则将移动该元素，而不是复制。如果有多个目标，则将克隆当前集合中的元素，并添加到每个目标元素的后面。</p><p data-v-5d029e5f>可以传入一个 HTML 字符串、CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象作为参数，来指定目标元素。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;&lt;p&gt;I would like to say: &lt;/p&gt;&#39;).insertBefore(&#39;&lt;b&gt;Hello&lt;/b&gt;&#39;);
// 结果：&lt;p&gt;I would like to say: &lt;/p&gt;&lt;b&gt;Hello&lt;/b&gt;</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.replaceWith()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>用指定元素来替换当前集合中的元素。</p><p data-v-5d029e5f>参数可以是 HTML 字符串、DOM 元素、DOM 元素数组、JQ 对象。</p><p data-v-5d029e5f>也可以传入一个返回 HTML 字符串、DOM 元素、DOM元素数组、JQ 对象的回调函数，函数的第一个参数为当前元素的索引位置，第二个参数为元素的原始 HTML，函数中的 <code data-v-5d029e5f>this</code> 指向当前元素。</p><p data-v-5d029e5f>该方法返回原始集合，即被替换掉的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 用 &lt;p&gt;Hello&lt;/p&gt; 替换所有的 .box 元素
$(&#39;.box&#39;).replaceWith(&#39;&lt;p&gt;Hello&lt;/p&gt;&#39;);

// 用回调函数的返回值替换所有 .box 元素
$(&#39;.box&#39;).replaceWith(function (index, oldHTML) {
  return oldHTML + index;
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.replaceAll()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>用当前集合中的元素替换指定元素。</p><p data-v-5d029e5f>参数为 CSS 选择器、DOM 元素、DOM 元素数组、JQ 对象。</p><p data-v-5d029e5f>该方法返回原始集合，即用于替换的元素的集合。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 用 .new 元素替换所有 .box 元素
$(&#39;.new&#39;).replaceAll(&#39;.box&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.clone()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>通过深度克隆来复制集合中的所有元素。</p><p data-v-5d029e5f>通过原生 <code data-v-5d029e5f>cloneNode</code> 方法深度克隆来复制集合中的所有元素。此方法不会有数据和事件处理程序复制到新的元素。这点和 jQuery 中利用一个参数来确定是否复制数据和事件处理不相同。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;body&#39;).append($(&quot;#box&quot;).clone())</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>表单 <a class="anchor" id="jq-form" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.serializeArray()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>把表单元素的值组合成由 <code data-v-5d029e5f>name</code> 和 <code data-v-5d029e5f>value</code> 的键值对组成的数组。</p><p data-v-5d029e5f>该方法可对单独表单元素进行操作，也可以对整个 <code data-v-5d029e5f>&lt;form&gt;</code> 表单进行操作</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;form&#39;).serializeArray();
// [
//   { &quot;name&quot;: &quot;golang&quot;, &quot;value&quot;:&quot;456&quot; },
//   { &quot;name&quot;: &quot;name&quot;, &quot;value&quot;: &quot;mdui&quot; },
//   { &quot;name&quot;: &quot;password&quot;, &quot;value&quot;: &quot;&quot; }
// ]</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.serialize()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>将表单元素的值序列化。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(&#39;form&#39;).serialize();
// golang=456&amp;name=mdui&amp;password=</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>事件 <a class="anchor" id="jq-event" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.on()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>为集合中每个元素的特定事件绑定事件处理函数。具体用法见下方示例：</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 绑定点击事件
$(&#39;.box&#39;).on(&#39;click&#39;, function (e) {
  console.log(&#39;点击了 .box 元素&#39;);
});

// 绑定多个事件
$(&#39;.box&#39;).on(&#39;click focus&#39;, function (e) {
  console.log(&#39;click 和 focus 事件都会触发该函数&#39;);
});

// 事件委托
$(document).on(&#39;click&#39;, &#39;.box&#39;, function (e) {
  console.log(&#39;点击 .box 时会触发该函数&#39;);
});

// 同时绑定多个事件和事件处理函数
$(&#39;.box&#39;).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
  }
});

// 传入参数
$(&#39;.box&#39;).on(&#39;click&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; }, function (e) {
  console.log(&#39;点击了 .box 元素，并为事件处理函数传入了参数&#39;);
  // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
});

// 同时绑定多个事件和事件处理函数，并传入参数
$(&#39;.box&#39;).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  }
}, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// 通过事件委托绑定事件，并传入参数
$(document).on(&#39;click&#39;, &#39;.box&#39;, { key1: &#39;value1&#39;, keys: &#39;value2&#39; }, function (e) {
  console.log(&#39;点击了 .box 元素，并为事件处理函数传入了参数&#39;);
  // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
});

// 通过事件委托同时绑定多个事件和事件处理函数
$(document).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
  }
}, &#39;.box&#39;);

// 通过事件委托同时绑定多个事件和事件处理函数，并传入参数
$(document).on({
  &#39;click&#39;: function (e) {
    console.log(&#39;触发了 click 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  },
  &#39;focus&#39;: function (e) {
    console.log(&#39;触发了 focus 事件&#39;);
    // e._data 为 {key1: &#39;value1&#39;, key2: &#39;value2&#39;}
  }
}, &#39;.box&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });

// 获取事件参数
$(&#39;.box&#39;).on(&#39;click&#39;, function (e, data) {
  // data 等于 e._detail
});

// 事件名支持使用命名空间
$(&#39;.box&#39;).on(&#39;click.myPlugin&#39;, function () {
  console.log(&#39;点击了 .box 元素&#39;);
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.one()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>为每个匹配元素的特定事件绑定事件处理函数。但事件只会触发一次。</p><p data-v-5d029e5f>该方法的用法和 <code data-v-5d029e5f>.on()</code> 相同，所以不再举例了。</p></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.off()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>为集合中每个元素解除绑定的事件。具体用法见下方示例：</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 解除所有绑定的事件处理函数
$(&#39;.box&#39;).off();

// 解除绑定的指定事件
$(&#39;.box&#39;).off(&#39;click&#39;);

// 同时解除多个绑定的事件
$(&#39;.box&#39;).off(&#39;click focus&#39;);

// 解除绑定的指定事件处理函数
$(&#39;.box&#39;).off(&#39;click&#39;, callback);

// 解除通过事件委托绑定的事件
$(document).off(&#39;click&#39;, &#39;.box&#39;);

// 解除通过事件委托绑定的指定事件处理函数
$(document).off(&#39;click&#39;, &#39;.box&#39;, callback);

// 同时解绑多个事件处理函数
$(&#39;.box.&#39;).off({
  &#39;click&#39;: callback1,
  &#39;focus&#39;: callback2,
});

// 同时解绑多个通过事件委托绑定的事件处理函数
$(document).off({
  &#39;click&#39;: callback1,
  &#39;focus&#39;: callback2,
}, &#39;.box&#39;);

// 事件名支持使用命名空间，下面的用法将解绑所有以 .myPlugin 结尾的事件
$(document).off(&#39;.myPlugin&#39;);</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.trigger()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>触发指定的事件。具体用法见下方示例：</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>// 触发指定的事件
$(&#39;.box&#39;).trigger(&#39;click&#39;);

// 触发事件时传入参数
$(&#39;.box&#39;).trigger(&#39;click&#39;, { key1: &#39;value1&#39;, key2: &#39;value2&#39; });</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>AJAX <a class="anchor" id="jq-ajax" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.ajaxSetup()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>为 Ajax 请求设置全局配置参数。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.ajaxSetup({
  // 默认禁止触发全局 AJAX 事件
  global: false,

  // 默认使用 POST 请求
  method: &#39;POST&#39;
});</code></pre><p data-v-5d029e5f>详细参数列表见下方的 <a href="#jq-ajax-options" data-v-5d029e5f>AJAX 参数</a>。</p></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>$.ajax()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>发送 AJAX 请求，返回 Promise。</p><pre data-v-5d029e5f><code data-v-5d029e5f>$.ajax({
  method: &#39;POST&#39;,
  url: &#39;./test.php&#39;,
  data: {
    key1: &#39;val1&#39;,
    key2: &#39;val2&#39;
  },
  success: function (data) {
    console.log(data);
  }
});</code></pre><p data-v-5d029e5f>详细参数列表见下方的 <a href="#jq-ajax-options" data-v-5d029e5f>AJAX 参数</a>。</p></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.ajaxStart()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>全局 AJAX 事件。</p><p data-v-5d029e5f>AJAX 请求开始时执行函数。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(document).ajaxStart(function (event, xhr, options) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.ajaxSuccess()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>全局 AJAX 事件。</p><p data-v-5d029e5f>AJAX 请求成功时执行函数。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(document).ajaxSuccess(function (event, xhr, options, data) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
  // data: AJAX 请求返回的数据
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.ajaxError()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>全局 AJAX 事件。</p><p data-v-5d029e5f>AJAX 请求发生错误时执行函数。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(document).ajaxError(function (event, xhr, options) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>.ajaxComplete()</code></td><td data-v-5d029e5f><p data-v-5d029e5f>全局 AJAX 事件。</p><p data-v-5d029e5f>AJAX 请求完成时执行函数。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$(document).ajaxComplete(function (event, xhr, options) {
  // xhr: XMLHttpRequest 对象
  // options: AJAX 请求的配置参数
});</code></pre></td></tr></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>AJAX 参数 <a class="anchor" id="jq-ajax-options" data-v-5d029e5f></a></h2><div class="mdui-table-fluid" data-v-5d029e5f><table class="mdui-table" data-v-5d029e5f><thead data-v-5d029e5f><tr data-v-5d029e5f><th data-v-5d029e5f>参数名</th><th data-v-5d029e5f>参数类型</th><th data-v-5d029e5f>默认值</th><th data-v-5d029e5f>描述</th></tr></thead><tbody data-v-5d029e5f><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>url</code></td><td data-v-5d029e5f><code data-v-5d029e5f>String</code></td><td data-v-5d029e5f>当前页面的 URL。</td><td data-v-5d029e5f>请求的 URL 地址。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>method</code></td><td data-v-5d029e5f><code data-v-5d029e5f>String</code></td><td data-v-5d029e5f><code data-v-5d029e5f>GET</code></td><td data-v-5d029e5f><p data-v-5d029e5f>请求方式。</p><p data-v-5d029e5f>包括：GET、POST、PUT、PATCH、HEAD、OPTIONS、DELETE</p></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>data</code></td><td data-v-5d029e5f><code data-v-5d029e5f>any</code></td><td data-v-5d029e5f><code data-v-5d029e5f>&#39;&#39;</code></td><td data-v-5d029e5f>发送到服务器的数据。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>processData</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Boolean</code></td><td data-v-5d029e5f><code data-v-5d029e5f>true</code></td><td data-v-5d029e5f>是否把传递进来的数据转换成查询字符串发送。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>async</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Boolean</code></td><td data-v-5d029e5f><code data-v-5d029e5f>true</code></td><td data-v-5d029e5f>是否为异步请求。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>cache</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Boolean</code></td><td data-v-5d029e5f><code data-v-5d029e5f>true</code></td><td data-v-5d029e5f>是否从缓存中读取。只对 GET、HEAD 请求有效。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>username</code></td><td data-v-5d029e5f><code data-v-5d029e5f>String</code></td><td data-v-5d029e5f><code data-v-5d029e5f>&#39;&#39;</code></td><td data-v-5d029e5f>HTTP 访问认证的用户名。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>password</code></td><td data-v-5d029e5f><code data-v-5d029e5f>String</code></td><td data-v-5d029e5f><code data-v-5d029e5f>&#39;&#39;</code></td><td data-v-5d029e5f>HTTP 访问认证的密码。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>headers</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Object</code></td><td data-v-5d029e5f><code data-v-5d029e5f>{}</code></td><td data-v-5d029e5f><p data-v-5d029e5f>添加到 Headers 中的数据。可以在 <code data-v-5d029e5f>beforeSend</code> 回调函数中重写该值。</p><p data-v-5d029e5f>值为字符串或 <code data-v-5d029e5f>null</code> 的字段会被发送，值为 <code data-v-5d029e5f>undefined</code> 的字段会被移除。</p></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>xhrFields</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Object</code></td><td data-v-5d029e5f><code data-v-5d029e5f>{}</code></td><td data-v-5d029e5f><p data-v-5d029e5f>设置在 XMLHttpRequest 对象上的数据。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.ajax({
  url: &#39;一个跨域 URL&#39;,
  xhrFields: {
    withCredentials: true
  }
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>statusCode</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Object</code></td><td data-v-5d029e5f><code data-v-5d029e5f>{}</code></td><td data-v-5d029e5f><p data-v-5d029e5f>HTTP 状态码和函数组成的对象。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.ajax({
  statusCode: {
    404: function (xhr, textStatus) {
      alert(&#39;返回状态码为 404 时被调用&#39;);
    },
    200: function (data, textStatus, xhr) {
      alert(&#39;返回状态码为 200 时被调用&#39;);
    }
  }
});</code></pre><p data-v-5d029e5f>状态码在 200 - 299 之间、或状态码为 304 时，表示请求成功，函数参数和 <code data-v-5d029e5f>success</code> 回调的参数相同；否则表示请求失败，函数参数和 <code data-v-5d029e5f>error</code> 回调的参数相同。</p></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>dataType</code></td><td data-v-5d029e5f><code data-v-5d029e5f>String</code></td><td data-v-5d029e5f><code data-v-5d029e5f>text</code></td><td data-v-5d029e5f><p data-v-5d029e5f>服务器返回的数据类型。</p><p data-v-5d029e5f>包括：text、json</p></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>contentType</code></td><td data-v-5d029e5f><code data-v-5d029e5f>String</code></td><td data-v-5d029e5f><code data-v-5d029e5f>application/x-www-form-urlencoded</code></td><td data-v-5d029e5f>内容的编码类型。为 <code data-v-5d029e5f>false</code> 时将不设置 Content-Type。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>timeout</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Number</code></td><td data-v-5d029e5f><code data-v-5d029e5f>0</code></td><td data-v-5d029e5f>请求的超时时间（毫秒）。为 <code data-v-5d029e5f>0</code> 时表示永不超时。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>global</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Boolean</code></td><td data-v-5d029e5f><code data-v-5d029e5f>true</code></td><td data-v-5d029e5f>是否触发全局 AJAX 事件。</td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>beforeSend</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Function</code></td><td data-v-5d029e5f></td><td data-v-5d029e5f><p data-v-5d029e5f>在请求发送之前调用。返回 <code data-v-5d029e5f>false</code> 时将取消 AJAX 请求。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.ajax({
  beforeSend: function (xhr) {
    // xhr 为 XMLHttpRequest 对象
  }
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>success</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Function</code></td><td data-v-5d029e5f></td><td data-v-5d029e5f><p data-v-5d029e5f>请求成功之后调用。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.ajax({
  success: function (data, textStatus, xhr) {
    // data 为 AJAX 请求返回的数据
    // textStatus 为包含成功代码的字符串
    // xhr 为 XMLHttpRequest 对象
  }
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>error</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Function</code></td><td data-v-5d029e5f></td><td data-v-5d029e5f><p data-v-5d029e5f>请求出错时调用。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.ajax({
  error: function (xhr, textStatus) {
    // xhr 为 XMLHttpRequest 对象
    // textStatus 为包含错误代码的字符串
  }
});</code></pre></td></tr><tr data-v-5d029e5f><td data-v-5d029e5f><code data-v-5d029e5f>complete</code></td><td data-v-5d029e5f><code data-v-5d029e5f>Function</code></td><td data-v-5d029e5f></td><td data-v-5d029e5f><p data-v-5d029e5f>请求完成之后调用。</p><pre data-v-5d029e5f><code class="language-js" data-v-5d029e5f>$.ajax({
  complete: function (xhr, textStatus) {
    // xhr 为 XMLHttpRequest 对象
    // textStatus 为一个包含成功或错误代码的字符串
  }
});</code></pre></td></tr></tbody></table></div><h2 class="chapter-title mdui-text-color-theme" data-v-5d029e5f>更多常用方法 <a class="anchor" id="jq-other" data-v-5d029e5f></a></h2><p data-v-5d029e5f>注意：下面这些方法只在 MDUI 框架中存在，若你直接使用 <a href="https://github.com/zdhxiong/mdui.jq" target="_blank" data-v-5d029e5f>mdui.jq 库</a>，则不存在这些方法。</p>`,34)),d("div",{class:"mdui-table-fluid"},[d("table",{class:"mdui-table"},[d("tbody",null,[e[7]||(e[7]=d("tr",null,[d("td",null,[d("code",null,".reflow()")]),d("td",null,[d("p",null,"强制重绘当前元素。"),d("pre",null,[d("code",{class:"language-js"},"$('.box').reflow();")])])],-1)),e[8]||(e[8]=d("tr",null,[d("td",null,[d("code",null,".transition()")]),d("td",null,[d("p",null,[a("设置当前元素的 "),d("code",null,"transition-duration"),a(" 属性。")]),d("p",null,[a("可以是带单位的时间值，也可以不带单位。若不带单位，则将自动添加 "),d("code",null,"ms"),a(" 作为单位。")]),d("pre",null,[d("code",{class:"language-js"},"$('.box').transition(100);")])])],-1)),e[9]||(e[9]=d("tr",null,[d("td",null,[d("code",null,".transitionEnd()")]),d("td",null,[d("p",null,"在当前元素上添加 transitionend 事件回调。"),d("p",null,[a("回调函数的参数为 "),d("code",null,"transitionend"),a(" 事件对象，函数中的 "),d("code",null,"this"),a(" 指向当前元素。")]),d("pre",null,[d("code",{class:"language-js"},`$('.box').transitionEnd(function () {
  console.log('.box 元素的 transitionend 事件已触发');
})`)])])],-1)),e[10]||(e[10]=d("tr",null,[d("td",null,[d("code",null,".transform()")]),d("td",null,[d("p",null,[a("设置当前元素的 "),d("code",null,"transform"),a(" 属性。")]),d("pre",null,[d("code",{class:"language-js"},"$('.box').transform('rotate(90deg)')")])])],-1)),e[11]||(e[11]=d("tr",null,[d("td",null,[d("code",null,".transformOrigin()")]),d("td",null,[d("p",null,[a("设置当前元素的 "),d("code",null,"transform-origin"),a(" 属性。")]),d("pre",null,[d("code",{class:"language-js"},"$('.box').transformOrigin('top center')")])])],-1)),e[12]||(e[12]=d("tr",null,[d("td",null,[d("code",null,".mutation()")]),d("td",null,[d("p",null,"执行在当前元素及其子元素内注册的初始化函数。"),d("pre",null,[d("code",{class:"language-js"},"$('[mdui-collapse]').mutation()")])])],-1)),d("tr",null,[e[3]||(e[3]=d("td",null,[d("code",null,"$.showOverlay()")],-1)),d("td",null,[e[0]||(e[0]=d("p",null,"创建并显示遮罩，返回遮罩层的 JQ 对象。",-1)),e[1]||(e[1]=d("p",null,[a("可以传入一个整数参数，表示遮罩层的 "),d("code",null,"z-index"),a(" 样式，默认为 "),d("code",null,"2000"),a("。")],-1)),e[2]||(e[2]=d("pre",null,[d("code",{class:"language-js"},"$.showOverlay();")],-1)),d("button",{class:"mdui-btn mdui-color-theme-accent mdui-ripple",onClick:n},"显示遮罩，2 秒后自动隐藏 ")])]),e[13]||(e[13]=d("tr",null,[d("td",null,[d("code",null,"$.hideOverlay()")]),d("td",null,[d("p",null,"隐藏遮罩层。"),d("p",null,[a("如果调用了多次 "),d("code",null,"$.showOverlay()"),a(" 来显示遮罩层，则也需要调用相同次数的 "),d("code",null,"$.hideOverlay()"),a(" 才能隐藏遮罩层。可以通过传入参数 "),d("code",null,"true"),a(" 来强制隐藏遮罩层。")]),d("pre",null,[d("code",{class:"language-js"},"$.hideOverlay();")])])],-1)),d("tr",null,[e[6]||(e[6]=d("td",null,[d("code",null,"$.lockScreen()")],-1)),d("td",null,[e[4]||(e[4]=d("p",null,"锁定屏页面，禁止页面滚动。",-1)),e[5]||(e[5]=d("pre",null,[d("code",{class:"language-js"},"$.lockScreen();")],-1)),d("button",{class:"mdui-btn mdui-color-theme-accent mdui-ripple",onClick:f},"锁定屏幕，2 秒后自动解除锁定 ")])]),e[14]||(e[14]=d("tr",null,[d("td",null,[d("code",null,"$.unlockScreen()")]),d("td",null,[d("p",null,"解除页面锁定。"),d("p",null,[a("如果调用了多次 "),d("code",null,"$.lockScreen()"),a(" 来显示遮罩层，则也需要调用相同次数的 "),d("code",null,"$.unlockScreen()"),a(" 才能隐藏遮罩层。可以通过传入参数 "),d("code",null,"true"),a(" 来强制隐藏遮罩层。")]),d("pre",null,[d("code",{class:"language-js"},"$.unlockScreen();")])])],-1)),e[15]||(e[15]=d("tr",null,[d("td",null,[d("code",null,"$.throttle()")]),d("td",null,[d("p",null,"函数节流。"),d("p",null,"传入一个函数作为参数，函数的第一个参数是执行的函数，第二个参数是延迟时间，单位为毫秒。"),d("pre",null,[d("code",{class:"language-js"},`$.throttle(function () {
  console.log('这个函数最多 100ms 执行一次');
}, 100)`)])])],-1)),e[16]||(e[16]=d("tr",null,[d("td",null,[d("code",null,"$.guid()")]),d("td",null,[d("p",null,"生成一个全局唯一的 ID。"),d("pre",null,[d("code",{class:"language-js"},"$.guid();")]),d("p",null,"可以传入一个参数。当该参数值对应的 guid 不存在时，会生成一个新的 guid，并返回；当该参数对应的 guid 已存在，则直接返回已有 guid。"),d("pre",null,[d("code",{class:"language-js"},`// 下面两行代码返回值相同
$.guid('test');
$.guid('test');`)])])],-1))])])])])])],64))}});const $=i(u,[["__scopeId","data-v-5d029e5f"]]);export{$ as default};
