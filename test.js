const test = require('tape')
const encode = require('.')

test('should encode URI values', (t) => {
  t.plan(1)
  const cat = 'big horses'
  const q = 'saddles & bears'
  const actual = encode`/category/${cat}?q=${q}`
  const expected = `/category/${encodeURIComponent(cat)}?q=${encodeURIComponent(q)}`
  t.equal(actual, expected, 'URI components were encoded')
  t.end()
})
