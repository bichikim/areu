# ARE U?

![typescript][typescript]

[typescript]:https://img.shields.io/badge/typescript-2.7.*-blue.svg

> Run time type checker

## Install
``
npm install --save areu
``

## How to use
````javascript
// import {...} from 'areu'
import {validate, array, any, object, boolean, number, string} from 'src/index'

const data = {
  age: 999,
  name: 'foo',
  bag: {
    apple: true,
    phone: false,
    candy: ['ice', 'wine', 'banana'],
    messages: [1, 'apple', 'you', 'can', 'eat']
  }
}

const schema = object({
  age: number().required(),
  name: string().required(),
  bag: object({
    apple: boolean().required(),
    phone: boolean(),
    candy: array([string()]),
    ham: boolean(),
    messages: array([number().required(), string(), any()])
  }).required(),
})
/*
interface Data{
  age: number
  name: string
  bag: {
    apple: boolean,
    phone?: boolean,
    candy: string[],
    ham?: boolean,
    message?: [number, string?, any, ...]
  }
}
*/
console.log(validate(data, schema)) // <== true

````

## Feature
* check string type
  * required
  * email
  * uuid
  * testing regular expression 
* check number
  * required
  * integer
  * integerSafe
  * min
  * max
* check object type
  * required
  * members type
  * members type deeply 
* check array type
  * required
  * length
  * min
  * max
  * members type deeply
  * members type by order
  * members type continuously
* check boolean
  * required
* check any
  * required


## Future Feature
* extend schema
* check string type
  * html
  * time
  * address
* check object type
  * length
  * max
  * min
