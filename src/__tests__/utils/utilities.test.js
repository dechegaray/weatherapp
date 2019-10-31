import {validateObjectProperties} from '../../utils/utitities'

describe('Utilities functions', () => {
  test('returns TRUE when right properties match the object properties', () => {
    const requiredProps = ['prop1', 'prop2', 'prop3']
    const objectToTest = {prop1: 'Hello', prop2: 'World', prop3: 'Daniel'}
    const result = validateObjectProperties(requiredProps, objectToTest)
    expect(result).toBeTruthy()
  })

  test('returns FALSE when properties do not match the object properties', () => {
    const requiredProps = ['propA', 'prop2', 'prop3']
    const objectToTest = {propA: 'Hello', propB: 'World'}
    const result = validateObjectProperties(requiredProps, objectToTest)
    expect(result).toBeFalsy()
  })

  test('throws error when array is not passed to the function', () => {
    const objectToTest = {propA: 'Hello', propB: 'World'}
    expect(() => {
      validateObjectProperties('something', objectToTest)
    }).toThrowError(
      'The properties to validate the object were not provided as an Array',
    )
  })

  test('throws error when array is passed empty', () => {
    const objectToTest = {propA: 'Hello', propB: 'World'}
    expect(() => {
      validateObjectProperties([], objectToTest)
    }).toThrowError(
      'No properties were provided to validate the object (empty array)',
    )
  })
})
