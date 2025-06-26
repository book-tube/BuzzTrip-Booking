const admin = require("firebase-admin");
const { v4: uuidv4 } = require("uuid");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const airports = [
  { code: "LHR", city: "London" },
  { code: "CDG", city: "Paris" },
  { code: "FRA", city: "Frankfurt" },
  { code: "JFK", city: "New York" },
  { code: "LAX", city: "Los Angeles" },
  { code: "ZRH", city: "Zürich" },
  { code: "AMS", city: "Amsterdam" },
  { code: "DXB", city: "Dubai" },
  { code: "HND", city: "Tokyo" },
  { code: "SIN", city: "Singapore" },
  { code: "IST", city: "Istanbul" },
  { code: "BCN", city: "Barcelona" },
  { code: "VIE", city: "Vienna" },
  { code: "MUC", city: "Munich" },
  { code: "GRU", city: "São Paulo" },
];

const generateRandomTime = () => {
  const hour = Math.floor(Math.random() * 24);
  const minute = Math.floor(Math.random() * 60);
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};

const generateFlightNumber = (from, to) => {
  return `${from}${to}${Math.floor(100 + Math.random() * 900)}`;
};

const seedFlights = async () => {
  const batch = db.batch();
  let counter = 0;

  for (const from of airports) {
    for (const to of airports) {
      if (from.code === to.code) continue;

      for (let i = 0; i < 3; i++) {
        const flightData = {
          flightNumber: generateFlightNumber(from.code, to.code),
          from: from.code,
          to: to.code,
          departureTime: generateRandomTime(),
          arrivalTime: generateRandomTime(),
          seats: 180,
          price: Math.floor(Math.random() * 400) + 100,
        };

        const flightRef = db.collection("flights").doc(uuidv4());
        batch.set(flightRef, flightData);
        counter++;
      }
    }
  }

  await batch.commit();
  console.log(`✅ ${counter} flights wurden erstellt.`);
};

seedFlights().catch(console.error);
