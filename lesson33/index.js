const codes = {
    "98" : "IRI",
    "44" : "UK",
    "1" : "USA"
}

console.log("98" in codes);

for (const code in codes) {
    console.log("+" + code, " : " , codes[code]);
}