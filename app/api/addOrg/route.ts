
import axios from "axios";
import { NextResponse } from "next/server";
import robotsParser from 'robots-parser'
import Sitemapper from "sitemapper"
export async function POST(req: Request) {
    let siteMapData: String[];
    const body = await req.json();
    const { url } = body;
    try {


        const robotsTxtRes = await axios.get(url + '/robots.txt');
        const robotsTxtContent = robotsTxtRes.data;
        if (!robotsTxtContent)
            return NextResponse.json({ msg: "No robots.txt", success: false }, { status: 500 });

        let robots = robotsParser(url, [
            'User-agent: *',
            robotsTxtContent
        ].join('\n'));

        robots.isAllowed(url + '/test.html', 'Sams-Bot/1.0'); // true
        robots.isAllowed(url + 'dir/test.html', 'Sams-Bot/1.0'); // true
        robots.isDisallowed(url + '/dir/test2.html', 'Sams-Bot/1.0'); // true
        robots.getCrawlDelay('Sams-Bot/1.0'); // 1
        siteMapData = robots.getSitemaps(); // ['http://example.com/sitemap.xml']
        robots.getPreferredHost(); // example.com
        const response = NextResponse.json(
            { msg: "", success: true, siteMapData },
            { status: 200 }
        );


        







        return response
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ error: err, success: false }, { status: 500 });
    }

}
