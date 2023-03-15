const fs = require('fs');
const neatCsv = require('neat-csv');

const siteCsv = process.env.SITE_CSV;

async function readSiteCsv() {
    const sites = await neatCsv(fs.readFileSync(siteCsv));
    const filteredSites = sites.filter(site => site.ignore.toLowerCase() !== 'true');
    const siteUrls = filteredSites.map(site => site.url);
    const siteStatus = sites.map(site => Number(site.code));
    return { SITES: siteUrls, STATUS: siteStatus };
}

readSiteCsv()
    .then(({SITES, STATUS}) => {
        console.log(`sites=${JSON.stringify(SITES)}` );
        console.log(`status=${JSON.stringify(STATUS)}`);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
