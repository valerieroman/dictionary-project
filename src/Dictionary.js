import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import './Dictionary.css';

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword); 
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleDictionResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionResponse);

        let pexelsApiKey = "563492ad6f91700001000001a89c33479aff4508b3ff9e8e9b9540f1";

        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        axios.get(pexelsApiUrl, 
            { headers: {"Authorization" :    `Bearer ${pexelsApiKey}` },
        })
        .then(handlePexelsResponse);

    }


    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
        
        if (loaded) {
            return (
            <div className="Dictionary">
             <section>
                 <h1>What word do you want to look up?</h1>
               <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true}
                placeholder="Search for a word🔍"
                onChange={handleKeywordChange}
                 />
               </form>
                <div className="hint">
                    suggested words: sunset, journal, yoga, plant, serendipity...
                </div>
               </section>
               <Results results={results} />
            </div>
            );
        } else {
            load();
            return "Loading";
        }
    }

