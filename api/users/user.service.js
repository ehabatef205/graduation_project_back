const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    let creationdate=new Date();

    creationdate=creationdate.toJSON().substring(0,10)
    pool.query(

      `insert into users(email, password,first_name, last_name,birth_day,  phone,mobile,date_of_join,status,last_log_in,last_log_in_ip,level,nat_id,address,type,HS_score) 
                values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.email,
        data.password,
        data.first_name,
        data.last_name,
        data.birth_day,
        data.phone,
        data.mobile,
        creationdate,
        1,
        creationdate,
        "NONE",
        data.level,
        data.nat_id,
        data.address,
        data.type,
        data.HS_Score
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select user_id,email, password,first_name, last_name,birth_day,  phone,mobile,date_of_join,status,last_log_in,last_log_in_ip,level,nat_id,address,type,HS_score
       from users where user_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select user_id,email, password,first_name, last_name,birth_day,  phone,mobile,date_of_join,status,last_log_in,last_log_in_ip,level,nat_id,address,type,HS_score
       from users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set first_name=?, last_name=?, gender=?, email=?, password=?, phone=?,mobile=?,status=?,level=?,address=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.phone,
        data.mobile,
        data.status,
        data.level,
        data.address,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    console.log(data.id)
    pool.query(
      `delete from users where user_id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[1]);
      }
    );
  }
};
