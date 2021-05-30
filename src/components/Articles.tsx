import React, { useState } from 'react'
import { fetchNews } from '../fetchNews'
import { Artciles } from '../fetchNews'

const Articles = () => {
    const [data, setData] = useState<Artciles[]>([])
    const [refetch, setRefetch] = useState<boolean>(false)

    const renderData = async () => {
        const getData = await fetchNews(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_KEY}`)

        if (refetch === false) {
            setData(getData);
            console.log(data)
            setRefetch(true);
        }
    }
    renderData()


    return (
        <div>

        </div>
    )
}

export default Articles
