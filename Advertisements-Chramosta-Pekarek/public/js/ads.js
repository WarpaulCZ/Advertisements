function json(response) {
    return response.json()
}

const fetchAds = () => {
    fetch('/advertisements')
    .then(status)
    .then(json)
    .then( (data) => {
        adsRender(data)
    })
    .catch( (error) => { renderErrorMessage(error) })
}

const adsRender = (ads) => {
    const adsTimeLine = document.getElementById("AdTimeLine")

    ads.forEach(function (ad) {
        const adElement = document.createElement('div')
        const adTopic = document.createElement('h2')
        const adDescription = document.createElement('p')

        adTopic.textContent = ad.topic
        adDescription.textContent = ad.description

        adElement.appendChild(adTopic)
        adElement.appendChild(adDescription)
        
        adsTimeLine.appendChild(adElement)
    });
}

window.onload = fetchAds()