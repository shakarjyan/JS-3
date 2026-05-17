// Objects + forEach დავალება
const students = [
{ name: "Angela", age: 22, hasLicence: true },
{ name: "Bob", age: 17, hasLicence: false },
{ name: "Clara", age: 19, hasLicence: true },
];

// გამოიყენე forEach და დაბეჭდე თითოეული სტუდენტის სახელი და "can drive" თუ hasLicence = true, ან "cannot drive" თუ false.

students.forEach((student) => {console.log(student.name +(student.hasLicence ? " can drive" : " cannot drive"));
});

// სავარჯიშო 5: გაქვს მასივი const prices = [500, 100, 800, 200]. დაალაგე ის კლებადობით (დიდიდან პატარისკენ).
const prices = [500, 100, 800, 200];
const sorted = prices.sort((a, b) => b - a);

console.log(sorted);

// შეიქმენი ახალი array, რომელიც არის students array-ის კლონი, მაგრამ თან დაამატე ახალი სტუდენტი: { name: "David", age: 20, hasLicence: false }
// მაგალითი
const students = [
{ name: "ნიკო", score: 85 },
{ name: "ანა", score: 60 },
{ name: "ლუკა", score: 92 },
];
// წამოვიღოთ უბრალოდ მონაცემები დომისთვის
// const axaliStudenti = [...students,
//   { name: "David", age: 20, hasLicence: false }
// ];
// console.log(axaliStudenti);

// map-ით შევქმნათ ახალი მასივი, სადაც მხოლოდ სტუდენტების სტატუსები იქნება
// const statuses = students.map((student) => {
//   return student.score >= 70 ? "გადალახა" : "ვერ გადალახა";
// });
// console.log(statuses);

// სავარჯიშო 4: გაქვს რიცხვების მასივი [10, 20, 30]. map-ის გამოყენებით შექმენი ახალი მასივი, სადაც თითოეული რიცხვი იქნება გაორმაგებული.
// const ricxvebi = [10, 20, 30];
// const gaormagebuli = ricxvebi.map((n) => n * 2);
// console.log(gaormagebuli);

// sort ალაგებს მასივს. ფრთხილად: ის ცვლის თავდაპირველ მასივს! რიცხვების სწორი სორტირებისთვის ვიყენებთ ფორმულას: (a, b) => a - b. მაგალითი: დავალაგოთ ჩვენი სტუდენტები ქულების მიხედვით ზრდადობით.
const sorted = students.sort((a, b) => a.score - b.score);
console.log(sorted);

