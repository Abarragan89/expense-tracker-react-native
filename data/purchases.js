// const fs = require('fs')

class Purchase {
    constructor(id, purchaseDate, purchaseName, purchasePrice) {
        this.id = id
        this.purchaseDate = purchaseDate,
        this.purchaseName = purchaseName,
        this.purchasePrice = purchasePrice
    }
}

const data = []

for (let i = 20; i <= 31; i++) {
    const purchaseId = i;
    const purchaseDate = new Date(`2023-12-${i.toString().padStart(2, '0')}`);
    const purchaseName = `product #${i}`
    const purchasePrice = Math.floor(Math.random() * 30)

    const newPurchase = new Purchase(purchaseId, purchaseDate, purchaseName, purchasePrice)
    data.push(newPurchase)
}   

// fs.writeFileSync('./dummy-data.json', JSON.stringify(data), (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('success!')
//     }
// })

// export default data;