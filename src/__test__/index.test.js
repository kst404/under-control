import underControl from '../index'

describe('underControl', () => {
  it('return function', () => {
    const actual = underControl({})

    expect.any(Function)
  })

  it('returns object when call returned function', () => {
    const actual = underControl({})(()=>{})

    expect.any(Object)
  })

  describe('returned object', () => {
    it('has the same shape as the input object', () => {
      const input = {
        prop1: "",
        prop2: { nestedProp21: ""}
      }

      const actual = underControl(input)(()=>{})

      const expected = {
        prop1: expect.any(Function),
        prop2: { nestedProp21: expect.any(Function)}
      }

      expect(actual).toEqual(expected)
    })

    it('calls callback', () => {
      const input = {
        prop1: "",
        prop2: { nestedProp1: ""}
      }
      const eTargetValue = { target: { value: "test" } }

      const callback = jest.fn()

      const actual = underControl(input)(callback)
      actual.prop1(eTargetValue)

      expect(callback).toBeCalled()
    })

    describe('onChange handlers', () => {
      //TODO: add test for onChange handlers
    })
  })


  it('works', () => {
    const state = {
      otherProps: "",
      controlledFragment: {
        prop1: "",
        prop2: "",
        nestedProps: {
          nestedProp1: "",
          nestedProp2: "",
        },
      },
    }

    const change = underControl(state.controlledFragment)((fragment) => {
      console.log('new data', fragment)
    })

    console.log(change)

    change.nestedProps.nestedProp1({ target: { value: 'test' } })

  })
})
