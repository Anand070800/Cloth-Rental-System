const jwt = require("jsonwebtoken");
const { query } = require("../Database/Postgres/send_query");
async function check_aadhar_address(req, res) {
  if (req.body.token) {
    jwt.verify(
      req.body.token,
      process.env.ACCESS_TOKEN,
      async (err, result) => {
        if (err) {
          res.status(401).json("fail");
        } else if (result) {
          data = await query(
            `select * from check_aadhar_address(${result.id})`
          );
          data = data[0];
          if (
            data.aadhar_id == null ||
            data.aadhar_id === "" ||
            data.user_location == null ||
            data.user_location === "" ||
            data.user_landmark == null ||
            data.user_landmark === "" ||
            data.user_district == null ||
            data.user_district === "" ||
            data.user_state == null ||
            data.user_state === "" ||
            data.user_pincode == null ||
            data.user_pincode === ""
          ) {
            res.status(200).json({ data: data, filled: false });
          } else {
            res.status(200).json({ data: data, filled: true });
          }
        }
      }
    );
  } else {
    res.status(401).json("fail");
  }
}
module.exports = { check_aadhar_address };
