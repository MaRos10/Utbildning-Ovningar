interface Customer {
  name: string;
  lastName: string;
  phoneNumber: number;
}

interface Dog {
  age: number;
  breed: string;
  chipNumber: number;
  img: string;
  name: string;
  owner: Customer; // ägaren är av typen Customer
  present: boolean;
  sex: string;
}

// Funktion för att hämta hunddata från API
async function getDogs() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs"
    );
    // Parsar JSON-svaret till en array av Dog-objekt
    const dogsData: Dog[] = await response.json(); // Hämta och typdefiniera som Dog[]
    console.log(dogsData);

    // Skapar en Map för att lagra unika kunder baserat på deras tel.nr
    const customers = new Map<number, Customer>();

    // Itererar genom alla hundar och lägger till deras ägare i Map:en om de inte redan finns där
    dogsData.forEach((dog) => {
      const owner = dog.owner;
      if (!customers.has(owner.phoneNumber)) {
        customers.set(owner.phoneNumber, owner);
      }
    });

    // Hämta HTML-element
    const customersElement = document.getElementById(
      "customers"
    ) as HTMLElement;
    const dogsElement = document.getElementById("dogs") as HTMLElement;

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
  } catch (error) {
    console.error("Något gick fel vid hämtning av datan:", error);
  }
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
