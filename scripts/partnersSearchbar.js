const partnerSearchField = document.getElementById('partnerSearchField');
const partnerList = document.getElementById('partners-list');

const partners = [
    { name: "Top of the Stairs", type: "Club" },
    { name: "Hokey House", type: "Bar" },
    { name: "Coop", type: "Bar" },
    { name: "Sharkey's", type: "Bar" },
    { name: "Square 5 Public House", type: "Bar" },
    { name: "Milk Parlour", type: "Bar" }
];

displayPartners(partners);

partnerSearchField.addEventListener('input', function (e) {
    let searchValue = e.target.value.toLowerCase();
    let filteredPartners = partners;

    if (searchValue && searchValue.trim().length > 0) {
        filteredPartners = partners.filter(partner => {
            return partner.name.toLowerCase().includes(searchValue)
        })
    }

    displayPartners(filteredPartners);
});

function displayPartners(filteredPartners) {
    partnerList.innerHTML = "";

    filteredPartners.forEach(partner => {
        let partnerCard = document.createElement("div");
        partnerCard.classList.add("partner-card");
        let partnerImg = document.createElement("img");
        partnerImg.src = "https://unsplash.it/500/350";
        let partnerName = document.createElement("h4");
        partnerName.innerHTML = partner.name;
        let partnerType = document.createElement("p");
        partnerType.innerHTML = partner.type;

        partnerCard.appendChild(partnerImg);
        partnerCard.appendChild(partnerName);
        partnerCard.appendChild(partnerType);

        partnerList.appendChild(partnerCard);
    });
}
