import { useState } from 'react'
import { fetchNews } from '../fetchNews'
import { Artciles } from '../fetchNews'
import { useParams } from 'react-router-dom'

type Pa = {
    text: string
}

const Articles = () => {
    const [data, setData] = useState<Artciles[]>([])
    const [refetch, setRefetch] = useState<boolean>(false)
    const text2 = useParams<Pa>()

    const renderData = async (text: string) => {
        if (refetch === false) {
            const getData = await fetchNews(`https://newsapi.org/v2/everything?q=${text}&apiKey=${process.env.REACT_APP_KEY}`)

            if (getData.length > 0) {
                setRefetch(true);
                console.log(getData)
                setData(getData);
            }
        }
    }
    if (text2.text !== '' && refetch === false) {
        renderData(text2.text)
    }

    return (
        <div>
            <h1>{text2.text}</h1>
            {data != null && data.map((news: Artciles, i: number) => {
                if (typeof news === "object") {
                    return (
                        <div key={i}>
                            <h2><a href={`/news/${news.title}`}>{news.title}</a></h2>
                            <p>{news.description}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Articles
