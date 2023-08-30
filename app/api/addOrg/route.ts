
import axios from "axios";
import { NextResponse } from "next/server";
import robotsParser from 'robots-parser'

export async function POST(req : Request) 

{  
    let  siteMapData : String[];
    const body = await req.json();
  const {url} = body;
     try{
    

    // const response = await axios.get(Url);
    //   const content = response.data;

      
      var robots = robotsParser(url + '/robots.txt', [
        'User-agent: *',
        'Disallow: /dir/',
        'Disallow: /test.html',
        'Allow: /dir/test.html',
        'Allow: /test.html',
        'Crawl-delay: 1',
        'Sitemap:' + url +'/sitemap.xml',
        'Host: example.com'
    ].join('\n'));
   
    robots.isAllowed(url + '/test.html', 'Sams-Bot/1.0'); // true
    robots.isAllowed(url + 'dir/test.html', 'Sams-Bot/1.0'); // true
    robots.isDisallowed(url + '/dir/test2.html', 'Sams-Bot/1.0'); // true
    robots.getCrawlDelay('Sams-Bot/1.0'); // 1
    siteMapData = robots.getSitemaps(); // ['http://example.com/sitemap.xml']
    robots.getPreferredHost(); // example.com
    const response = NextResponse.json(
        { msg: "", success: true,siteMapData  }, 
        { status: 200 }
      );
      return response
    }
      catch (err) {
        console.log(err);
        return NextResponse.json({ error: err, success: false }, { status: 500 });
      }
 
}
