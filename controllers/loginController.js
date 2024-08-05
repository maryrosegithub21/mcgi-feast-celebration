const pool=require("../db/db")


// ===== Log IN for MEMBERS ======== //
const getLoginMember=(req,res) => {
    console.log(`/api/login/ endpoint was hit🎯`)
    console.log(req.body)
    const query = `SELECT church_id, email, password FROM members WHERE church_id = ? AND email = ? AND password = ?`;
    pool.execute(query,[req.body.churchId, req.body.email, req.body.password],(err,result)=>{
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({errorMessage: "An error occurred while fetching data from the database."})
      }
      // conditional statement that Handling the result
    if (result.length === 0 ){
      return res.sendStatus(401) //e.g invalid credential
    }
      // conditional statement that Handling the result
    if (result.length >= 1){
      return res.status(200).send(result);
    }
      console.log("Result", result)
      
      
    })
  }

  // // ====== log in for guests============ // //
  const getLoginNonMember = (req,res) => {
  console.log("/api/login-guests endpoint was hit🎯")
  console.log(req.body)
  const query =`SELECT full_name, email, password FROM guests WHERE email = ? AND password = ?;`

  pool.execute(query,[req.body.email, req.body.password],(err,result)=>{
      // conditional statement that Handling the result
    if (err) {
      console.log("Database error:", err);
      return res.status(500).json({errorMessage: "An error occurred while fetching data from the database."})
    }
      // conditional statement that Handling the result
  if (result.length === 0 ){
    return res.sendStatus(401) //e.g invalid credential
  }
      // conditional statement that Handling the result
  if (result.length >= 1){
    return res.sendStatus(200);
  }
    console.log("Result", result)
    
  })
}


//  ======= for sign up member ========== //
const getSignUpMember = (req,res) => {
  console.log("/api/signup-members endpoint was hit🎯")
  console.log(req.body)
  // conditional statement that Handling the result when no value on input
  if (req.body.name !== "" && req.body.email !== "" && req.body.password !== "" && req.body.churchId !== ""){
  // Insert Value to Database 
  const query =`INSERT INTO members (full_name, email, password, church_id) VALUES (?,?,?,?);`

  pool.execute(query,[req.body.name, req.body.email, req.body.password, req.body.churchId ],(err,result)=>{
      // conditional statement that Handling the result 
    if (err) {
      console.log("Database error:", err);
      return res.status(400).send(err);
    }
    res.sendStatus(200);
    console.log("Result", result)
    
  })
}
}


//  ======= for sign up guests ========== //
const getSignUpNonMember = (req,res) => {
  console.log("/api/signup-Teacher endpoint was hit🎯")
  console.log(req.body)
  // conditional statement that Handling the result when no value on input
  if (req.body.name !== "" && req.body.contact !== "" && req.body.newReturning !== "" && req.body.address !== "" && req.body.religion !== "" && req.body.gender !== ""  && req.body.email !== "" && req.body.password !== ""){
  // Insert Value to Database 
  const query =`INSERT INTO guests (full_name, contact,newReturning,address,religion,gender, email, password) VALUES (?,?,?,?,?,?,?,?);`
  pool.execute(query,[req.body.name, req.body.contact,  req.body.newReturning, req.body.address ,  req.body.religion, req.body.gender, req.body.email, req.body.password],(err,result)=>{
      // conditional statement that Handling the result 
      if (err) {
        console.log("Database error:", err);
        return res.status(400).send(err);
      }
      res.sendStatus(200);
    console.log("Result", result)
  })
}
}



module.exports={getLoginMember, getLoginNonMember,getSignUpMember,getSignUpNonMember}
