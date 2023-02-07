let input = document.getElementById("company-name")

chrome.storage.sync.get(["company"]).then((result) => {
    input.value = result.company;
});

console.log(input.value)

input.addEventListener("input", function (e) {
    chrome.storage.sync.set({ company: e.target.value }).then(() => {
        console.log("Value is set to " + e.target.value);
    });
    chrome.storage.sync.get(["company"]).then((result) => {
        console.log(result.company);
    });
})