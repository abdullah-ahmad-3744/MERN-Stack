import './App.css'
import Card from './components/Card'


const data = [
  {
    "id": 1,
    "title": "Card 1",
    "description": "This is a short description for Card 1."
  },
  {
    "id": 2,
    "title": "Card 2",
    "description": "This is a short description for Card 2."
  },
  {
    "id": 3,
    "title": "Card 3",
    "description": "This is a short description for Card 3."
  }
]

function App() {

  return (
  <>
  <div className="main-container">
    <div className="cards">
      <Card  id={data[0].id} title={data[0].title} description={data[0].description}/>
      <Card  id={data[1].id} title={data[1].title} description={data[1].description}/>
      <Card  id={data[2].id} title={data[2].title} description={data[2].description}/>
    </div>
  </div>
  </>)
}

export default App
