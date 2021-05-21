// fetch api is in all modern browsers
const weatherForm = document.querySelector("form");
const cityInput = document.querySelector("[title='city']");
const stateInput = document.querySelector("[title='state']");
const messageOne = document.querySelector("#message-one");
const messageTwo = document.querySelector("#message-two");

// event listener
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    const state = stateInput.value;

    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    fetch(`http://localhost:3001/weather?city=${city}&state=${state}`).then(
        (res) => {
            res.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error;
                } else {
                    messageOne.textContent = data.location;
                    messageTwo.textContent = data.forecast;
                }
            });
        }
    );
});
