import LocalDB from './localdb';

LocalDB.openDatabase();

function fetchItemfromDB(items, resolve, reject) {
    LocalDB.getItems().then((data) => {
        
    })
}