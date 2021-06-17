const authURL = 'https://oa.app.swirecocacola.com/OAuth/Login/Index?plant=hb&redirecturl='

function getQueryString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null
}

export default {
  authURL,
  getQueryString,
}
