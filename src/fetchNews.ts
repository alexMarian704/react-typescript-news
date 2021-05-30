import { useEffect } from "react"

export type Artciles = {
    source: object
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
    results?:number
}

type DateFetch = {
    status: string
    totalResults: number
    articles: Artciles[]
}

export const fetchNews = async (url: string) => {
    const data: DateFetch = await ((await fetch(url)).json())
 
    // return data.articles.map((article: Artciles) => ({
    //     ...article,
    //     results:data.totalResults
    // }));
    let array:any[] = []
    data.articles.map((article: Artciles) =>{
            array.push(article);
    })

    return [data.totalResults , ...array]
}