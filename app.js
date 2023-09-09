fetch("https://one.akw.cam/", {
  headers: {
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "ar-AW,ar;q=0.9,en-AW;q=0.8,en;q=0.7,en-US;q=0.6",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    cookie: "_ga_LYBJP286GM=GS1.1.1694290454.1.0.1694290454.0.0.0; HstCfa4403638=1694290454603; HstCla4403638=1694290454603; HstCmu4403638=1694290454603; HstPn4403638=1; HstPt4403638=1; HstCnv4403638=1; HstCns4403638=1; _ga=GA1.2.2060981387.1694290455; _gid=GA1.2.1541865282.1694290455; _gat_gtag_UA_262083515_1=1",
  },
  referrerPolicy: "strict-origin-when-cross-origin",
  body: null,
  method: "GET",
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
