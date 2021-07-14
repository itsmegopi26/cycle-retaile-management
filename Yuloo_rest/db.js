var Sequelize = require('sequelize');
var db_name = "c_dbstore";

var sequelize = new Sequelize({
	host :'localhost',
	dialect:'sqlite',
	storage: db_name,
	logging: false  
})

//DB connectvity--:
try {
	sequelize.authenticate();
	console.log('connection has been establized successfully!!')
}catch(error){
	console.error('unable to connect the database',error)
}

var cycle = sequelize.define('cycle',{
    id     : { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true },
    user_id   : { type: Sequelize.STRING,unique:true },
    hour : { type: Sequelize.INTEGER, defaultValue: 0 },
    amount : { type: Sequelize.INTEGER, defaultValue: 0}
    })

sequelize.sync();
module.exports= {
	cycle : cycle

};


