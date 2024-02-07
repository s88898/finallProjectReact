import { Link } from 'react-router-dom'
import './App.css'
import BusinessDetails from './components/BusinessDetails/BusinessDetails'
import ListServices from './components/services/ListServices'

function App() {
 

  return (
    <>
      <Link to={'/admin'} >admin</Link>
     <BusinessDetails/>
     <ListServices/>
    </>
  )
}

export default App
