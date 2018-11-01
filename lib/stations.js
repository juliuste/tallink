'use strict'

const stations = () => Promise.resolve([
	{ type: 'station', id: 'hel', name: 'Helsinki' },
	{ type: 'station', id: 'tal', name: 'Tallinn' },
	{ type: 'station', id: 'sto', name: 'Stockholm' },
	{ type: 'station', id: 'tur', name: 'Turku' },
	{ type: 'station', id: 'rig', name: 'Riga' },
	{ type: 'station', id: 'ala', name: 'Åland' },
	{ type: 'station', id: 'vis', name: 'Visby' }
])

module.exports = stations
