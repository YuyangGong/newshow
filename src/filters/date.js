/* 文本月份 */
const textMonthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/* 具体单位时间的毫秒数 */
const min = 60 * 1000
const hour = min * 60
const day = hour * 24

/**
 * 将数字月份转换为文本月份, eg: 1 -> February(从0开始)
 * @param {Number} num - 数字月份
 * @return {String} str - 文本月份
 */
export function numMonth2TextMonth (num) {
  return textMonthArr[num]
}

/**
 * 将传入的时间戳, 转换为距离当前时间的相对时间字符串
 * eg: 刚刚, X分钟前, 今天xx, 昨天xx, 前天xx, xx月xx日, xx年xx月xx日
 * @param {Number} num - 时间戳
 * @return {String} str - 相对时间字符串
 */
export function fromNow (timestamp) {
  const cur = new Date()
  const curTime = +cur
  const date = new Date(timestamp)
  const diff = curTime - date
  const diffDay = getRelativeDay(curTime, date)
  // 相对目前时间, 1分钟内, 显示`刚刚`
  if (diff < min) {
    return '刚刚'
  } else if (diff < hour) {
    return `${diff / min | 0}分钟前`
  } else if (diffDay === 0) {
    return `今天 ${date.getHours()}:${date.getMinutes()}`
  } else if (diffDay === 1) {
    return `昨天 ${date.getHours()}:${date.getMinutes()}`
  } else if (diffDay === 2) {
    return `前天 ${date.getHours()}:${date.getMinutes()}`
  } else if (date.getFullYear() === cur.getFullYear()) {
    return `${date.getMonth()}月${date.getDate()}日`
  } else {
    return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`
  }
}

/* 获得cur与date的相隔的天数 */
function getRelativeDay (cur, date) {
  const alreadyTime = cur % day
  const diff = cur - date
  return (diff + day - alreadyTime) / day | 0
}
