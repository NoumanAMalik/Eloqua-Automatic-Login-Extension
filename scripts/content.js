const login = () => {
    const sso = document.getElementById("sso")

    if (sso) {
        sso.click()
    }

    const error = document.getElementById("errorLabel");

    if (error) {
        return;
    }

    const input = document.getElementById("sitename")

    chrome.storage.sync.get(["company", "autoSubmit"]).then((result) => {
        input.value = result.company;
        if (result.autoSubmit) {
            const signin = document.getElementById("submit-button")
            signin.click()
        }
    })
};

login()