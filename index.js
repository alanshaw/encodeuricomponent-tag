module.exports = function uri (strings, ...values) {
  return strings.map((string, i) => {
    const value = values[i] === undefined ? '' : encodeURIComponent(values[i])
    return string + value
  }).join('')
}
