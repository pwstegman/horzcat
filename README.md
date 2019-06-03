# horzcat
Horizontally concatenate arrays

Written with performance in mind, using array preallocation and simple for loops to maximize speed.

## Getting Started

```bash
npm install horzcat
```

## Usage

While only two arrays are used in the below example, horzcat supports an arbitrary number of arrays as arguments

```javascript
const horzcat = require('horzcat');

let a = [
    [0, 1, 2],
    [3, 4, 5]
];

let b = [
    [6, 7],
    [8, 9],
];

let c = horzcat(a, b);
console.log(c);
/*
[
    [ 0, 1, 2, 6, 7 ],
    [ 3, 4, 5, 8, 9 ]
]
*/

```
