import { useLazyQuery } from '@apollo/react-hooks'
import React, { useEffect, useState } from 'react'
import {GET_POST} from './graphql/query'

/* 


const Search = () => {

    const [query, setQuery] = useState('')
    const [searchPosts, { data }] = useLazyQuery(GET_POST, {
        variables: { query: `%${query}` }
    }) //возвращает массив
    const [results, setResults] = useState([])

    useEffect(() => {
        !query && searchPosts()
        data && setResults(data.posts)
    }, [query, data, searchPosts])

    called && loading && <div>loading...</div> //called если вызывалась функция 

    return results.map(res => <SearchResult key={res.id} result={res} />)
} 

*/