# ARE U?

![flow][flow]

[flow]:https://img.shields.io/badge/typescript-2.6.*-blue.svg

> Run time type checker

## Install
``
npm install --save areu
``

## How to use
````javascript
// import {...} from 'areu'
import {validate, array, any, object, boolean, integer, number, string} from 'src/index'

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
    messages: array([number().required(), string().required(), any().required()])
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
    message?: [number, string, any, ...]
  }
}
*/
console.log(validate(data, schema)) // <== true

````
