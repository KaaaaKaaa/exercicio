const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})
const anima = async() => {
    console.log("oi")
    await sleep(2000)
    console.log("2s depois")
}

anima()
//sleep(2000).then(() => console.log("tchau"))