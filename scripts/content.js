const input = document.getElementById("sitename")

chrome.storage.sync.get(["company"]).then((result) => {
    input.value = result.company;
}).then(() => {
    const signin = document.getElementById("submit-button")
    signin.click()
})