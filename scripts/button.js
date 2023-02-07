const button = document.getElementById("auto-submit")

chrome.storage.sync.get(["autoSubmit"]).then((result) => {
    if (result.autoSubmit) {
        button.classList.add("selected")
        button.innerText = "Auto-Submit On"
    } else {
        button.classList.remove("selected")
        button.innerText = "Auto-Submit Off"
    }
});


button.addEventListener("click", () => {
    if (button.classList.contains("selected")) {
        button.classList.remove("selected")
        button.innerText = "Auto-Submit Off"
        chrome.storage.sync.set({ autoSubmit: false }).then(() => {
            console.log("auto submit is set to " + false)
        })
    } else {
        button.classList.add("selected")
        button.innerText = "Auto-Submit On"
        chrome.storage.sync.set({ autoSubmit: true }).then(() => {
            console.log("auto submit is set to " + true)
        })
    }
})