const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
    login: async function(req, res) {
        let {username, password} = req.body
        const db = req.app.get('db')
        let [existingUser] = await db.get_user_by_username(username)
        if(!existingUser) return res.status(401).send('Username not found')
        let result = await bcrypt.compare(password, existingUser.password)
        if (result) {
            req.session.user = {
                username: existingUser.username,
                id: existingUser.id,
                loggedIn: true,
                brandName: existingUser.brand_name,
                firstName: existingUser.first_name,
                lastName: existingUser.last_name,
                locationPickup: existingUser.location_pickup,
                city: existingUser.city,
                state: existingUser.state,
                zip: existingUser.zip,
                email: existingUser.email,
                phone: existingUser.phone,
                image: existingUser.image

            }
            res.send(req.session.user)
        } else res.status(401).send('Username or password incorrect')
    },
    async signup(req, res) {
        let {username, password} = req.body
        const db = req.app.get('db')
        let [existingUser] = await db.get_user_by_username(username)
        if (existingUser) return res.status(400).send('Username already exists')
        let salt = await bcrypt.genSalt(saltRounds)
        let hash = await bcrypt.hash(password, salt)
        let [user] = await db.create_baker([username, hash])
        req.session.user = {
            username: user.username, 
            id: user.id, 
            loggedIn: true
        }
        res.send(req.session.user)
    },
    async logout(req, res) {
        req.session.destroy()
        res.sendStatus(200)
    },

    async editProfile (req, res) {
        console.log(req.body, req.params)
        let {id} = req.params
        let {username, brandName, firstName, lastName, locationPickup, city, state, zip, email, phone, image} = req.body
        const db = req.app.get('db')
        let [profile] = await db.edit_profile([
            +id, 
            username,  
            brandName,
            firstName, 
            lastName, 
            locationPickup, 
            city , 
            state, 
            zip, 
            email, 
            phone,
            image
        ])
        req.session.user = {
            username: profile.username,
            id: profile.id,
            loggedIn: true,
            brandName: profile.brand_name,
            firstName: profile.first_name,
            lastName: profile.last_name,
            locationPickup: profile.location_pickup,
            city: profile.city,
            state: profile.state,
            zip: profile.zip,
            email: profile.email,
            phone: profile.phone,
            image: profile.image

        }
        res.send(req.session.user)
        console.log('PROFILE: ', profile);
    
    }
}