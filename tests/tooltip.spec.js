import puppeteer from 'puppeteer';

const APP = 'https://10up.github.io/component-tooltip/demo/';
const width = 1440;
const height = 860;

let page;
let browser;

beforeAll( async () => {

	browser = await puppeteer.launch( {
		headless: true,
	} );

	page = await browser.newPage();

	await page.setViewport( {
		width,
		height
	} );

} );

describe( 'Accessibility Tests', () => {

	test( 'Check tooltip HTML', async () => {

		await page.goto( APP );

		// make sure all tooltips have to proper role
		const tooltipArray = await page.$$eval('.a11y-tip__help', el => el.map(x => x.getAttribute("role")));
		tooltipArray.forEach(function(role) {
			expect(role).toEqual('tooltip');
		});

		// Make sure all triggers have aria-describedby attributes
		const tooltipTriggerArray = await page.$$eval('.a11y-tip__trigger', el => el.map(x => x.getAttribute("aria-describedby")));
		tooltipTriggerArray.forEach(function(desc) {
			expect(desc).not.toBe(null);
		});

	} );

	test( 'Tooltip on click', async () => {

		await page.goto( APP );

		const toolTipExpanded = await page.evaluate( 'document.querySelector(".a11y-tip__trigger--toggle").getAttribute("aria-expanded")' );
		let accessibilityTree = await page.accessibility.snapshot();

		// check aria-expanded
		await expect( toolTipExpanded ).toEqual( 'false' );

		// click the tooltip button
		await page.click('.a11y-tip__trigger--toggle');
		accessibilityTree = await page.accessibility.snapshot();

		await expect( accessibilityTree.children[9].expanded ).toBe( true );

	} );

} );

afterAll( () => {
	browser.close();
} );
