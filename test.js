var intersect = require('./')
var test = require('tape')

test('whether a picking ray intersects with a plane', function(t) {
  var out = []
  var hit = intersect(out, [1, 0, 4], [0, 0, -1], [0, 0, 1], 0)
  t.deepEqual(hit, [1, 0, 0])

  hit = intersect(out, [1, 2, 4], [0, 0, -1], [0, 0, 1], -1)
  t.deepEqual(hit, [1, 2, 1])

  hit = intersect(out, [0, 0, 4], [-1, 0, 0], [-1, 0, 0], 1)
  t.deepEqual(hit, null)

  //dot product == 0
  hit = intersect(out, [0, 0, 4], [0, 0, -1], [1, 0, 0], 1)
  t.equal(hit, null)

  hit = intersect(out, [0, 0, 4], [0, 0, -1], [1, 0, 0], 0)
  t.deepEqual(hit, [0, 0, 4])

  t.end()
})


