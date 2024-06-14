import './App.css'
import MyNav from './compenents/MyNav.jsx'
import Card from './compenents/Card.jsx'

import data from './assets/data.json'
import { useState } from 'react'



function App() {
  const [datta, setDatta] = useState(data)
  const [ff, setFf] = useState([])

  function handleDataFromChild(data) {
    let h = []
    let f = datta
    
    console.log('ff ', ff)

    data.map((v, i) => {
      f.map((t, j) => {
        if(t.languages.includes(v.title)) {
          setFf([t])
          
        }
        // console.log(v, t.languages, t.languages.includes(v.title))
      })

      console.log('ff zafter:', ff)
      console.log('Datta :', datta)
      setDatta(ff)
    })
    
  }

  return (
    <>
      <MyNav sendData={handleDataFromChild} />
      
      <div className='container mx-auto'>
      {
        datta.map((d, i) => {
          return(
            <Card key={i} data={d} />
          )
        })
      }
      </div>
    </>
  )
}

export default App


{/* <MyBadge data={{title: 'tarzi', colorText: 'bg-green-100', colorBg: 'bg-green-800'}}/> */}