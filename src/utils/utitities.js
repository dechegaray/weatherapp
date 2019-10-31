export function validateObjectProperties(properties, objectToValidate) {
  if (!Array.isArray(properties)) {
    throw new Error(
      'The properties to validate the object were not provided as an Array',
    )
  }

  if (properties.length === 0) {
    throw new Error(
      'No properties were provided to validate the object (empty array)',
    )
  }

  const validProperties = properties.filter(property =>
    objectToValidate.hasOwnProperty(property),
  )

  if (validProperties.length !== properties.length) {
    return false
  }

  return true
}
