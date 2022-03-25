
const WordLabel = (props) => {
    const { rhymeWordList, label, button } = props;

    const noWordLabel = () => {
        if (label.length === 0) {
            return '';
        }
        else if (rhymeWordList.length === 0) {
            return 'No rhyming words ';
        } 
    }

    const theLabel = () => {
        if (rhymeWordList.length !== 0) {
            if (button === 'Syn') {
                return `Words with a meaning similar to ${label}:`;
         } else {
                return `Words that rhyme with ${label}:`;
            }
        }
    }

    return (
        <div className="row">
            <div>{noWordLabel()}</div>
            <h3 className="col">{theLabel()}</h3>
        </div>
    )
  }
  

export default WordLabel;