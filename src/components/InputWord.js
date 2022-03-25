import {useState} from "react";


const InputWord = (props) => {
    const { setLoading, setRhymeWords, setInputWord, setButton } = props;
    const [word, setWord] = useState('');
    const [wordList, setWordList] = useState('');


    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            getRhymes();
        }
    }

    const addWords = () => {
        setRhymeWords(() => {            
            if (wordList.length === 0){
                setWordList("")
                return(
                    wordList
                )
            } else {
                return(
                    wordList
                )
            }
        });

        setInputWord(() => {
            return(word)
        });
    }       


    const getRhymes = () => {
        loadingText(true);
        fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            loadingText(false);
            setRhymeWords(data)
          })        

        setButton('Rhyme');
        addWords()
    }

    const getSyns = () => {
        fetch(`https://api.datamuse.com/words?ml=${word}`)
          .then(response => response.json())
          .then(data => setRhymeWords(data))

        setButton('Syn');
        addWords();
    }

    function loadingText(validator){
        if (validator===true) {
            setLoading( "...loading");
        }
    
        else {
            setLoading("");
        }
    }

    return(
        <div className="input-group col">
            <input 
                value={word}
                onChange={(e) => setWord(e.target.value)}
                className="form-control" 
                type="text" 
                placeholder="Enter a word" 
                id="word_input" 
                onKeyDown={keyDownHandler}
            />

            <button 
                onClick={getRhymes}
                id="show_rhymes" 
                type="button" 
                className="btn btn-primary">
                Show rhyming words
            </button>

            <button 
                id="show_synonyms" 
                type="button" 
                className="btn btn-secondary"
                onClick={getSyns}>
                Show synonyms
            </button>
        </div>
    )
}

export default InputWord;

