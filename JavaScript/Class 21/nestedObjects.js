// --- SECTION 2: NESTED OBJECTS ---

const company = {
    name: "TechFlow Corp",
    location: {
        city: "San Francisco",
        state: "CA",
        coordinates: {
            lat: 37.77,
            lng: -122.41
        }
    },
    employees: [
        { id: 1, name: "Alice", role: "Developer" },
        { id: 2, name: "Bob", role: "Designer" }
    ]
};

// Accessing nested data via Dot Notation
console.log("City:", company.location.city);
console.log("Latitude:", company.location.coordinates.lat);

// Accessing the first employee's name
console.log("Lead Employee:", company.employees[1].name);

// --- OPTIONAL CHAINING (?.) ---
// Use this to prevent crashes if a property doesn't exist
const managerPhone = company.manager?.contact?.phone; 
console.log("Manager Phone:", managerPhone); // Returns 'undefined' instead of crashing the program