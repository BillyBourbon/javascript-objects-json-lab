const digitalClock = document.getElementById(`digitalClock`)
const clockNode = document.createElement(`div`)

digitalClock.appendChild(clockNode) 

const updateClocks = () =>{
    let date = new Date()
    updateDigitalClock(date)
    updateAnalogueClock(date)
}

const updateDigitalClock = (date) => {
    let dateText = date.toLocaleTimeString(`en-US`, {hour:"2-digit", minute:"2-digit", second:"2-digit"})
    clockNode.innerHTML = dateText
}

const updateAnalogueClock = (date) => {
    const hourHand = document.getElementById("hrHand")
    const minuteHand = document.getElementById("minHand")
    const secondHand = document.getElementById("secondHand")
    
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    if(hours > 12) hours -= 12
    
    hours += ( minutes / 60 )
    
    secondHand.style.transform = `rotate(${seconds * 6 - 90}deg)`
    minuteHand.style.transform = `rotate(${minutes * 6 - 90}deg)`
    hourHand.style.transform = `rotate(${hours * 30 - 90}deg)`
}

setInterval(updateClocks, 1000)
updateClocks()

