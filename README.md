# Javascript / Node SDK written in Typescript for the NameParse Service

A fast way to add the [www.nameparse.com](https://www.nameparse.com) service into your Javascript / Typescript / Node projects.

## Installation

The recommended way to install the NameParse SDK is through Composer.

```shell script
npm install nameparse-js
```

## Usage

```javascript
const np = new NameParse({ key: NAMEPARSE_KEY });
const results = await np.parse("Chris Schuld");
console.log(results);
```

output:
```
{
    id: 'LeMKGGKp2o2yCGQNzLZriW',
    name: 'Chris Schuld',
    first: 'Chris',
    middle: '',
    last: 'Schuld',
    cached: false
}
```

## Usage with Details

You can also ask the API for the extended details from the parse

```javascript
const np = new NameParse({ key: NAMEPARSE_KEY, details: true });
const results = await np.parse("Chris Schuld");
console.log(results);
```

output:
```
{
    id: 'Ax323GGKp212yCGQxLZriW',
    name: 'Chris Schuld',
    first: 'Chris',
    middle: '',
    last: 'Schuld',
    details: {
        given: 'Chris',
        sur: 'Schuld',
        middle: '',
        title: '',
        initials: '',
        suffix: '',
        precursor: ''
    },
    cached: false
}
```

## Tests

Tests are executed via Jest.

```shell script
npm run test
```
