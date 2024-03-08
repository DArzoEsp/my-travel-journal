import './App.css'
import Header from '../components/header.jsx'
import Journal from '../components/journal.jsx'
import cardData from '../components/data.jsx'

function App() {
  const data = cardData.map(data => {
    return (
      <Journal 
        {...data}
      />
        
    )
  })

  return (
    <div>
      <Header></Header>
      <div>
        {data}
      </div>
    </div>
  )
}

export default App
