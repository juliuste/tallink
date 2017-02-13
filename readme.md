# tallink

JavaScript client for the [tallink](https://tallink.com) ferry journey API.

[![npm version](https://img.shields.io/npm/v/tallink.svg)](https://www.npmjs.com/package/tallink)
[![Build Status](https://travis-ci.org/juliuste/tallink.svg?branch=master)](https://travis-ci.org/juliuste/tallink)
[![dependency status](https://img.shields.io/david/juliuste/tallink.svg)](https://david-dm.org/juliuste/tallink)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/tallink.svg)](https://david-dm.org/juliuste/tallink#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/tallink.svg?style=flat)](LICENSE)

## Installation

```sh
npm install tallink
```

## Usage

```js
const tallink = require('tallink')
```

The `tallink` module bundles two methods: `stations()` and `routes()`.

### stations()

tallink network. Returns a `Promise` that resolves in a list of all stations:

```js 
tallink.stations().then(…)
```

would give you

```js
[
	{id: "hel", name: "Helsinki"},
	{id: "tal", name: "Tallinn"},
	{id: "sto", name: "Stockholm"},
	{id: "tur", name: "Turku"},
	{id: "rig", name: "Riga"},
	{id: "ala", name: "Åland"},
	{id: "vis", name: "Visby"}
]
```

### routes(fromID, toID, startDate, endDate, opt)

Find routes for a given time period (in days). Returns a `Promise` that resolves in a list of matching routes.

```js
tallink.routes(fromID, toID, startDate, endDate, opt).then(…)
tallink.routes(
	'tal', // Tallinn
	'hel', // Helsinki
	new Date('2017-03-03T00:00:00'),
	new Date('2017-03-05T00:00:00'), // setting this to the same day as startDate would give you results for a single day
	// default options
	{
		locale: 'en', // route name language
		country: 'DE',
		includeOvernight: true
	}
).then(…)
```

would give you

```js
[{
	id: '1565204',
	ship: 'MEGASTAR',
	route: {
		id: 'TAL-HEL',
		name: 'Tallinn-Helsinki'
	},
	from: {
		id: 'TAL',
		pier: 'DTER'
	},
	to: {
		id: 'HEL',
		pier: 'LSA2'
	},
	departure: '2017-03-03T07:30:00.000Z', // Date() object
	arrival: '2017-03-03T09:30:00.000Z', // Date() object
	price: 32,
	overnight: false,
	rooms: true
}, …]
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/tallink/issues).