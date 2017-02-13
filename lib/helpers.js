'use strict'

const got = require('got')

const request = (url, opt) => {
	return got(url, {json: true, query: opt})
	.then((res) => res.body)
}

module.exports = {request}