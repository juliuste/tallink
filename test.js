'use strict'

const tape = require('tape')
const tallink = require('./index')

tape('tallink.routes', (t) => {
	tallink.routes('tal', 'hel', new Date(), new Date(), {locale: 'en'})
	.then((routes) => {
		t.plan(16)
		t.true(routes.length, 'routes count')
		t.true(routes[0].id, 'route id')
		t.true(routes[0].ship, 'route ship')
		t.true(+routes[0].departure, 'route departure')
		t.true(+routes[0].arrival, 'route arrival')
		t.true(routes[0].from.id, 'route from id')
		t.true(routes[0].from.pier, 'route from pier')
		t.true(routes[0].to.id, 'route to id')
		t.true(routes[0].to.pier, 'route to pier')
		t.true(routes[0].route.id, 'route route id')
		t.true(routes[0].route.name, 'route route name')
		t.true(routes[0].price, 'route price')
		t.true(routes[0].overnight===true || routes[0].overnight===false, 'route overnight')
		t.true(routes[0].rooms===true || routes[0].rooms===false, 'route overnight')
		t.true(routes[0].from.id == 'tal', 'route tal->hel from id')
		t.true(routes[0].to.id == 'hel', 'route tal->hel to id')
	})
})

tape('tallink.routes', (t) => {
	tallink.stations()
	.then((stations) => {
		t.plan(3)
		t.true(stations.length, 'stations count')
		t.true(stations[0].id, 'station id')
		t.true(stations[0].name, 'station name')
	})
})