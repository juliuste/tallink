'use strict'

const h = require('./helpers')
const moment = require('moment')

const parseJourney = (t) => ({
	type: 'journey',
	id: t.sailId + '',
	routeInfo: {
		id: t.sailPackageCode.toLowerCase(),
		name: t.sailPackageName,
	},
	overnight: t.isOvernight,
	legs: [{
		origin: {
			type: 'station',
			id: t.cityFrom.toLowerCase(),
			pier: t.pierFrom
		},
		destination: {
			type: 'station',
			id: t.cityTo.toLowerCase(),
			pier: t.pierTo
		},
		departure: new Date(t.departureIsoDate),
		arrival: new Date(t.arrivalIsoDate),
		ship: t.shipCode,
		rooms: t.hasRoom,
		operator: 'tallink',
		mode: 'ferry',
		public: true
	}],
	price: {
		amount: +t.personPrice,
		currency: 'EUR'
	}
})

const parseJourneys = (journeys) => {
	let results = []
	for(let day in journeys){
		results = results.concat(journeys[day].outwards.map(parseJourney))
	}
	return results
}

const journeys = (origin, destination, dateStart, dateEnd, opt) => 
	h.request('https://booking.tallink.com/api/timetables', Object.assign({
		locale: 'en',
		country: 'DE',
		oneWay: true,
		voyageType: 'SHUTTLE',
		includeOvernight: true
	}, opt, {
		from: origin,
		to: destination,
		dateFrom: moment(dateStart).format('YYYY-MM-DD'),
		dateTo: moment(dateEnd).format('YYYY-MM-DD')
	})).then((r) => r.trips)
	.then(parseJourneys)

module.exports = journeys