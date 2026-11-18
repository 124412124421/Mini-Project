function searchCampaigns() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter a campaign name or category.");
        searchInput.focus();
        return;
    }

    window.location.href = "campaigns.html?search=" + encodeURIComponent(searchText);
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                searchCampaigns();
            }
        });
    }
});

function openCategory(category) {
    if (!category) {
        return;
    }

    window.location.href = "campaigns.html?category=" + encodeURIComponent(category);
}

function calculateProgress(collected, target) {
    if (target <= 0) {
        return 0;
    }

    let percentage = (collected / target) * 100;

    if (percentage > 100) {
        percentage = 100;
    }

    if (percentage < 0) {
        percentage = 0;
    }

    return Math.round(percentage);
}

function updateProgressBar(progressElement, collected, target) {
    if (!progressElement) {
        return;
    }

    const percentage = calculateProgress(collected, target);
    progressElement.style.width = percentage + "%";
}

function formatMoney(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Community Donation Platform loaded successfully.");
});