const test = require('tape')
const uri = require('.')

test('should encode URI values', (t) => {
  t.plan(1)
  const cat = 'big horses'
  const q = 'saddles & bears'
  const actual = uri`/category/${cat}?q=${q}`
  const expected = `/category/${encodeURIComponent(cat)}?q=${encodeURIComponent(q)}`
  t.equal(actual, expected, 'URI components were encoded')
  t.end()
})
