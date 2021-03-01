export function getNews() {
    return window.fetch( "https://newsapi.org/v2/top-headlines?country=us&apiKey=9b6de82da9cf480ea9c71469ffd5574d")
      .then((res) => {
        return res.json();
      })
      .then(res => {
          return res.articles.map(data => {
              let {title, description, url, urlToImage} = data;
              return {
                  title : title || "No Title",
                  description : description || "No description available",
                  url : url || "#",
                  urlToImage : urlToImage || "https://imgur.com/uGBUDU0"
              }
          });
      })
      .catch((err) => {
        return "Error";
      });
  };