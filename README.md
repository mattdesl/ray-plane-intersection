# ray-plane-intersection

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Whether a 3D picking ray intersects with a plane. The plane is defined as having a `normal` [x, y, z] and `distance`. 

```js
var intersect = require('ray-plane-intersection')
var origin = [1, 0, 4]
var dir = [0, 0, -1]
var normal = [0, 0, 1]
var distance = 0

var hit = intersect(out, origin, dir, normal, distance) 

if (hit) { //collision occurred 
  console.log(hit) // [1, 0, 0]
}
```

The distance can be determined with a second point on the plane, like so:

```js
var d = -dot(normal, point)
```

PRs welcome.

## Usage

[![NPM](https://nodei.co/npm/ray-plane-intersection.png)](https://www.npmjs.com/package/ray-plane-intersection)

#### `hit = intersect(out, origin, direction, normal, distance)`

Test whether the ray `(origin, direction)` intersects with the plane `(normal, distance)`. 

If an intersection occurs, it is stored in `out` [x, y, z] and returned. Otherwise `null` is returned.

## See Also

- [get-plane-normal](https://www.npmjs.com/package/get-plane-normal)
- [find-basis-3d](https://www.npmjs.com/package/find-basis-3d)
- [ray-triangle-intersection](https://www.npmjs.com/package/ray-triangle-intersection)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/ray-plane-intersection/blob/master/LICENSE.md) for details.
