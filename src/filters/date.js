const textMonthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/**
 * 将数字月份转换为文本月份, eg: 1 -> February(从0开始)
 * @param {Number} num - 数字月份
 * @return {String} str - 文本月份
 */
export function numMonth2TextMonth (num) {
  return textMonthArr[num]
}
