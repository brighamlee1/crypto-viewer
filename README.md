# Crypto Viewer

### Description
- My app is called Crypto Viewer and I wanted to create this because I am very interested in crypto and want to make it easier to view the key details.
- My application will display the top 100 cryptocurrencies in real time and will update as the info updates.
- You will be able to click on a crypto coin and view more thorough information about it.
- You will be able to view stats that can help you learn more about crypto itself or a specific coin you would like to learn about.

### MVP User Stories
- As a user, I want to see all of the top 100 cryptocurrencies in real time and see real stats.
- As a user, I want to click on a crypto coin and view more information about it.
- As a user, I want to be able to view this application on my phone as well as my laptop.

### Post MVP User Stories
- As a user, I would like to be able to search for a crypto currency on the home page.
- As a user, I want to be able to see the latest news on crypto currency.

### APIs
- https://www.coingecko.com/en/api/documentation
- https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/

#### Response for one crypto coin: 
[
    {
        "id":"bitcoin",
        "symbol":"btc",
        "name":"Bitcoin",
        "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price":30158,
        "market_cap":573945254414,
        "market_cap_rank":1,
        "fully_diluted_valuation":633058409841,
        "total_volume":73844690228,
        "high_24h":30995,
        "low_24h":28126,
        "price_change_24h":1463.96,
        "price_change_percentage_24h":5.10194,"market_cap_change_24h":26567005306,"market_cap_change_percentage_24h":4.8535,"circulating_supply":19039081.0,
        "total_supply":21000000.0,
        "max_supply":21000000.0,
        "ath":69045,
        "ath_change_percentage":-56.339,
        "ath_date":"2021-11-10T14:24:11.849Z",
        "atl":67.81,
        "atl_change_percentage":44356.69242,
        "atl_date":"2013-07-06T00:00:00.000Z",
        "roi":null,
        "last_updated":"2022-05-13T20:04:26.224Z"
    },
]

#### Response for one news article
{
    "_type": "NewsArticle"
    "name": "Robinhood announces a new, non-custodial crypto wallet for investors to store digital assets including NFTs"
    "url": "https://www.zdnet.com/finance/blockchain/robinhood-announces-a-new-non-custodial-crypto-wallet-for-investors-to-store-digital-assets-including-nfts/"
    "image": {...}2 items
    "description": "The trading and investing company will soon let its clients have full control over their cryptocurrency assets."
    "about": [...]1 item
    "provider": [...]1 item
    "datePublished": "2022-05-18T19:43:00.0000000Z"
    "category": "ScienceAndTechnology"
}

### Wireframes
![Screen Shot 2022-05-13 at 2 37 20 PM](https://user-images.githubusercontent.com/91819733/168378465-ea25f418-a6f7-4c41-af7c-9108d1bd7f89.png)
![Screen Shot 2022-05-13 at 2 40 29 PM](https://user-images.githubusercontent.com/91819733/168378500-c56b33c7-1a77-4fd1-9e2b-ebfc4aa3edbe.png)

### Component Hierarchy
![Screen Shot 2022-05-13 at 2 57 33 PM](https://user-images.githubusercontent.com/91819733/168380883-340a6636-df62-4bd1-980d-4ba3d7352aaf.png)
