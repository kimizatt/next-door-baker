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
    }, 

    async deleteProduct(req, res) {
        let {productId} = req.params
        const db = req.app.get('db')
        let products = await db.delete_product([+productId, req.session.user.id])
        res.send(products)
    },

    async editProduct(req, res) {
        console.log('hit edit', req.body, req.params)
        let {productId} = req.params
        let {newTitle, newDescription, newSize, newImgurl, newPrice, newProductType} = req.body
        const db = req.app.get('db')
        let product = await db.edit_product([
            +productId, 
            newTitle,
            newDescription, 
            newSize, 
            newImgurl, 
            newPrice, 
            newProductType, 
            req.session.user.id
        ])
        console.log('res.send', product);
        res.status(200).send(product)
    }
}