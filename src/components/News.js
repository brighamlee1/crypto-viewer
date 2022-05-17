import { useEffect, useState } from 'react';

function News() {
    const [news, setNews] = useState(null)
    const apiKey = `3b876d6ebdae4061ac48b6e1d00c663f`;
    const url = `http://newsapi.org/v2/everything?q=crypto&sortBy=popularity&apiKey=${apiKey}`;

    const getNews = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setNews(data);
    }

    useEffect(() => {
        getNews()
    }, [])

    if (!news) {
        return (
            <h1>Loading ... </h1>
        )
    }
    const newsArticles = news.articles;
    return (
        <section>
            <h1 className="news-title">Latest Crypto Currency News</h1>
            <div className="articles-container">
                {
                    newsArticles.map((news, idx) => {
                        return (
                            <a className="article-link" href={news.url} target="_blank">
                                <div className="news-articles" key={news.url}>
                                    <div className="article">
                                        <img src={news.urlToImage} />
                                        <h2>{news.title}</h2>
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