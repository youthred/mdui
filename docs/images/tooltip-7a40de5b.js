import{D as c}from"./Demo-5062ffc5.js";import{T as a,_ as l}from"./MyReward.vue_vue_type_script_setup_true_lang-df11eaf3.js";import{d as s,c as n,a as i,g as d,b as o,w as e,F as r,o as p,e as m,t as u}from"./index-15cb1481.js";const h={class:"chapter"},x=s({__name:"tooltip",setup(b){return(v,t)=>(p(),n(r,null,[i(a),t[4]||(t[4]=d('<h1 class="title mdui-text-color-theme">工具提示</h1><div class="intro mdui-typo"><p> Tooltip 一般用来为图标添加说明，它的内容一般是纯文本，不含图片和格式化的文本。 </p><div class="intro-module"><h3>调用方式</h3><ol><li>通过自定义属性调用</li><li>通过 JavaScript 调用</li></ol></div><div class="intro-module"><h3>相关阅读</h3><p><a href="https://www.mdui.org/zh-cn/design/1/components/tooltips.html" target="_blank">Material Design 设计指南：组件 - 工具提示</a></p></div></div>',2)),i(l,{class:"first-screen"}),t[5]||(t[5]=d('<nav class="toc mdui-text-color-theme"><ul><li><a href="#call">调用方式</a><ul><li><a href="#attr">通过自定义属性调用</a></li><li><a href="#js">通过 JavaScript 调用</a></li><li><a href="#option">参数</a></li><li><a href="#method">方法</a></li><li><a href="#event">事件</a></li></ul></li></ul></nav>',1)),o("div",h,[t[2]||(t[2]=d('<div class="mdui-typo"><h2 class="chapter-title chapter-title-first mdui-text-color-theme"> 调用方式 <a class="anchor" id="call"></a></h2><h4 class="article-title"> 通过自定义属性调用 <a class="anchor" id="attr"></a></h4><p> 通过该方式无需编写 JavaScript 代码。只需在元素上添加 <code>mdui-tooltip=&quot;<a href="#option">options</a>&quot;</code> 属性即可激活该插件。 </p></div>',1)),i(c,{"view-source":"",language:"xml","online-url":"./tooltip/demo1"},{demo:e(()=>t[0]||(t[0]=[o("div",{class:"mdui-row-xs-3"},[o("div",{class:"mdui-col mdui-text-center"},[o("button",{class:"mdui-btn mdui-btn-icon","mdui-tooltip":"{content: '打印'}"},[o("i",{class:"mdui-icon material-icons"},"local_printshop")])]),o("div",{class:"mdui-col mdui-text-center"},[o("button",{class:"mdui-btn mdui-btn-icon","mdui-tooltip":"{content: '打印', position: 'top'}"},[o("i",{class:"mdui-icon material-icons"},"local_printshop")])]),o("div",{class:"mdui-col mdui-text-center"},[o("button",{class:"mdui-btn mdui-btn-icon","mdui-tooltip":"{content: '打印', delay: 1000}"},[o("i",{class:"mdui-icon material-icons"},"local_printshop")])])],-1)])),code:e(()=>t[1]||(t[1]=[m(u(`<button class="mdui-btn mdui-btn-icon" mdui-tooltip="{content: '打印'}">
  <i class="mdui-icon material-icons">local_printshop</i>
</button>
<button class="mdui-btn mdui-btn-icon" mdui-tooltip="{content: '打印', position: 'top'}">
  <i class="mdui-icon material-icons">local_printshop</i>
</button>
<button class="mdui-btn mdui-btn-icon" mdui-tooltip="{content: '打印', delay: 1000}">
  <i class="mdui-icon material-icons">local_printshop</i>
</button>`))])),_:1}),t[3]||(t[3]=d(`<div class="mdui-typo"><h4 class="article-title"> 通过 JavaScript 调用 <a class="anchor" id="js"></a></h4><p>实例化组件：</p><pre><code class="language-js">// selector 为 CSS 选择器或 DOM 元素
// options 为配置参数，见下面的参数列表
var inst = new mdui.Tooltip(selector, options);</code></pre></div><a href="./tooltip/demo2" target="_blank" class="mdui-btn mdui-color-theme-accent">运行</a><div class="mdui-typo"><h4 class="article-title">参数 <a class="anchor" id="option"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>参数名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>position</code></td><td><code>string</code></td><td><code>auto</code></td><td> Tooltip 的位置。取值范围包括 <code>auto</code>、<code>bottom</code>、<code>top</code>、<code>left</code>、<code>right</code>。<br> 为 <code>auto</code> 时，会自动判断位置。默认在下方。优先级为 <code>bottom</code> &gt; <code>top</code> &gt; <code>left</code> &gt; <code>right</code></td></tr><tr><td><code>delay</code></td><td><code>int</code></td><td><code>0</code></td><td>延时触发，单位毫秒。</td></tr><tr><td><code>content</code></td><td><code>string</code></td><td></td><td>Tooltip 的内容。</td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">方法 <a class="anchor" id="method"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>open()</code></td><td><p>打开 Tooltip</p><p> 允许传入配置参数，以便每次打开时能修改内容，例如 <code>open({ content: &#39;new content&#39; })</code>。配置参数见上方的<a href="#option">参数</a>列表。 </p></td></tr><tr><td><code>close()</code></td><td>关闭 Tooltip</td></tr><tr><td><code>toggle()</code></td><td>切换 Tooltip 的状态</td></tr><tr><td><code>getState()</code></td><td> 返回 Tooltip 的状态。共包含四种状态（<code>opening</code>、<code>opened</code>、<code>closing</code>、<code>closed</code>）。 </td></tr></tbody></table></div></div><div class="mdui-typo"><h4 class="article-title">事件 <a class="anchor" id="event"></a></h4><div class="mdui-table-fluid"><table class="mdui-table"><thead><tr><th>事件</th><th>描述</th><th>参数</th></tr></thead><tbody><tr><td><code>open.mdui.tooltip</code></td><td>打开动画开始时，事件被触发。</td><td rowspan="4"><code>event._detail.inst</code>：实例</td></tr><tr><td><code>opened.mdui.tooltip</code></td><td>打开动画结束时，事件被触发。</td></tr><tr><td><code>close.mdui.tooltip</code></td><td>关闭动画开始时，事件被触发。</td></tr><tr><td><code>closed.mdui.tooltip</code></td><td>关闭动画结束时，事件被触发。</td></tr></tbody></table></div></div>`,5))])],64))}});export{x as default};