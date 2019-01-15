# generator-ajsbase
> Yeoman Gulp Generator Base for AngularJS

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![npm version][npm-image]][npm-url]

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ajsbase using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

Simply run a global install using your terminal and you're good to go!

```bash
npm install -g yo generator-ajsbase
```

## List generators

```bash
yo --generators
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## Generators

Available generators:

* [ajsbase:controller](#controller)
* [ajsbase:directive](#directive)
* [ajsbase:filter](#filter)
* [ajsbase:service](#service)
* [ajsbase:provider](#provider)
* [ajsbase:factory](#factory)
* [ajsbase:value](#value)
* [ajsbase:constant](#constant)
* [ajsbase:decorator](#decorator)
* [ajsbase:component](#component)

### Controller
Generates a controller in `./[src-destdir]/controllers`.
Generates a test controller in `./[test-destdir]/controllers`.

Example:
```bash
yo ajsbase:controller --help
yo ajsbase:controller controller-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Directive
Generates a directive in `./[src-destdir]/directives`.
Generates a test directive in `./[test-destdir]/directives`.

Example:
```bash
yo ajsbase:directive --help
yo ajsbase:directive directive-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Filter
Generates a filter in `./[src-destdir]/filters`.
Generates a test filter in `./[test-destdir]/filters`.

Example:
```bash
yo ajsbase:filter --help
yo ajsbase:filter filter-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Service
Generates an AngularJS service in `./[src-destdir]/services`.
Generates a test service in `./[test-destdir]/services`.

Example:
```bash
yo ajsbase:service --help
yo ajsbase:service service-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Provider
Generates an AngularJS provider in `./[src-destdir]/services`.
Generates a test service in `./[test-destdir]/services`.

Example:
```bash
yo ajsbase:provider --help
yo ajsbase:provider provider-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Factory
Generates an AngularJS factory in `./[src-destdir]/services`.
Generates a test service in `./[test-destdir]/services`.

Example:
```bash
yo ajsbase:factory --help
yo ajsbase:factory factory-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Value
Generates an AngularJS value in `./[src-destdir]/services`.
Generates a test service in `./[test-destdir]/services`.

Example:
```bash
yo ajsbase:value --help
yo ajsbase:value value-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Constant
Generates an AngularJS constant in `./[src-destdir]/services`.
Generates a test service in `./[test-destdir]/services`.

Example:
```bash
yo ajsbase:constant --help
yo ajsbase:constant constant-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Decorator
Generates an AngularJS service decorator in `./[src-destdir]/decorators`.
Generates a test service decorator in `./[test-destdir]/decorators`.

Example:
```bash
yo ajsbase:decorator --help
yo ajsbase:decorator service-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

### Component
Generates an AngularJS component in `./[src-destdir]/components`.
Generates a test component in `./[test-destdir]/components`.

Example:
```bash
yo ajsbase:component --help
yo ajsbase:component component-name [src-destdir: default '.'] [test-destdir: default 'test/spec']
```

## References

[Generator AngularJS Web Application](https://github.com/yadickson/generator-ajsweb)

[Generator AngularJS Library](https://github.com/yadickson/generator-ajslib)

## License

GPL-3.0 © [Yadickson Soto](https://github.com/yadickson)


[travis-image]: https://travis-ci.org/yadickson/generator-ajsbase.svg
[travis-url]: https://travis-ci.org/yadickson/generator-ajsbase

[coveralls-image]: https://coveralls.io/repos/github/yadickson/generator-ajsbase/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/generator-ajsbase

[npm-image]: https://badge.fury.io/js/generator-ajsbase.svg
[npm-url]: https://badge.fury.io/js/generator-ajsbase
