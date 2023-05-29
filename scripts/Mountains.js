"use strict "

//html elements
const mountainDrop = document.getElementById('mountainDrop');


// mountain dropdown 
for (const mountain of mountainsArray) {

    const optionOne = new Option(mountain.name, mountain.name);
    mountainDrop.add(optionOne)
    
};

// mountain button
const mountainSelect = document.getElementById('mountainSelect');
mountainSelect.onclick = () => {
    for (let i = 0; i < mountainsArray.length; i++) {
        const mountain = mountainsArray[i];

       if (mountainDrop.value == mountain.name) {

        document.getElementById('mountainInput').innerHTML = `
        <div class="card col-6 offset-4" style="width: 18rem;">
        <img src="./images/${mountain.img}" class="card-img-top" >
        <h6 class="card-title">   ${mountain.name} </h6>
        <div class="card-body">
          <p class="card-text">  Description: ${mountain.desc}</p>
          <p>  Elevation:  ${mountain.elevation} </p>
        </div>
      </div>
        
        `
        
    }


}
};
