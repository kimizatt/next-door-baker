module.exports = {
    async getAllProducts(req, res) {
        const db = req.app.get('db')
        let products = await db.get_all_products()
        res.send(products)
    },

    async saveProduct(req, res) {
        let {title, description, size, img_url, price, product_type} = req.body
        const db = req.app.get('db')
        let products = await db.save_product([title, description, size, img_url, price, product_type, req.session.user.id ])
        res.send(products)
    }
}