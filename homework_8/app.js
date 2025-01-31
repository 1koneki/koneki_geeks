const pricesInYuan = [15.69, 14.20, 58.5, 147, 258.96, 142.10, 5.47, 78];

const pricesInSom = pricesInYuan.map(price => `${(price * 12).toFixed(2)}сом`); // Предположим, курс 1 юань = 12 сомов
console.log(pricesInSom);

const carNumbers = [
    "01KG125ASD", "02KG478NBF", "04KG458AYH",
    "05KG789QWE", "04KG456RAF", "01KG908NVC",
    "01KG555GGG"
];

const formattedCarNumbers = carNumbers.map(number => {
    const regionCode = number.slice(0, 2); 
    const serialNumber = number.slice(4, 7); 
    const series = number.slice(7); 

    let regionName;
    if (regionCode === "01") {
        regionName = "Бишкек";
    } else if (regionCode === "02") {
        regionName = "Ош";
    } else {
        regionName = "Другой регион";
    }

    return `${serialNumber} ${series}(${regionName})`;
});
console.log(formattedCarNumbers);

const bishkekNumbers = formattedCarNumbers.filter(number => number.includes("Бишкек"));
console.log(bishkekNumbers);










 
