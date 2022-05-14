const BadRequestException = require('./exception/BadRequestException')
const pageScraper = require('./pageScraper')
const { browser } = require('./utils')

module.exports = async (req, res) => {
	const browserInstance = await browser.startBrowser()

	const { EdpNo, CatId } = req.query
	if (!EdpNo) {
		throw new BadRequestException(`Invalid EdpNo param`)
	}

	if (!CatId) {
		throw new BadRequestException(`Invalid CatId param`)
	}

	try {
		const query = new URLSearchParams({ EdpNo, CatId })
		const url = `${process.env.WEBSITE_LINK}?${query.toString()}`

		console.log(url)
		const data = await pageScraper(browserInstance, { url })
		browserInstance.close()

		return res.json(data)
	} catch (err) {
		console.log("Could not resolve the browser instance => ", err)

		browserInstance.close()
	}
}
