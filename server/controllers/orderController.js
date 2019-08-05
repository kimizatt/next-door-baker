module.exports = {
    async getOrders(req, res) {
        const db = req.app.get('db')
        let orders = await db.get_orders_by_baker()
        res.send(orders)
    },
    
    async saveOrder(req, res) {
        let {product_id, quantity, customer_name, customer_phone, baker_id, date} = req.body
        const db = req.app.get('db')
        let order = await db.save_order([product_id, quantity, customer_name, customer_phone, baker_id, date])
        res.send(order)
    }
}