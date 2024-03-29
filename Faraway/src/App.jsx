import { useState } from 'react'
import Head from './modules/head'
import Input from './modules/input'
import Packagelist from './modules/packagelist'
import Clear from './modules/Clear'
import Footer from './modules/Footer'

function App() {

  let[itemsArray,setItemsArray] = useState([])
  // console.log(setItemsArray(itemsArray));
  return (
 <>
  <Head />
  <Input setitemsArray={setItemsArray} items = {itemsArray}/>
  <Packagelist itemsArray={itemsArray} setItemsArray={setItemsArray} />
  <Clear itemsArray={itemsArray} setItemsArray={setItemsArray}  />
  <Footer />
 </>
  )
}

export default App
