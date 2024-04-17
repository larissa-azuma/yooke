import React from 'react'
import Card from './Components/Card/card'
import Button from './Components/Button/button'
import Footer from './Components/Footer/footer'
import From from './Components/Form/from'
import Home from './Pages/Home/home'

const App = () => {
  return (
    <div>
        <Home/>
        <Card/>
        <Button/>
        <Footer/>
        <From/>
    </div>
  )
}

export default App