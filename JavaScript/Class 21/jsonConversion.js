// --- SECTION 3: JSON (STRINGIFY & PARSE) ---

const userProfile = {
    username: "coder123",
    isActive: true,
    skills: ["JS", "Node", "HTML"],
    // Methods are IGNORED by JSON
    login() {
        console.log("Logging in...");
    }
};

// 1. Stringify: Convert JS Object -> JSON String (for sending to an API)
const jsonString = JSON.stringify(userProfile);

console.log("JSON Output (Note: login method is gone):");
console.log(jsonString); 
console.log(typeof jsonString); // "string"

// 2. Parse: Convert JSON String -> JS Object (for use in your code)
const incomingData = '{"username":"dev_master","isActive":false,"skills":["Python"]}';
const parsedObject = JSON.parse(incomingData);

console.log("Back to JS Object:");
console.log(parsedObject.skills); // "dev_master"