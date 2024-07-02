const KEYWORDS = [
    "Platforms",
    "Desktop Apps",
    "Libraries",
    "Mobile Apps",
    "Websites",
    "Education",
    "Deployments",
    "Testing"
];

const greeting = document.querySelector(".greeting") as HTMLElement;
if (!greeting) {
    throw new Error("No greeting found");
}

function showNext() {
    const nextValue = KEYWORDS.shift();
    if (!nextValue) {
        throw new Error("Unexpected empty stack");
    }
    KEYWORDS.push(nextValue);

    greeting.innerHTML = `&nbsp;${nextValue}`;
    greeting.classList.remove("hidden");
    greeting.classList.add("shown");

    setTimeout(() => {
        greeting.classList.add("hidden");
        greeting.classList.remove("shown");

        setTimeout(showNext, 2000);
    }, 8000);
}

showNext();
