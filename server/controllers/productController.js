module.exports = {
    async getAllProducts(req, res) {
        const db = req.app.get('db')
        let products = await db.get_all_products()
        res.send(products)
    } 
}