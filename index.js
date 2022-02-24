const match = require("nodemon/lib/monitor/match");



const app = require("express")();
const port = 8000
app.listen(port)


app.get("/", (request, respons) => {
    respons.send("hello there!")
})

app.get("/test", (request, respons) => {
    respons.send("success")
})

app.get("/names", (request, respons) => {
    let arrayOfNames = ["tikva", "yoni", "keren", "eden", "yafit"]
    respons.send(arrayOfNames)
})


app.get("/numbers", (request, respons) => {
    let arrayOfNums = []
    for (let i = 0; i <= 10; i++) {
        let randomnum = Math.floor(Math.random() * 10)
        arrayOfNums.push(randomnum);

    }
    respons.send(arrayOfNums)
})

app.get("/rndNumbers", (request, respons) => {
    let arrayOfNums = []
    let max = 0
    for (let i = 0; i <= 10; i++) {
        let randomnum = Math.floor(Math.random() * 100)
        arrayOfNums.push(randomnum);
        if (arrayOfNums[i] > max) {
            max = arrayOfNums[i]
        }

    }
    respons.send(`the biggest number is${max} from ${arrayOfNums}`)
})


app.get("/numbers/:id", (request, respons) => {
    const userIndex = request.params.id;
    let arrayOfNums = [];
    for (let userIndex = 0; userIndex <= 10; userIndex++) {
        let randomNum = Math.floor(Math.random() * 100)
        arrayOfNums.push(randomNum)

    }
    respons.send(`the num is ${arrayOfNums[userIndex]}`)
})


app.get("/isNumber/:num", (request, respons) => {
    const numFromUser = request.params.id;
    let arrayOfNums2 = []
    for (let i = 0; i <= 10; i++) {
        let random = Math.floor(Math.random() * 10)
        arrayOfNums2.push(random)
        if (numFromUser == arrayOfNums2[i]) {
            respons.send(`the number ${numFromUser} exists in the array`)
        }
        else {
            respons.send(`the number${numFromUser} is not exists in the array`)
        }

    }
})
// ==================================
// HTML
app.get('/html',(req, res)=>{
    res.sendFile(__dirname+'/index.html'
    )
})