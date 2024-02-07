
function professionalExperience(profileData){
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.professionalExperience.map(experience => {
        return`
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
            <p>
                ${experience.description}
            </p>
        `
    }).join('')

}