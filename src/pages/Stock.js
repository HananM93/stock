import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Stock () {
  const apiKey = 'e5a48b4ab836c106d646a17d66446f34'

  const params = useParams()
  const symbol = params.symbol
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=e5a48b4ab836c106d646a17d66446f34`

const [stock, setStock] = useState(null)

const getStock = async () => {
  const response = await fetch(url)
  const data = await response.json()
  setStock(data)
}

useEffect(() =>{
  getStock()
}, [])

const loaded = () => {
  return (
    <div className="stock">
      <h2>Name: {symbol}</h2>
      <h3>Price: ${stock[0].price}</h3>
    </div>
  )
}

const loading = () => {
  return <i class="fa fa-spinner fa-spin" style={{ fontSize:"24px", textAlign: "center", display: 'block'}}></i>
}

return stock ? loaded() : loading()
}

export default Stock

