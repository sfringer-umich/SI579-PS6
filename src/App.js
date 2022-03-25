
import './App.css';
import InputWord from './components/InputWord';
import RhymeWord from './components/RhymeWord';
import WordLabel from './components/WordLabel';
import {useState} from "react";


function App() {
  const [loadingText, setLoading] = useState('');
  const [rhymeWords, setRhymeWords] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [buttonClicked, setButton] = useState('');
  const [savedWords, setSavedWords] = useState([]);
  
  const savedWordLabel = () => {
    if (savedWords.length === 0){
      return ('(no results)')
    } else {
      return ('')
    }
  }

  return (
    <main className="container">
    <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
    <h5 className="row github-name">https://github.com/sfringer-umich/SI579-PS6.git</h5>
    <div className="row">
        <div className="col">Saved words: {savedWordLabel()}<span id="saved_words"></span>{savedWords}</div>
    </div>
    <div className="row">
        <InputWord setLoading={setLoading} 
                   setRhymeWords={setRhymeWords} 
                   setInputWord={setInputWord} 
                   setButton={setButton}
        />
        <WordLabel rhymeWordList={rhymeWords} 
                   label={inputWord} 
                   button={buttonClicked}
        />
        <RhymeWord dict={rhymeWords} 
                   setSavedWords={setSavedWords} 
                   label={buttonClicked} 
        />    
    </div>
    <div>
    <h3>{loadingText}</h3>
    </div>
</main>
  );
}

export default App;
