import { Container, FilterInput } from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react';

const Home = ({ world, setWorld}}) => {
  const [word, setWord] = useState("")
  const [filter, setFilter] = useState("")
  const [meanings, setMeanings] = useState("")
  
  const dictionaryApi = async () => {
    try{
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryApi()
  }, [])
  
  

  return(
    <Container>
      <FilterInput type="text"placeholder="type here" value={filter}
      onChange={(e) => setFilter(e.target.value)} />
    </Container>
  )
}
export default Home
