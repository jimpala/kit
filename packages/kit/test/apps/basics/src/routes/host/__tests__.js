import * as assert from 'uvu/assert';

/** @type {import('../../../../../types').TestMaker} */
export default function (test) {
	test('can access host through page store', async ({ base, page }) => {
		page.setExtraHTTPHeaders({
			'x-forwarded-host': 'forwarded.com'
		});

		await page.goto(`${base}/host`);
		assert.equal(await page.textContent('h1'), 'forwarded.com');

		// reset
		page.setExtraHTTPHeaders({});
	});
}
