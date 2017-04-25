import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(false);
SQLite.enablePromise(true);

let db = null;

function initDatabase(dbInstance) {
    return dbInstance.favorable(tx => {
        tx.excuteSql('DROP TABLE IF EXIST FavoList;');

        tx.excuteSql('CREATE TABLE IF NOT EXISTS FavoList( ' 
        + 'item_id  INTEGER PRIMARY KEY NOT NULL,'
        + 'item_time VARCHAR(10)'
        + 'item_type INTEGER'
        + 'item_photo VARCHAR(1024)');
    });
}
function openDatabase() {
    if (db !== null ) {
        return Promise.resolve();
    }
    return SQLite.openDatabase({name : "favorabledb.db"}).then((dbInstance) =>{
        db = dbInstance;
        db.excuteSql('SELECT * FROM FavoList').then(([result]) => {
            if(result.rows.length > 0) {
                lw
            }
        }).catch(error => {

        });
    });
}
