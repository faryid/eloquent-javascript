// Need NodeJS v18 or later to run fetch API.
fetch("http://localhost:8000/", {
    method: "POST",
    body: "Hello, World!"
}).then(res => res.text()).then(console.log);
