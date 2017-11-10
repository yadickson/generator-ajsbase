# generator-ajsbase
> Yeoman Gulp Generator Base for AngularJS

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ajsbase using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ajsbase
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

* [ajsbase:directive](#directive)
* [ajsbase:filter](#filter)
* [ajsbase:service](#service)
* [ajsbase:provider](#provider)
* [ajsbase:factory](#factory)
* [ajsbase:value](#value)
* [ajsbase:constant](#constant)
* [ajsbase:decorator](#decorator)
* [ajsbase:component](#component)

### Directive
Generates a directive in `./directives`.

Example:
```bash
yo ajsbase:directive --help
yo ajsbase:directive directive-name
```

### Filter
Generates a filter in `./filters`.

Example:
```bash
yo ajsbase:filter --help
yo ajsbase:filter filter-name
```

### Service
Generates an AngularJS service in `./services`.

Example:
```bash
yo ajsbase:service --help
yo ajsbase:service service-name
```

### Provider
Generates an AngularJS provider in `./services`.

Example:
```bash
yo ajsbase:provider --help
yo ajsbase:provider provider-name
```

### Factory
Generates an AngularJS factory in `./services`.

Example:
```bash
yo ajsbase:factory --help
yo ajsbase:factory factory-name
```

### Value
Generates an AngularJS value in `./services`.

Example:
```bash
yo ajsbase:value --help
yo ajsbase:value value-name
```

### Constant
Generates an AngularJS constant in `./services`.

Example:
```bash
yo ajsbase:constant --help
yo ajsbase:constant constant-name
```

### Decorator
Generates an AngularJS service decorator in `./decorators`.

Example:
```bash
yo ajsbase:decorator --help
yo ajsbase:decorator service-name
```

### Component
Generates an AngularJS component in `./components`.

Example:
```bash
yo ajsbase:component --help
yo ajsbase:component component-name
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

[dependencies-image]: https://david-dm.org/yadickson/generator-ajsbase/status.svg
[dependencies-url]: https://david-dm.org/yadickson/generator-ajsbase?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/generator-ajsbase/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/generator-ajsbase?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/generator-ajsbase/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/generator-ajsbase

[npm-image]: https://badge.fury.io/js/generator-ajsbase.svg
[npm-url]: https://badge.fury.io/js/generator-ajsbase
