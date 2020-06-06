const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")
           
// utilizar o objeto de banco de dados, para  as nossas operações

db.serialize( () => {

    //criar tabela
    // criar tabelas com comandos sql

    db.run(`

        CREATE TABLE IF NOT EXISTS places (

            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT 


        );



    
    
    `)

    // inserir dados da tabela

    //consultar os dados da tabela

    //deletar um dado da tabela
     
})
