import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'

const FetchData = () => {
    

    const [allArticles, setArticles] = useState([])
    const [searchText, setText] = useState('')
    useEffect(() => {
       const getData = async () =>{
        try{
            const reponse = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchText}&api-key=eAakCNvEcIV5I0v6DneLt3aVNphmxBJ8`)
            const data = await reponse.json()
            setArticles(data.response.docs)
        }catch(error){
            console.log(error.stack)
        }
       }
       getData()
    },[searchText])
  
return (
    
    <div className="container">
        <SearchBar searchText={(seach) => setText(seach)} /> 
        <div className="row">
          
        {
          allArticles.map((singleArticle) =>{
              const {headline:{main}, snippet, web_url, byline:{original}, _id} = singleArticle
              return(
                <div className="col d-flex justify-content-center pb-3" >
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body" key={_id}>
                            <h5 className='card-title'>{main}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{original}</h6>
                            <p className='card-text'>{snippet}</p>
                            <a href={web_url} className="card-link">Read More...</a>
                        </div>
                    </div>
                </div>
              )
          })
        }
          
      </div>
    </div>
  )
}

export default FetchData



