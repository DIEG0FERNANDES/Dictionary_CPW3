import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import routes from './routes'

const App = () => {
  const elements = useRoutes(routes)

  return (
    <>
      <Header />
      {elements}
    </>
  )
}

export default App
