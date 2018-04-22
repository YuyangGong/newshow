import * as dateFilters from './date'

// 包装成一个Vue插件, 将所有的filters挂载在Vue上
const filters = function (Vue) {
  ;[dateFilters].forEach(filters => {
    Object.keys(filters).forEach(filterKey => {
      Vue.filter(filterKey, filters[filterKey])
    })
  })
}

export default filters
