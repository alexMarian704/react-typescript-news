import React from 'react'
import {useParams} from 'react-router-dom'

type Pa = {
    title: string
}

const SingleArticle:React.FC = () => {
    const title = useParams<Pa>()
    console.log(title.title)
    //`https://newsapi.org/v2/everything?q=bitcoin&pageSize=1&qInTitle=${title}&apiKey=${process.env.REACT_APP_KEY}`

    return (
        <div>
        </div>
    )
}

export default SingleArticle;
