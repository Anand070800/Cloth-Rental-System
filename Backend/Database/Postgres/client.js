const {Client}=require('pg');

const client=new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'cloth-rental',
    password: '12345',
    port: 5432,
})

async function initDb(){
    client.connect(function(err){
      if(err) throw err;
      else{
        console.log("Pg SQL Database are connected");

        // client
        // .query(`select * from create_new_user('amit', 'its_amit', '1', 'amit@gmail.com', '9876543210')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from create_new_user('abhishek', 'its_abhi', '1', 'abhishek@gmail.com', '8765432109')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from create_new_seller('taha', 'its_taha', '1', 'taha@gmail.com', '7654321098')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from create_new_seller('farhan', 'its_farhan', '1', 'farhan@gmail.com', '6543210987')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from create_new_delivery_boy('adarsh', 'its_adarsh', '1', 'adarsh@gmail.com', '5432109876')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from create_new_delivery_boy('harsh', 'its_harsh', '1', 'harsh@gmail.com', '4321098765')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from create_new_delivery_boy('harsh', 'its_harsh', '1', 'harsh@gmail.com', '4321098765')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from create_new_delivery_boy('a', 'a', '1', 'a@gmail.com', '43210987657')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from get_login_detail('abhi@gmail.com')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from get_login_detail('taha@gmail.com')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from get_login_detail('harsh@gmail.com')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from match_email_password('harsh@gmail.com', '1')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));

        // client
        // .query(`select * from match_email_password('harsh@gmail.com', '12')`)
        // .then(data => console.log(data.rows))
        // .catch(err => console.log('err'));
      }
    });
  }
module.exports={initDb,client}