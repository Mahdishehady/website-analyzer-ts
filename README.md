#Website-analyzer-v2

#New frontEnd 
A Next/React/Typescript project.

#Description
Website-analyzer is a web application that leverages a custom RESTful API to fetch data from a Python backend. This project represents a significant evolution from a previous version where data was obtained by crawling websites and sitemap scraping, utilizing Python with libraries such as BeautifulSoup for data extraction and HTML, CSS, and JavaScript for data visualization.

In the new version, Website-analyzer is rebuilt from the ground up using modern technologies. It employs React and Next.js to create a highly efficient user interface, while data retrieval is facilitated through RESTful APIs. The project also introduces robust user authentication mechanisms, allowing users to create accounts, log in, and access personalized content.


# Features
* Web scraping using BeautifulSoup.
* Storing scraped data in a MongoDB database.
* Easily configurable to scrape from different news websites.
* Visualization with Highcharts: The collected data is fetched from the backend via an API and then visualized using Highcharts, allowing for interactive and informative charts to be displayed.


# Technologies Used
1. React: A JavaScript library for building user interfaces.
2. Next.js: A React framework for server-rendered applications.
3. MongoDB: A NoSQL database used for storing the scraped news data in a structured manner.
4 Custom RESTful APIs: Developed for communication between the frontend and backend.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Signup page:
![image](https://github.com/Mahdishehady/website-analyzer-ts/assets/113033930/9bb18e6c-89ff-4103-a4c2-cdd635fdaf00)


Login page:
![image](https://github.com/Mahdishehady/website-analyzer-ts/assets/113033930/f7752e04-49d3-430f-8a41-3f569e1b0330)


OverView:
![image](https://github.com/Mahdishehady/website-analyzer-ts/assets/113033930/a74cf90d-6e5c-4b91-a4e1-154ce4ebe8f3)



Analytics:
![image](https://github.com/Mahdishehady/website-analyzer-ts/assets/113033930/6d3f4fc5-52b4-4e6f-a13b-85c5389d3342)



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
