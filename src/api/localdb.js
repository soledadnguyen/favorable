import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(false);
SQLite.enablePromise(true);

let db = null;

function initDatabase(dbInstance) {
    return dbInstance.transaction(tx => {
        tx.executeSql('DROP TABLE IF EXIST FavoList;');

        tx.executeSql('CREATE TABLE IF NOT EXISTS FavoList( ' 
        + 'item_id  INTEGER PRIMARY KEY NOT NULL,'
        + 'item_name VARCHAR(200),'
        + 'item_time VARCHAR(10),'
        + 'item_type INTEGER,'
        + 'item_photo VARCHAR(1024)');
    });
}
function openDatabase() {
    if (db !== null ) {
        return Promise.resolve();
    }
    return SQLite.openDatabase({name : "favorabledb.db"}).then((dbInstance) =>{
        db = dbInstance;
        return initDatabase(db);
    });
}

function closeDatabase() {
    return SQLite.close();
}
 
 const itemColumns = [
    'item_id',
    'item_name',
    'item_time',
    'item_type',
    'item_photo',
].join();
const itemValues = [
    '?',
    '?',
    '?',
    '?',
    '?'
].join();

function insertItems(itemList) {
    db.transaction((tx) => {
        tx.executeSql('INSERT OR REPLACE INTO FavoList (${itemColumns}) VALUES (${itemValues})',
         [
            itemList.item_id,
            itemList.item_name,
            itemList.item_time,
            itemList.item_type,
            itemList.item_photo,
         ]
        );
    });
}

function getItems() {
    return db.executeSql('SELECT * FROM FavoList').then(([result]) => {
        const resultList = [];
        const len = result.rows.length;
        for (let i = 0; i < len ; i++) {
            const row = result.rows.item(i);
            resultList.push(row);
        }
        return resultList;
    }).catch((error)=>{
        console.log("ERROR ", error);
    });
}
export default {
    insertItems,
    openDatabase,
    getItems

};
