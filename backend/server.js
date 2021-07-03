import express from 'express'
import dotenv from 'dotenv'
import CoinGecko from 'coingecko-api'

// DECLARATION
dotenv.config()
const app = express()
const CoinGeckoClient = new CoinGecko();

// route
app.get('/api/get-all', async (req, res) => {

    let data = await CoinGeckoClient.coins.all();
    
    res.json(data)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`SERVER RUN ON ${PORT}`))