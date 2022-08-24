const Address = require('../model/Address');
const User = require('../model/User');

module.exports = {

    async index(req, res){
        const  { user_id } = req.params;

        console.log(user_id)

        const user = await User.findByPk(user_id,{
            include: { association: "addresses" }
        });

        res.json(user);

    },



    async store(req, res){
        const { user_id } = req.params;

        const { zipcode, strert, number } = req.body;

        const user = await User.findByPk(user_id);
        console.log(user_id);
        if(!user){
            return res.status(404).json({ error: 'User Not Found' });
        }

        const addresses = await Address.create({
            zipcode, 
            strert, 
            number,
            user_id
        })

        return res.json(addresses)

    } 
}