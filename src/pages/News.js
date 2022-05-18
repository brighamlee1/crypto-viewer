import { useEffect, useState } from 'react';

function News() {
    const [news, setNews] = useState(null)
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
            'X-RapidAPI-Key': '335948f7b6msh667c6017fe2a1bap19998ejsn4ec79ba28cab'
        }
    };
    const url = 'https://bing-news-search1.p.rapidapi.com/news/search?q=crypto&count=25&freshness=Day&textFormat=Raw&safeSearch=Off';

    const getNews = async () => {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            setNews(data);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    if (!news) {
        return (
            <h1>Loading ... </h1>
        )
    }
    const newsArticles = news.value;
    return (
        <section>
            <div className="placeholder">
            </div>
            <h1 className="news-title">Latest Crypto Currency News</h1>
            <div className="articles-container">
                {
                    newsArticles.map((news, idx) => {
                        return (
                            <a className="article-link" href={news.url} key={idx} target="_blank">
                                <div className="news-articles">
                                    <div className="article">
                                        {(!news.image) ? <p></p> : <img src={news.image.thumbnail.contentUrl} alt={news.category} />}
                                        <h2>{news.name}</h2>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default News;