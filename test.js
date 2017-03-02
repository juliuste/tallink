'use strict'

const tape = require('tape')
const tallink = require('./index')

tape('tallink.journeys', (t) => {
	tallink.journeys('tal', 'hel', new Date(), new Date(), {locale: 'en'})
	.then((journeys) => {
		t.plan(21)
		t.true(journeys.length, 'journeys count')
		t.true(journeys[0].id, 'journey id')
		t.true(journeys[0].legs.length, 'journey legs count')
		t.true(journeys[0].legs[0].origin.id, 'journey leg origin id')
		t.true(journeys[0].legs[0].origin.pier, 'journey leg origin pier')
		t.true(journeys[0].legs[0].destination.id, 'journey leg destination id')
		t.true(journeys[0].legs[0].destination.pier, 'journey leg destination pier')
		t.true(+journeys[0].legs[0].departure, 'journey leg departure')
		t.true(+journeys[0].legs[0].arrival, 'journey leg arrival')
		t.true(journeys[0].legs[0].ship, 'journey leg ship')
		t.true(journeys[0].legs[0].operator==='tallink', 'journey leg operator')
		t.true(journeys[0].legs[0].mode==='ferry', 'journey leg mode')
		t.true(journeys[0].legs[0].public, 'journey leg public')
		t.true(journeys[0].legs[0].rooms===true || journeys[0].legs[0].rooms===false, 'journey leg rooms')
		t.true(journeys[0].routeInfo.id, 'journey routeInfo id')
		t.true(journeys[0].routeInfo.name, 'journey routeInfo name')
		t.true(journeys[0].price.amount>0, 'journey price amount')
		t.true(journeys[0].price.currency==='EUR', 'journey price currency')
		t.true(journeys[0].overnight===true || journeys[0].overnight===false, 'journey overnight')
		t.true(journeys[0].legs[0].origin.id == 'tal', 'journey tal->hel leg origin id')
		t.true(journeys[0].legs[0].destination.id == 'hel', 'journey tal->hel leg destination id')
	})
})

tape('tallink.stations', (t) => {
	tallink.stations()
	.then((stations) => {
		t.plan(3)
		t.true(stations.length, 'stations count')
		t.true(stations[0].id, 'station id')
		t.true(stations[0].name, 'station name')
	})
})