const advice = document.querySelector('#advice')
const btn = document.querySelector('.btn')


btn.addEventListener('click', async function(){
    showAdvice()
})

const showAdvice = async () => {    
    try {
        const randomId =  Math.floor(Math.random() * 200)

        const adviceTitle = document.querySelector('.content-container h5')
        adviceTitle.innerHTML = `<span>ADVICE #${randomId}</span>`
    
        const res = await fetch(`https://api.adviceslip.com/advice/${randomId}`)
        const data = await res.json()
    
        advice.textContent = `"${data.slip.advice}"`
    
    } catch(err) {
        console.log('ERROR', err)
    }

}
showAdvice()
