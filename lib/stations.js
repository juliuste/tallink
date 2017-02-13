'use strict'

const stations = () => Promise.resolve([
	{id: 'hel', name: 'Helsinki'},
	{id: 'tal', name: 'Tallinn'},
	{id: 'sto', name: 'Stockholm'},
	{id: 'tur', name: 'Turku'},
	{id: 'rig', name: 'Riga'},
	{id: 'ala', name: 'Åland'},
	{id: 'vis', name: 'Visby'}
])

module.exports = stations