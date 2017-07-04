export default (fragment, handlers = {}) => (callback) => {
//TODO: write test for custom handlers (second argument)

  function runner(props, keypath = []) {
    if(props && typeof props === 'object' && !Array.isArray(props)) {
      return Object.getOwnPropertyNames(props)
        .map(k => ({ [k]: runner(props[k], [...keypath, k]) }))
        .reduce((res, el) => Object.assign(res, el), {})
    }
    else {
      const reversedKeypath = [...keypath].reverse()
      return (e) => callback(reversedKeypath.reduce((res, el) => ({ [el]: res }), e.target.value))
    }
  }

  return { ...runner(fragment), ...handlers }
}
