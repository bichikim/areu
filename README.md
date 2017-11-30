![intro](./img/intro.png)

![flow][flow]

[flow]:https://img.shields.io/badge/typescript-2.6.*-blue.svg

> Subdivide a DTL object into readable structure

## Install
``
npm install --save https://github.com/pjfactory/subdivision
``

## How to use
````javascript
import jsonData from './test/asset/data.json'
import Subdivision from './src/index'
import {ROOT_EDGE} from './src/types'

// sync way
// the result is its root vertex
const result = subdivision(jsonData, {isAsync: false})
console.log(result)
// async way
Subdivision.read(jsonData).then((result) => {
  console.log(result)
})
// sync way
console.log(Subdivision.write(result, {isAsync: false}))
// async way
Subdivision.write(jsonData).then((result) => {
  console.log(result)
})


/* a way to get edges(relations) or vertexes(objects)
=============================================
vertex -> getToEdges -> edge
                     -> edge
                     -> ...
=============================================
edge -> to -> vertex -> getToEdges -> ...
=============================================
edge <- getFromEdges <- vertex <- from <- edge
edge <-
...  <- 
=============================================
 */

/* example */
// to get a root edge. you can get edges with a edge type
const edges = result.getFirstToEdge(ROOT_EDGE)
// or
const edges = result.getToEdges(ROOT_EDGE)[0]
// or you can get it like this since the root vertex has only one root edge
const edges = result.getFirstToEdge()

/* structure
=============================================
edge
---------------------------------------------
to -> to vertex
from -> from vertex
toId -> to vertex uuid
fromId -> from vertex uuid
position -> {x, y, w, h}
type -> edge type uuid
contents -> {icon, ...}
item -> edge Data
...
=============================================
=============================================
vertex
---------------------------------------------
getFirstToEdge -> first to edge
getToEdges -> to edges
getFirstFromEdge -> first from edge
getFromEdges -> from edges
getChildren -> to vertexes
getParents -> from vertexes
contents -> {image, gps, ...}
item -> vertex Data
...
=============================================
*/

````

## Documents
``
./docs/index.html
``
