// ==========================================================================
// ADVANCED JAVASCRIPT FUNCTIONS DEMO
// ==========================================================================

// --- SECTION 4: IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) ---
console.log("--- 1. IIFE DEMONSTRATION ---");

(function() {
    // This variable is safely scoped inside the IIFE and cannot leak globally
    const structuralSecret = "ENCAPSULATED_TOKEN_XYZ123";
    
    console.log("Initialization logic running automatically...");
    console.log(`Securely configured system with token: ${structuralSecret}`);
})();

// Un-commenting the line below will throw a ReferenceError because the variable is protected:
// console.log(structuralSecret); 
console.log("\n");


// --- SECTION 5: FUNCTION CURRYING ---
console.log("--- 2. FUNCTION CURRYING DEMONSTRATION ---");

// Regular function taking two arguments
const standardMultiply = (a, b) => a * b;

// Curried version: A function returning another function
const curriedMultiply = (a) => {
    return (b) => {
        return a * b;
    };
};

// We can "pre-fill" the first argument to create specialized utility functions
const double = curriedMultiply(2);
const triple = curriedMultiply(3);

console.log("Standard Multiply (2 * 5):", standardMultiply(2, 5));
console.log("Curried Double (2 * 10):", double(10));
console.log("Curried Triple (3 * 10):", triple(10));
console.log("\n");


// --- SECTION 6: GENERATORS (function*) ---
console.log("--- 3. GENERATORS DEMONSTRATION ---");

function* ticketIdGenerator() {
    let id = 1001;
    while (id < 1004) {
        // The function pauses here and yields the value out to the caller
        yield `TICKET-#${id}`;
        id++;
    }
}

// Initialize the generator iterator
const iterator = ticketIdGenerator();

// Step through execution manually using .next()
console.log(iterator.next()); // { value: 'TICKET-#1001', done: false }
console.log(iterator.next().value); // 'TICKET-#1002'
console.log(iterator.next().value); // 'TICKET-#1003'
console.log(iterator.next()); // { value: undefined, done: true } (execution finished)
console.log("\n");


// --- SECTION 7: ASYNCHRONOUS FLOW (ASYNC / AWAIT) ---
console.log("--- 4. ASYNC / AWAIT DEMONSTRATION ---");

// Helper function mimicking a database latency or network request
const mockFetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 42) {
                resolve({ id: 42, username: "m_shami", role: "Engineer" });
            } else {
                reject(new Error("User database profile not found."));
            }
        }, 1500); // 1.5 second artificial delay
    });
};

// Async function to handle sequential flow cleanly without nested callbacks
async function processUserLogin(id) {
    try {
        console.log("Initiating asynchronous secure handshake...");
        
        // Execution pauses here until the promise resolves, without locking up the main thread
        const userProfile = await mockFetchUserData(id);
        
        console.log("Success! Profile fetched safely:");
        console.log(userProfile);
    } catch (error) {
        console.error("An error occurred during async handling:", error.message);
    }
}

// Execute the async flow
processUserLogin(42);
