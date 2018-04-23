/**
 * 将字节数(KB)转换为相应的size字符串, eg: 1024 -> 1MB,
 * 目前只能转换为TB, GB, MB, KB
 * @param {Number} num - 字节数
 * @return {String} str - 最大size单位字符串
 */
export function transformSize (num) {
  const sizeArr = ['KB', 'MB', 'GB']
  const roundSize = num => `${Math.round(num * 10) / 10} ${sizeArr[i]}`
  let i = 0
  const len = sizeArr.length
  for (; i < len; i++) {
    if (num < 1024) {
      return roundSize(num)
    }
    num = num / 1024
  }
  return roundSize(num)
}
