let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let clearAllBtn = document.getElementById("clear-all-btn");
let countryList = [];
let countrySelect = document.getElementById("country");
let flagImage = document.getElementById("flag-image");
let resetBtn = document.getElementById("reset-btn");
let form = document.getElementById("form");
let leadsDiv = document.getElementById("leads");
let totalLeads = [];

window.addEventListener("load", async (e) => {
    try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images", {
            method: "GET",
        });
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        const result = await res.json();
        countryList = result.data;
        addCountryList();

        const savedLeads = localStorage.getItem("leads");
        totalLeads = savedLeads ? JSON.parse(savedLeads) : [];
        if (totalLeads.length) {
            totalLeads.forEach((lead) => {
                const selectedCountry = countryList.find(
                    (countryObject) => countryObject.name === lead?.country
                );
                console.log(selectedCountry);
                const eachLead = document.createElement("div");
                eachLead.innerHTML = `
                                    <img src="${selectedCountry?.flag}" alt="${lead?.country} flag"/>
                                    <p class="fullname">${lead?.fullname}</p>
                                    <p class="username">&bull; @${lead?.username}</p>
                                    <p class="email">${lead?.email}</p>
                                `;
                eachLead.setAttribute("class", "lead");
                leadsDiv.append(eachLead);
            });
        }
    } catch (error) {
        console.error("Error fetching country data:", error);
    }
});

function addCountryList() {
    countryList.forEach((countryObject) => {
        const { name, flag } = countryObject;
        const option = document.createElement("option");
        option.innerText = name;
        option.setAttribute("value", name);
        countrySelect.append(option);
        if (name === "India") {
            option.selected = true;
        }
    });
    updateFlag();
}

countrySelect.addEventListener("change", updateFlag);

function updateFlag() {
    const selectedCountry = countryList.find(
        (countryObject) => countryObject.name === countrySelect.value
    );

    flagImage.setAttribute("src", selectedCountry.flag);
    flagImage.setAttribute("alt", `${selectedCountry.name} flag`);
}

resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fullname.value = "";
    username.value = "";
    email.value = "";
    password.value = "";
    countrySelect.value = "India";
    updateFlag();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    totalLeads = [
        ...totalLeads,
        {
            fullname: fullname.value,
            username: username.value,
            email: email.value,
            password: password.value,
            country: countrySelect.value,
        },
    ];

    localStorage.setItem("leads", JSON.stringify(totalLeads));

    const selectedCountry = countryList.find(
        (countryObject) => countryObject.name === countrySelect.value
    );
    const newLead = document.createElement("div");
    newLead.innerHTML = `
                        <img src="${selectedCountry?.flag}" alt="${countrySelect.value} flag"/>
                        <p class="fullname">${fullname.value}</p>
                        <p class="username">&bull; @${username.value}</p>
                        <p class="email">${email.value}</p>
                    `;

    newLead.setAttribute("class", "lead");
    leadsDiv.append(newLead);
    fullname.value = "";
    username.value = "";
    email.value = "";
    password.value = "";
    countrySelect.value = "India";
    updateFlag();
});

clearAllBtn.addEventListener("click", (e) => {
    localStorage.removeItem("leads");
    while (leadsDiv.firstChild) {
        // will run until we have a child (div.firstChild != null)
        leadsDiv.removeChild(leadsDiv.firstChild);
    }
});
