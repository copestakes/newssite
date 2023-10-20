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

  let a = await fetch(req);
  let response = await a.json();
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
