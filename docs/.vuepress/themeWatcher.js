// .vuepress/themeWatcher.js

// 创建一个 MutationObserver 来观测主题类的变化
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      // 在这里处理主题类的变化
      const newThemeClass = mutation.target.getAttribute('class');
      // 相应地更新 Vue 组件的 themeMode 数据属性
      // 例如，你可以触发一个自定义事件来通知组件
      document.dispatchEvent(new CustomEvent('themeChanged', { detail: newThemeClass }));
    }
  }
});

// 开始观测 body 元素的属性变化（例如类名）
const bodyElement = document.body;
observer.observe(bodyElement, { attributes: true });

export default observer;
