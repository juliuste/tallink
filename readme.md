# tallink

JavaScript client for the [tallink](https://tallink.com) ferry journey API. Complies with the [friendly public transport format](https://github.com/public-transport/friendly-public-transport-format) (`FPTF 0.0`). Inofficial, using endpoints by *Tallink*. Ask them for permission before using this module in production.

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

The `tallink` module bundles two methods: [`stations()`](#stations) and [`journeys()`](#journeysoriginid-destinationid-startdate-enddate-opt) which follow [`FPTF`](https://github.com/public-transport/friendly-public-transport-format) `0.0`.

### stations()

tallink network. Returns a `Promise` that resolves in a list of all stations:

```js
tallink.stations().then(…)
```

would give you

```js
[
	{type: "station", id: "hel", name: "Helsinki"},
	{type: "station", id: "tal", name: "Tallinn"},
	{type: "station", id: "sto", name: "Stockholm"},
	{type: "station", id: "tur", name: "Turku"},
	{type: "station", id: "rig", name: "Riga"},
	{type: "station", id: "ala", name: "Åland"},
	{type: "station", id: "vis", name: "Visby"}
]
```

### journeys(originID, destinationID, startDate, endDate, opt)

Find journeys for a given time period (in days). Returns a `Promise` that resolves in a list of matching journeys.

```js
tallink.journeys(originID, destinationID, startDate, endDate, opt).then(…)
tallink.journeys(
	'tal', // Tallinn
	'hel', // Helsinki
	new Date('2017-03-02T00:00:00'),
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
[
	{
		type: "journey",
		id: "1565203",
		routeInfo: {
			id: "tal-hel",
			name: "Tallinn-Helsinki"
		},
		overnight: false,
		legs: [{
			origin: {
				type: "station",
				id: "tal",
				pier: "DTER"
			},
			destination: {
				type: "station",
				id: "hel",
				pier: "LSA2"
			},
			departure: "2017-03-02T07:30:00.000Z", // Date() Object
			arrival: "2017-03-02T09:30:00.000Z", // Date() Object
			ship: "MEGASTAR",
			rooms: true,
			operator: "tallink",
			mode: "ferry",
			public: true
		}],
		price: {
			amount: 36,
			currency: "EUR"
		}
	}
	// …
]
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/tallink/issues).
