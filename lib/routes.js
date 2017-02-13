'use strict'

const h = require('./helpers')
const moment = require('moment')

const parseTrip = (t) => ({
	id: t.sailId + '',
	ship: t.shipCode,
	route: {
		id: t.sailPackageCode.toLowerCase(),
		name: t.sailPackageName
	},
	from: {
		id: t.cityFrom.toLowerCase(),
		pier: t.pierFrom
	},
	to: {
		id: t.cityTo.toLowerCase(),
		pier: t.pierTo
	},
	departure: new Date(t.departureIsoDate),
	arrival: new Date(t.arrivalIsoDate),
	price: +t.personPrice,
	overnight: t.isOvernight,
	rooms: t.hasRoom
})

const parseTrips = (trips) => {
	let results = []
	for(let day in trips){
		results = results.concat(trips[day].outwards.map(parseTrip))
	}
	return results
}

const routes = (from, to, dateFrom, dateTo, opt) => 
	h.request('https://booking.tallink.com/api/timetables', Object.assign({
		locale: 'en',
		country: 'DE',
		oneWay: true,
		voyageType: 'SHUTTLE',
		includeOvernight: true
	}, opt, {
		from,
		to,
		dateFrom: moment(dateFrom).format('YYYY-MM-DD'),
		dateTo: moment(dateTo).format('YYYY-MM-DD')
	})).then((r) => r.trips)
	.then(parseTrips)

module.exports = routes