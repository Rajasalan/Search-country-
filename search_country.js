function rgbGenerator() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // same like i+=1; i=1+i;
        //color =color + (letters[Math.floor(Math.random() * 16)]);
    }
    return color;
}

const inputField = document.querySelector(".searchCountry");
const startingWord = document.querySelector('#startWord');
const searchWord = document.querySelector('#searchWith');
const btnSort = document.querySelector('#sorting');
const result = document.querySelector(".countries");
let searchedCountries = [];

//const result = document.querySelector(".countries");

//when focused it clear the  input field

inputField.addEventListener('focus', function () {
    inputField.value = "";
    showWorld(countryName);
})



//for loop



//btnSort.innerHTML = '<i class="fas fa-sort-alpha-up"></i>';

//working with sort up and down
function sortingFunc() {
    if (btnSort.innerHTML.includes('down')) {
        btnSort.classList.add('sortActive');
        btnSort.innerHTML = '<i class="fas fa-sort-alpha-up"></i>';
        if (searchedCountries.length > 0) {
            sortCountries(searchedCountries);
            showWorld(searchedCountries);
        } else {
            sortCountries(countryName);
            showWorld(countryName);
        }

    } else if (btnSort.innerHTML.includes('up')) {
        btnSort.classList.remove('sortActive');
        btnSort.innerHTML = '<i class="fas fa-sort-alpha-down"></i>';
        if (searchedCountries.length > 0) {
            sortCountries(searchedCountries);
            showWorld(searchedCountries);
        } else {
            sortCountries(countryName);
            showWorld(countryName);
        }


    }
}
btnSort.addEventListener('click', sortingFunc);

startingWord.addEventListener('click', function () {
    searchWord.classList.remove('sortActive');
    btnSort.classList.remove('sortActive');
    startingWord.classList.add('sortActive');
    displayCountries();
});

searchWord.addEventListener('click', function () {
    startingWord.classList.remove('sortActive');
    btnSort.classList.remove('sortActive');
    searchWord.classList.add('sortActive');
    displayCountries();
});

//enter the search word, execute function & return the result.
inputField.addEventListener('keyup', displayCountries);

function displayCountries() {
    //condition for the the on-going button to perform which function.
    if (startingWord.classList.contains('sortActive')) {
        startingWordSearch();
    } else if (searchWord.classList.contains('sortActive')) {

        anyWordSearch();
    };
};

const showWorld = ((countries) => {
    result.innerHTML = "";
    for (let i = 0; i < countries.length; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        result.appendChild(box);
        // let result = document.querySelector(".countries");
        /*  box.textContent = country_list[i]; */
        let spa1 = document.createElement("span");
        spa1.textContent = countries[i];
        spa1.setAttribute('class', 'auto-gen-div')
        spa1.style.background = rgbGenerator();
        box.appendChild(spa1);
    }
});

showWorld(countryName);

function startingWordSearch() {
    searchedCountries = countryName.filter(filterCountries => {
        return filterCountries.toUpperCase().startsWith(inputField.value.toUpperCase(), 0);
    })

    showWorld(searchedCountries);
    // result.innerHTML = `Countries starting with "<span class="words">${input.value}</span>" : <span class="nums">${countries.length}</span>`;
}

function anyWordSearch() {
    searchedCountries = countryName.filter(filterCountries => {
        return filterCountries.toUpperCase().includes(inputField.value.toUpperCase(), 0);
    })
    // sortCountries(searchedCountries);
    showWorld(searchedCountries);
    //result.innerHTML = `Countries containing "<span class="words">${input.value}</span>" : <span class="nums">${countries.length}</span>`;
}


function sortCountries(countries) {
    //check if alphabet key is down, default, no change. 
    //if up, reverse it.
    //if (btnSort.innerHTML.includes('up')) {
    countries.reverse();
    //}
}


/* startingWord.addEventListener("click", (e) => {
    searchWord.classList.remove("checked");
    //e.target.classlist.add("checked");
    inputField.addEventListener("keyup", searchCountriesByInitials);
    searchCountriesByInitials();
});

function searchCountriesByInitials() {
    clearItems();
    const searchResult = countryName.filter(country => {
        return country.toUpperCase().startsWith(inputField.value.toUpperCase());
    });

    // target where you wanna put the created box
    searchResult.forEach(element => {
        // create new divs
        const resultDiv = document.createElement("div");
        resultDiv.setAttribute("class", "country-div");
        resultDiv.style.backgroundColor = rgbGenerator();

        const resultSpan = document.createElement("span");
        resultSpan.textContent = element;

        // append created child to result section
        resultDiv.appendChild(resultSpan);
        result.appendChild(resultDiv);
    });

    // FUNCTION GENERATEDIV ENDS
} */

// function clearItems() {
//     const divsToRemove = document.querySelectorAll(".country-div");
//     divsToRemove.forEach(element => {
//         element.remove();
//     });
// }