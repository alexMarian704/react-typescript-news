import { useState } from 'react'

export default function Main() {
    const [text, setText] = useState<string>('')
    return (
        <div>
            <input type="text" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (setText(e.target.value))} />
            <a href={`/${text}`}>Search</a>
            <h1>{text}</h1>
        </div>
    )
}
