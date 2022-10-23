import { Container, FilterInput } from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react';
import WordCard from '../../components/WordCard';



const Home = () => {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState("")
  
  const dictionaryApi = async () => {
    try{
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/${word}"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryApi()
  }, [word])
  
  

  return(
    <>
      <Container>
      <FilterInput type="text"placeholder="type here" value={word}
      onChange={(e) => setWord(e.target.value)}/>
      </Container>
      <WordCard />
    </>
  )
}
export default Home