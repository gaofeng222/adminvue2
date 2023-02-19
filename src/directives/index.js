export const focus = {
  // 指令的定义
  inserted: async function (el) {
    console.log(el, 'el')
    // el.focus()
    let input = el.querySelector('.el-input__inner')
    // console.log(input, 'input')
    input.style.color = 'green'
  }
}
