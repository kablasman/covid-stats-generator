// defining and selecting variables for html elements
const button = document.querySelector('.button')
const countryName = document.querySelector('.countryName')
const date = document.querySelector('.date')
const totalCases = document.querySelector('.totalCases')
const newCases = document.querySelector('.newCases')
const totalDeaths = document.querySelector('.totalDeaths')
const newDeaths = document.querySelector('.newDeaths')

//adding click event to submit button that triggers GET for API data
button.addEventListener("click", function() {

    const country = document.querySelector('#inputValue').value;
    
    function getCountryData() {
    fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/${country}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "838f5a36admsh33a1aa6c782acb4p1a2161jsndd1bd2ab601d",
        "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
    }
})
    .then(response =>response.json())
    .then(response => {
        console.log(response);

        // defining variables for API array data
        const displayCountryName = response[0]["Country"];
        const displayDate = response[0]["date"];
        const displayTotalCases = response[0]["total_cases"];
        const displayNewCases = response[0]["new_cases"];
        const displayTotalDeaths = response[0]["total_deaths"];
        const displayNewDeaths = response[0]["new_deaths"];
    
        // displaying data held in variables on index.html
        const divWrapper = document.querySelector('.display');
        divWrapper.innerHTML = `
        <table class="stats">
            <tr>
                <th class="countryName">${displayCountryName}</th>
                <th class="date">${displayDate}</th>
            </tr>
            <tr>
                <td class="totalCases">Total Cases</td>
                <td>${displayTotalCases}</td>
            </tr>
            <tr>
                <td class="newCases">New Cases</td>
                <td>${displayNewCases}</td>
            </tr>
            <tr>
                <td class="totalDeaths">Total Deaths</td>
                <td>${displayTotalDeaths}</td>
            </tr>
            <tr>
                <td class="newDeaths">New Deaths</td>
                <td>${displayNewDeaths}</td>
            </tr>
        </table>
        `
    })
    .catch(err => {
        console.error(err);
    });
    }

    // running function
    getCountryData()
})
