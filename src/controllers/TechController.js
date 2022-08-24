const Tech = require('../model/Tech');
const User = require('../model/User');

module.exports = {
    async index(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'techs', through: { attributes: [] }}
        });

        return res.json({ user})
    },
    
    async store(req, res){
        const { user_id } = req.params;

        const { name } = req.body;

        const user = await User.findByPk(user_id);
        console.log(user_id);
        if(!user){
            return res.status(404).json({ error: 'User Not Found' });
        }

        const [ tech ] = await Tech.findOrCreate({
            where: { name }
        })

        await user.addTech(tech)

        return res.json(tech)
    },
    
    async delete(req, res){
        const { user_id } = req.params;

        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(404).json({ error: 'User Not Found' });
        }

        const tech = await Tech.findOne({
            where: { name }
        })

        await user.removeTech(tech)

        return res.json({ message: 'Tech removed successfully' });
    }
}