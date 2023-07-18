import db from '../../config/db.config.js'
import express from 'express';

const router = express.Router()

export const getProduct = (req, res) => {
    db.query('select * from student').then((data) => {
        res.send(data[0])
    })
}

export const getNewProduct = (req, res) => {
    const { name, age, gender } = req.body;
    console.log(req.body)
    db.execute('insert into student (name,age,gender) values (?,?,?)',
    [name,age,gender])
    res.json(req.body)
}
  
export const deleteProduct = (req, res) => {
  console.log('id param',req.param('id'))

  const params = req.param('id')

  db.execute('DELETE FROM student WHERE id = ?', [params])
    .then(() => {
      res.send("Deleted successfully");
    })
    .catch((error) => {
      console.log(error);
      res.send("Failed to delete");
    });
};


export const updateProduct = (req, res) => {  
  const { name, age, gender } = req.body;
  console.log('req params' ,req.params.id)
  console.log('body:', name ,age, gender);
  const id = req.param('id');
  db.execute(`UPDATE student SET name = '${name}',age = '${age}', gender = '${gender}' WHERE id = ${id}`)
    .then(() => {
      res.send("Updated Successfully");
    })
    .catch(() => {
      res.send('Updation Failed!');
    });
};


