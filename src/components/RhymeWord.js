import { groupBy } from '../utils'

const RhymeWord = (props) => {
    const { dict, setSavedWords, label } = props;
    const groupedList = groupBy(dict, 'numSyllables');
    const finalArray = [];

    const saveButtonHandler = e => {
        setSavedWords((previousList) => {
            if (previousList.length === 0) {
                return [e.target.id]
            }
            else if (!previousList.includes(e.target.id) && previousList.length !== 0) {
                return [...previousList,", ", e.target.id];
            }
            else {
                return previousList;
            }
        });
    }


    for (let i in groupedList){
        if (label === 'Rhyme')
            finalArray.push(<h3 key={i}>Syllables: {i}</h3>);

        for (let k=0; k < groupedList[i].length; k++){
            finalArray.push(
                <li key={groupedList[i][k].word} className="list-item">
                {groupedList[i][k].word}
                
                <button className="btn btn-sm btn-outline-success save"
                        id={groupedList[i][k].word}
                        type="button"
                        onClick={saveButtonHandler}>
                        Save
                </button>
                </li>)
            }
    }
    
    return (
        <div>
            {finalArray}
        </div>
    )

  }
  
  export default RhymeWord;
