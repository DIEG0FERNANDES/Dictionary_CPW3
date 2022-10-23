import {Card} from './styles'

type Props = {
    word: Word
    meanings: Word
}

const WordCard = ({word, meanings}: Props) => {
    return (
        <Card className="meanings">
           {word === "" ?(<span className="subTitle">start word here</span>):(meanings.map((mean)=>mean.meanings.map((item)=>item.definitions.map((def)=>(<div>
            className="singleMean"
            style={
                {backgroundColor: "white", color: "black"}
            }
            <b>{def.definition}</b>
           </div>)))))}
        </Card>
        
    )
}

export default WordCard
