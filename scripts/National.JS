"use strict"

// park search dropdown
const parkSelect = document.getElementById('parkSelect');

for (const parkType of parkTypesArray) {
    
    const option = new Option(parkType, parkType);
    parkSelect.add(option)
};

// park location dropdown 
const parkLocation = document.getElementById('parkLocation');

for (const locationType of locationsArray) {
    
    const optionTwo = new Option(locationType, locationType);
    parkLocation.add(optionTwo)
};

//onclick data for dropdowns

let searchButton = document.getElementById('searchButton');
// text-muted
searchButton.onclick = () => {
    
    for (let i = 0; i < nationalParksArray.length; i++) {
        const park = nationalParksArray[i];

       if (parkLocation.value == park.State) {

           document.getElementById('parkInfo').innerHTML = `
            <div class="card col-6 offset-5" style="width: 18rem;">
              <div class="card-body">
                 <p class="card-title"> Park Location: <br> ${park.LocationName} </p>
                 <h6 class="card-subtitle mb-2 "> Location: ${park.LocationID} </h6>
                    <p class="card-text"> Park Info: 
                    
                                       ${park.Address}
                                       ${park.City}
                                       ${park.State}
                                       ${park.ZipCode}
                                       ${park.Phone}
                                       ${park.Fax}
                                       ${park.Latitude}
                                       ${park.Longitude}
                                       
                                      
                    </p>
               </div>
            </div>
            `
        }
        
    }
};
    


// onclick reset 
// let btnClear = document.querySelector('button')
// let parklocationDrop = document.getElementById('parkLocation');

// btnClear.addEventListener('click', () => {
//     selectedInputs(input => input.value = '');
// });

// parkLocationDrop.addEventListener('change', myFunction)

// function myFunction(){
//     alert('test');
// }
