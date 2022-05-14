module.exports = async (browser, params = {}) => {
	const { url } = params

	const page = await browser.newPage()

	console.log(`Navigating to ${url}...`)

	await page.goto(url)

	await page.waitForSelector('#CustomerReviewsBlock')

	const result = await page.$$eval('#customerReviews', customerReview => {
		return customerReview.map(el => {
			const commentHeading = el.querySelector('#customerReviews > .review > .rightCol > blockquote > h6').textContent
			const comment = el.querySelector('#customerReviews > .review > .rightCol > blockquote > p').textContent
			const rating =  el.querySelector('#customerReviews > .review > .leftCol .itemRating > strong').textContent
			const reviewers = el.querySelectorAll('#customerReviews > .review > .leftCol .reviewer > dd')
			const reviewer = reviewers[0].textContent
			const reviewDate = reviewers[1].textContent

			return {
				commentHeading,
				comment,
				rating,
				reviewDate,
				reviewer
			}
		})
	})

	return result
}
