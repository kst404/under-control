export default (fragment, handlers = {}) => (callback) => {
//TODO: implement custom handlers (second argument)

  function walker(props, keypath = []) {
    if(props && typeof props === 'object' && !Array.isArray(props)) {
      return Object.getOwnPropertyNames(props)
        .map(k => ({ [k]: walker(props[k], keypath.concat(k)) }))
        .reduce((res, el) => Object.assign(res, el), {})
    }
    else {
      return (e) => callback(keypath.concat().reverse().reduce((res, el) => ({[el]: res}), e.target.value))
    }
  }

  return walker(fragment)
}
