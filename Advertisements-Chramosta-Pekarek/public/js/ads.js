const adsRender = (ads) => {
    const adsTimeLine = document.getElementById("AdTimeLine")

    ads.forEach((ad) => {
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