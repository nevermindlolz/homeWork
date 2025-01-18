
async function starWarsData() {
    try{
        const baseUrl = 'https://swapi.dev/api/'
        const endpoints = ['people', 'planets']
        const requests = endpoints.map(elem => fetch(`${baseUrl}${elem}/`).then(response => {
            if (!response.ok) {
                throw new Error('error vse ploho')
            }
            return response.json()
        }))
        const [peopleData, planetsData] = await Promise.all(requests)
        console.log('Персонажи:', peopleData)
        console.log('Планеты:', planetsData)

    }
    catch (error) {
        console.error('error', error)
    }
}

starWarsData()

//почитать про деструктуризацию