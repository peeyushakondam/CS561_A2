const express = require('express')
const app = express()
const port = 3000

app.get('/data/2.5/weather', get_weather)

function get_weather(req,response)
{
    response.json
    ({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"base":"stations","main":{"temp":277.44,"feels_like":276.23,"temp_min":275.27,"temp_max":279.42,"pressure":1024,"humidity":79},"visibility":1609,"wind":{"speed":1.54,"deg":20},"clouds":{"all":100},"dt":1642303316,"sys":{"type":2,"id":2012991,"country":"US","sunrise":1642261568,"sunset":1642294710},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:$\{port\}`)
})
