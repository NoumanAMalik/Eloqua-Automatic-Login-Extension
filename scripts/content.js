const sso = document.getElementById("sso")

if (sso) {
    sso.click()
}

const input = document.getElementById("sitename")

chrome.storage.sync.get(["company"]).then((result) => {
    input.value = result.company;
}).then(() => {
    const signin = document.getElementById("submit-button")
    signin.click()
})