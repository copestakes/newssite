let currentQuery = 'sports';
let currentPage = 1;

const fetchNews = async (page, q) => {
  console.log(`fetching news for ${q}, Page number ${page}...`);
  var url =
    'https://newsapi.org/v2/everything?' +
    'q=' +
    q +
    '&from=2023-10-17&' +
    'to=2023-10-17&' +
    'language=en&' +
    'pageSize=20&' +
    'page=' +
    page +
    '&sortBy=popularity&' +
    'apiKey=5cdd4d6de8d2417a90118ce78d53ac37';
  var req = new Request(url);

  //   let a = await fetch(req);
  //   let response = await a.json();
  let response = {
    status: 'ok',
    totalResults: 1998,
    articles: [
      {
        source: { id: null, name: 'Gizmodo.com' },
        author: 'Kyle Barr',
        title: 'Where the Hell Are Those 11th-Gen iPads?',
        description:
          'Despite a heap of rumors and speculation, Tuesday came and went without any new iPad news. Apple usually waits a few weeks after releasing its latest smartphones to share news about its tablets. Apple fans have been waiting for a fair bit to see the next tabl…',
        url: 'https://gizmodo.com/where-the-hell-are-those-11th-gen-ipads-1850933469',
        urlToImage:
          'https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/23056929f1f643a7604bebb6e23b0eb3.jpg',
        publishedAt: '2023-10-17T20:50:00Z',
        content:
          'Despite a heap of rumors and speculation, Tuesday came and went without any new iPad news. Apple usually waits a few weeks after releasing its latest smartphones to share news about its tablets. Appl… [+2711 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Juli Clover',
        title: 'Apple Seeds tvOS 17.1 Release Candidate to Developers',
        description:
          'Apple today seeded the release candidate of an upcoming tvOS 17.1 to developers for testing purposes, with the software coming a week after the launch of the third tvOS 17.1 beta.\n\n\n\n\n\nRegistered developers can download the tvOS 17.1 update by opting in to th…',
        url: 'https://www.macrumors.com/2023/10/17/apple-seeds-tvos-17-1-rc/',
        urlToImage:
          'https://images.macrumors.com/t/KrNLjmGnptCUVBzzHI3bfULhtY4=/2500x/article-new/2022/10/Apple-TV-2022-Feature-Blue.jpg',
        publishedAt: '2023-10-17T17:07:00Z',
        content:
          'Apple today seeded the release candidate of an upcoming tvOS 17.1 to developers for testing purposes, with the software coming a week after the launch of the third tvOS 17.1 beta.\r\nRegistered develop… [+890 chars]',
      },
      {
        source: { id: null, name: 'ReadWrite' },
        author: 'Radek Zielinski',
        title: 'Apple launches entry level pencil for every iPad',
        description:
          'Apple unveiled a new entry-level Apple Pencil on Oct. 17, designed to bring the Apple Pencil experience to even more […]\nThe post Apple launches entry level pencil for every iPad appeared first on ReadWrite.',
        url: 'https://readwrite.com/apple-launches-entry-level-pencil-for-every-ipad/',
        urlToImage:
          'https://readwrite.com/wp-content/uploads/2023/10/Apple-pencil-for-iPad.jpg',
        publishedAt: '2023-10-17T20:33:48Z',
        content:
          'Apple unveiled a new entry-level Apple Pencil on Oct. 17, designed to bring the Apple Pencil experience to even more iPad users at a lower price point.\r\nThe new Apple Pencil, which costs $79, is comp… [+2104 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Joe Rossignol',
        title: 'iOS 17.1 Improves Screen Time Syncing Across Apple Devices',
        description:
          "iOS 17.1 improves syncing of Screen Time settings across Apple devices, according to the release notes for the upcoming software update.\n\n\n\n\n\nScreen Time provides parents with settings to remotely manage a child's device, allowing them to restrict device usag…",
        url: 'https://www.macrumors.com/2023/10/17/ios-17-1-improves-screen-time-syncing/',
        urlToImage:
          'https://images.macrumors.com/t/a2PV-fDKVdJwxNdVQSsZed-dDNs=/1600x/article-new/2023/07/Screen-Time-iOS-16.jpg',
        publishedAt: '2023-10-17T17:34:43Z',
        content:
          'iOS 17.1 improves syncing of Screen Time settings across Apple devices, according to the release notes for the upcoming software update.\r\nScreen Time provides parents with settings to remotely manage… [+1046 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Joe Rossignol',
        title:
          'Rumor Report Card: New Apple Pencil Announced Instead of New iPads',
        description:
          'Over the past four days, there were several conflicting rumors about Apple announcing new iPads, a new Apple Pencil, or a combination of those two things. In the end, the only product announced was a lower-cost Apple Pencil with a USB-C port.\n\n\n\n\n\nBelow, we h…',
        url: 'https://www.macrumors.com/2023/10/17/new-apple-pencil-rumor-report-card/',
        urlToImage:
          'https://images.macrumors.com/t/ldU_CDrL3JlkzoAjM8lb1RFGGEc=/1960x/article-new/2023/10/New-iPads-and-Apple-Pencil-Rumor-Report-Card-Feature.jpg',
        publishedAt: '2023-10-17T16:10:49Z',
        content:
          'Over the past four days, there were several conflicting rumors about Apple announcing new iPads, a new Apple Pencil, or a combination of those two things. In the end, the only product announced was a… [+203 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Juli Clover',
        title: '32-Inch iMac With Mini-LED Display Rumored to Launch in 2025',
        description:
          'A higher-end iMac with a mini-LED 32-inch display will come out in 2025, according to Apple analyst Ming-Chi Kuo. Kuo does not specify, but this machine could be positioned as an "‌iMac‌ Pro" to replace the 2017 model that Apple discontinued two years ago.\n\n\n…',
        url: 'https://www.macrumors.com/2023/10/17/32-inch-imac-coming-in-2025/',
        urlToImage:
          'https://images.macrumors.com/t/cz6OHKoATPugpNQoxRXqJW5eBfQ=/1626x/article-new/2022/01/iMac-Pro-2022-27-and-24-iMac.jpg',
        publishedAt: '2023-10-17T18:58:05Z',
        content:
          'A higher-end iMac with a mini-LED 32-inch display will come out in 2025, according to Apple analyst Ming-Chi Kuo. Kuo does not specify, but this machine could be positioned as an "‌iMac‌ Pro" to repl… [+1024 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Juli Clover',
        title:
          'Veterans Day Apple Watch Activity Challenge Taking Place November 11',
        description:
          'Apple plans to launch its next Apple Watch Activity Challenge on Saturday, November 11, to honor the upcoming Veterans Day holiday in the United States.\n\n\n\n\n\nApple Watch owners can earn the Veterans Day award by doing any workout for 11 minutes or more on Nov…',
        url: 'https://www.macrumors.com/2023/10/17/veterans-day-activity-challenge-2023/',
        urlToImage:
          'https://images.macrumors.com/t/Ews9FWsCJnK-EGOjM1kZtr2ntgM=/1600x/article-new/2022/10/veterans-day-2022-activity-badge.jpg',
        publishedAt: '2023-10-17T18:34:48Z',
        content:
          'Apple plans to launch its next Apple Watch Activity Challenge on Saturday, November 11, to honor the upcoming Veterans Day holiday in the United States.\r\nApple Watch owners can earn the Veterans Day … [+612 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Juli Clover',
        title: 'Apple Seeds macOS Sonoma 14.1 Release Candidate to Developers',
        description:
          'Apple today seeded the release candidate version of an upcoming macOS Sonoma 14.1 update to developers for testing purposes, with the update coming one week after the launch of the third 14.1 beta.\n\n\n\n\n\nRegistered developers can opt-in to the beta through the…',
        url: 'https://www.macrumors.com/2023/10/17/apple-seeds-fourth-beta-of-macos-sonoma-14-1-rc/',
        urlToImage:
          'https://images.macrumors.com/t/hlTPUK2T2TO3h1-KxJcbOulRzRY=/1600x/article-new/2023/06/sonoma-desktop-wwdc.jpg',
        publishedAt: '2023-10-17T17:09:09Z',
        content:
          'Apple today seeded the release candidate version of an upcoming macOS Sonoma 14.1 update to developers for testing purposes, with the update coming one week after the launch of the third 14.1 beta.\r\n… [+1365 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Joe Rossignol',
        title: 'Apple Announces Updated iPad 10 With eSIM Support in China',
        description:
          'Apple today announced an updated version of the cellular 10th-generation iPad with eSIM support in mainland China. Apple says the device will be available to pre-order in mainland China starting October 19 and released on October 25.\n\n\n\n\n\nChina Unicom is curr…',
        url: 'https://www.macrumors.com/2023/10/17/ipad-10-with-esim-support-mainland-china/',
        urlToImage:
          'https://images.macrumors.com/t/lsP30kgB1pSiITwjgS8YbWv501k=/2000x/article-new/2022/10/10th-Gen-iPad-Feature-Fanned-Gray.jpg',
        publishedAt: '2023-10-17T19:45:57Z',
        content:
          'Apple today announced an updated version of the cellular 10th-generation iPad with eSIM support in mainland China. Apple says the device will be available to pre-order in mainland China starting Octo… [+725 chars]',
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Juli Clover',
        title: 'Apple Expands Vision Pro Test Labs to New York City and Sydney',
        description:
          'Apple today announced that it is expanding its Vision Pro developer labs to New York City, New York and Sydney, Australia to give developers additional locations where the new headset can be tested with their apps.\n\n\n\n\n\nVision Pro developer labs first launche…',
        url: 'https://www.macrumors.com/2023/10/17/apple-vision-pro-lab-new-york-sydney/',
        urlToImage:
          'https://images.macrumors.com/t/WPnszPn7EMlcNVnpszlk3Nucuec=/2500x/article-new/2023/06/Apple-Vision-Pro-with-battery-Feature-Orange.jpg',
        publishedAt: '2023-10-17T20:03:55Z',
        content:
          'Apple today announced that it is expanding its Vision Pro developer labs to New York City, New York and Sydney, Australia to give developers additional locations where the new headset can be tested w… [+1467 chars]',
      },
      {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Khamosh Pathak',
        title: 'Use This Extension to Block Sponsored Ads on YouTube',
        description:
          'There are many ways to watch YouTube ad-free (I highly recommend YouTube Premium). But even if you shell out $13.99 per month to remove autoplay ads on YouTube, you still can’t get rid of sponsorship ads. No matter how you watch YouTube, a popular creator may…',
        url: 'https://lifehacker.com/use-this-extension-to-block-sponsored-ads-on-youtube-1850932708',
        urlToImage:
          'https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d0d5695105b38a7a32bab928fbf10793.jpg',
        publishedAt: '2023-10-17T16:00:00Z',
        content:
          'There are many ways to watch YouTube ad-free (I highly recommend YouTube Premium). But even if you shell out $13.99 per month to remove autoplay ads on YouTube, you still cant get rid of sponsorship … [+1811 chars]',
      },
      {
        source: { id: 'ars-technica', name: 'Ars Technica' },
        author: 'Samuel Axon',
        title: 'Apple introduces a new Pencil for the iPad—its cheapest yet',
        description:
          "A cheaper option is welcome, but Apple's Pencil lineup is now a bit confusing.",
        url: 'https://arstechnica.com/gadgets/2023/10/apple-introduces-a-new-pencil-for-the-ipad-its-cheapest-yet/',
        urlToImage:
          'https://cdn.arstechnica.net/wp-content/uploads/2023/10/Apple-Pencil-USB-C-sliding-cap-760x380.jpg',
        publishedAt: '2023-10-17T19:54:58Z',
        content:
          '2 with \r\n<ul><li>\r\n The new $79 Apple Pencil. \r\n</li><li>\r\n The USB-C port is hidden under the cap. \r\n</li><li>\r\n Like the pricier second-generation Pencil, it can attach magnetically to recent iPad … [+2554 chars]',
      },
      {
        source: { id: null, name: 'Boing Boing' },
        author: 'Rob Beschizza',
        title: 'Apple stores to update products in their boxes',
        description:
          "There's something faintly unnerving about Apple keeping the boxed iPhones in Apple Stores remotely updated—but it will be damned convenient.\n\n\n\n\nAccording to a report by Mark Gurman in his latest Power On newsletter, Apple has developed a unique system that l…",
        url: 'https://boingboing.net/2023/10/17/apple-stores-to-update-products-in-their-boxes.html',
        urlToImage:
          'https://i0.wp.com/boingboing.net/wp-content/uploads/2022/10/iphone.jpg?fit=1200%2C918&ssl=1',
        publishedAt: '2023-10-17T13:33:58Z',
        content:
          "If there's something faintly unnerving about Apple keeping the boxed iPhones in Apple Stores remotely updated, consider how obvious the idea is, at least, given modern wireless charging and data tech… [+1089 chars]",
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Mitchel Broussard',
        title:
          "Deals: Apple's 10th Gen iPad Drops to $399 in All Colors ($50 Off)",
        description:
          "Apple's 10th generation 64GB Wi-Fi iPad is on sale for $399.00 today on Amazon, down from $449.00. Amazon has all four colors at this price, including Blue, Pink, Silver, and Yellow.\n\n\n\nNote: MacRumors is an affiliate partner with Amazon. When you click a lin…",
        url: 'https://www.macrumors.com/2023/10/17/deals-apples-10th-gen-ipad-2/',
        urlToImage:
          'https://images.macrumors.com/t/ivNpS2o2jNYiCbyLRv-pd0YPPt4=/2880x/article-new/2023/04/10th-Gen-iPad-Feature-Deals-399-2.jpg',
        publishedAt: '2023-10-17T15:13:39Z',
        content:
          "Apple's 10th generation 64GB Wi-Fi iPad is on sale for $399.00 today on Amazon, down from $449.00. Amazon has all four colors at this price, including Blue, Pink, Silver, and Yellow.\r\nNote: MacRumors… [+1034 chars]",
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Hartley Charlton',
        title:
          'Apple CEO Tim Cook Visits China Amid Reports of Lower iPhone 15 Sales',
        description:
          "Apple CEO Tim Cook is visiting China amid reports that iPhone 15 sales are down compared to last year's iPhone 14 models (via Bloomberg).\n\n\n\n\n\nCook visited an Apple's Taikoo Li store in Chengdu to watch a local gaming tournament for the major Tencent game \"Ho…",
        url: 'https://www.macrumors.com/2023/10/17/cook-visits-china-amid-reports-of-iphone-15-sales/',
        urlToImage:
          'https://images.macrumors.com/t/DgeWhZXP16SVkVojez0afvioDks=/1600x/article-new/2023/10/Tim-Cook-iPhone-15-launch.jpg',
        publishedAt: '2023-10-17T11:55:00Z',
        content:
          "Apple CEO Tim Cook has made a surprise visit to China amid reports that iPhone 15 sales are down in the country compared to last year's iPhone 14 models (via Bloomberg).\r\nCook visited an Apple's Taik… [+1047 chars]",
      },
      {
        source: { id: null, name: 'MacRumors' },
        author: 'Juli Clover',
        title:
          'Apple Seeds iOS 17.1 and iPadOS 17.1 Release Candidates to Developers',
        description:
          'Apple today seeded the release candidate versions of iOS 17.1 and iPadOS 17.1 to developers for testing purposes, with the betas coming one week after Apple released the third betas of iOS 17.1 and iPadOS 17.1.\n\n\n\n\n\nRegistered developers are able to opt into …',
        url: 'https://www.macrumors.com/2023/10/17/apple-seeds-ios-17-1-rc/',
        urlToImage:
          'https://images.macrumors.com/t/97FXyx341iHHmStMiwfo3_7KHOE=/2500x/article-new/2023/09/iOS-17.1-Feature-Purple.jpg',
        publishedAt: '2023-10-17T17:09:43Z',
        content:
          'Apple today seeded the release candidate versions of iOS 17.1 and iPadOS 17.1 to developers for testing purposes, with the betas coming one week after Apple released the third betas of iOS 17.1 and i… [+2836 chars]',
      },
      {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Emily Long',
        title:
          'Where to Get Roadside Assistance Coverage (and Why You Need It)',
        description:
          'No vehicle is completely immune to the risk of a flat tire or a dead battery, which can be inconvenient at best and dangerous at worst. Roadside assistance does the work of locating and dispatching a tow truck or service vehicle for you, which comes in handy …',
        url: 'https://lifehacker.com/how-to-find-roadside-assistance-1850930049',
        urlToImage:
          'https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/77779dcccb84ec41dec34f271f3e0e4a.jpg',
        publishedAt: '2023-10-17T15:00:00Z',
        content:
          'No vehicle is completely immune to the risk of a flat tire or a dead battery, which can be inconvenient at best and dangerous at worst. Roadside assistance does the work of locating and dispatching a… [+3638 chars]',
      },
      {
        source: { id: null, name: 'Lifehacker.com' },
        author: 'Jake Peterson',
        title: 'What to Do When YouTube Warns You About Your Ad-Blocker',
        description:
          'YouTube plus an ad-blocker is a fantastic experience. You can watch video after video to your heart’s content, without constant interruptions from loud, occasionally unskippable commercials. But ads are how YouTube makes its money, so they’re not too happy wh…',
        url: 'https://lifehacker.com/youtube-ad-blocker-popup-1850934372',
        urlToImage:
          'https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/778b39adaedfce4ef74715c25ef6742e.jpg',
        publishedAt: '2023-10-17T20:30:00Z',
        content:
          'YouTube plus an ad-blocker is a fantastic experience. You can watch video after video to your hearts content, without constant interruptions from loud, occasionally unskippable commercials. But ads a… [+2963 chars]',
      },
      {
        source: { id: 'the-verge', name: 'The Verge' },
        author: 'Jennifer Pattison Tuohy',
        title:
          'Ecobee Smart Doorbell Camera review: even better with the thermostat',
        description: 'Now you can see your doorbell on your thermostat.',
        url: 'https://www.theverge.com/23919864/ecobee-smart-doorbell-camera-review',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/U9mmYEeXpzRX4t0fZf2ZZkhmOUM=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25000857/236841_Ecobee_smart_doorbell_review_JTuohy_0001.jpg',
        publishedAt: '2023-10-17T13:00:00Z',
        content:
          "This is the first doorbell that can stream a live view to your thermostat. Yes, it sounds weird, but trust me its good.\r\nByJennifer Pattison Tuohy, a smart home reviewer who's been testing connected … [+24137 chars]",
      },
      {
        source: { id: null, name: '9to5Mac' },
        author: 'Michael Potuck',
        title: 'Apple Pencil vs Apple Pencil vs Apple Pencil: What’s the deal?',
        description:
          'Apple has unveiled an all-new Apple Pencil today. It’s got USB-C and a mix of features from the premium while holding some back to keep the price tag at $50 below the high-end model. Read along for how Apple Pencil USB-C vs Apple Pencil 2 vs 1 shakes out.\n\n\n\n…',
        url: 'https://9to5mac.com/2023/10/17/apple-pencil-usb-c-vs-apple-pencil-2/',
        urlToImage:
          'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/apple-pencil-usb-c-vs-apple-pencil-2.webp?resize=1200%2C628&quality=82&strip=all&ssl=1',
        publishedAt: '2023-10-17T17:14:03Z',
        content:
          'Apple has unveiled an all-new Apple Pencil today. It’s got USB-C and a mix of features from the premium Apple Pencil 2 while holding some back to keep the price tag at $50 below the high-end model. R… [+3282 chars]',
      },
    ],
  };

  //   console.log(JSON.stringify(response));

  let str = '';
  resultCount.innerHTML = response.totalResults;
  for (let item of response.articles) {
    str =
      str +
      `<div class="card my-3 mx-3" style="width: 18rem;">
                <img height="230" src="${
                  item.urlToImage
                }" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column ">
                    <h5 class="card-title">${item.title.slice(0, 23)}</h5>
                    <p class="card-text">${item.description.slice(
                      0,
                      250
                    )}...</p>
                    <a href="${
                      item.url
                    }" target="_blank" class="btn btn-primary mt-auto">Read More</a>
                </div>
                </div>`;
  }
  document.querySelector('.content').innerHTML = str;
};

fetchNews(1, currentQuery);

search.addEventListener('click', (e) => {
  e.preventDefault();
  let query = searchInput.value;
  currentQuery = query;
  fetchNews(1, query);
});

politics.addEventListener('click', (e) => {
  e.preventDefault();
  let query = searchInput.value;
  currentQuery = 'politics';
  fetchNews(currentPage, currentQuery);
});
weather.addEventListener('click', (e) => {
  e.preventDefault();
  let query = searchInput.value;
  currentQuery = 'weather';
  fetchNews(currentPage, currentQuery);
});
sports.addEventListener('click', (e) => {
  e.preventDefault();
  let query = searchInput.value;
  currentQuery = 'sports';
  fetchNews(currentPage, currentQuery);
});
tech.addEventListener('click', (e) => {
  e.preventDefault();
  let query = searchInput.value;
  currentQuery = 'tech';
  fetchNews(currentPage, currentQuery);
});

prev.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    fetchNews(currentPage, currentQuery);
  }
});
next.addEventListener('click', (e) => {
  e.preventDefault();
  currentPage++;
  fetchNews(currentPage, currentQuery);
});
