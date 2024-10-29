var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Funktion för att hämta hunddata från API
function getDogs() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs");
            // Parsar JSON-svaret till en array av Dog-objekt
            const dogsData = yield response.json(); // Hämta och typdefiniera som Dog[]
            console.log(dogsData);
            // Skapar en Map för att lagra unika kunder baserat på deras tel.nr
            const customers = new Map();
            // Itererar genom alla hundar och lägger till deras ägare i Map:en om de inte redan finns där
            dogsData.forEach((dog) => {
                const owner = dog.owner;
                if (!customers.has(owner.phoneNumber)) {
                    customers.set(owner.phoneNumber, owner);
                }
            });
            // Hämta HTML-element
            const customersElement = document.getElementById("customers");
            const dogsElement = document.getElementById("dogs");
            // Visa datan om elementet för kunder resp hundar finns
            if (customersElement) {
                customersElement.innerHTML = "<h2>Customers</h2>";
                customers.forEach((customer) => {
                    customersElement.innerHTML += `
            <p>${customer.name} ${customer.lastName}, ${customer.phoneNumber}</p>
          `;
                });
            }
            if (dogsElement) {
                dogsElement.innerHTML = "<h2>Dogs</h2>";
                dogsData.forEach((dog) => {
                    dogsElement.innerHTML += `
            <p>${dog.name}, Breed: ${dog.breed}, Age: ${dog.age}</p> 
          `;
                });
            }
        }
        catch (error) {
            console.error("Något gick fel vid hämtning av datan:", error);
        }
    });
}
getDogs();
/* För API
async function getDogs() {
  const response = await fetch(
    "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs"
  );
  const data: Dog[] = await response.json();
  console.log(data);
}

console.log(getDogs()); */
