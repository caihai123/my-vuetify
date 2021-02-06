module.exports = {
  printWidth: 120, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, //指定每个缩进级别的空格数。默认2
  useTabs: false, // 使用制表符而不是空格缩进行。默认false
  semi: true, // 在语句末尾打印分号。
  singleQuote: false, // 使用单引号而不是双引号。
  jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号。
  trailingComma: "es5", //多行时尽可能打印尾随逗号。
  bracketSpacing: true, //在对象文字中的括号之间打印空格。
  jsxBracketSameLine: true, // 将>多行JSX元素的放在最后一行的末尾，而不是一个人放在下一行（不适用于自闭合元素）。
  arrowParens: "always", //箭头函数都加上空格
  vueIndentScriptAndStyle: false, // 是否缩进Vue文件中的脚本和样式标签
  endOfLine: "crlf", // 换行
};
