class Purchase {
    constructor(id, purchaseDate, purchaseName, purchasePrice) {
        this.id = id
        this.purchaseDate = purchaseDate,
        this.purchaseName = purchaseName,
        this.purchasePrice = purchasePrice
    }
}

const data = []

for (let i = 1; i <= 31; i++) {
    const purchaseId = i;
    const purchaseDate = new Date(`2023-12-${i}T04:53:29`);
    const purchaseName = `product # ${i}`
    const purchasePrice = `$${Math.floor(Math.random() * 30)}.00`

    const newPurchase = new Purchase(purchaseId, purchaseDate, purchaseName, purchasePrice)
    data.push(newPurchase)
}   

export default data;