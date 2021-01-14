const fs = require('fs')
let gEventies = require('../data/eventi.json')
console.log(gEventies);
localStorage.setItem('eventies', gEventies)




export const eventiService = {
    query
    // getById,
    // save,
    // remove
}


function query() {
    return Promise.resolve(gEventies)
}
// function getById(eventiId) {
//     const eventi = gEventis.find(eventi => eventi._id === eventiId)
//     if (eventi) return Promise.resolve(eventi)
//     else return Promise.reject('No eventi')
// }
// function remove(eventiId) {
//     const idx = gEventis.findIndex(eventi => eventi._id === eventiId)
//     if (idx >= 0) {
//         gEventis.splice(idx, 1)
//         _saveEventisToFile()
//         return Promise.resolve()
//     }
//     else return Promise.reject('No eventi')

// }

// function save(eventi) {
//     if (eventi._id) {
//         const idx = gEventis.findIndex(currEventi => currEventi._id === eventi._id)
//         gEventis[idx] = eventi;
//     } else {
//         eventi._id = _makeId()
//         gEventis.unshift(eventi)
//     }
//     _saveEventisToFile()
//     return Promise.resolve(eventi)
// }


// function _makeId(length = 5) {
//     var txt = '';
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < length; i++) {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return txt;
// }

function _saveEventisToFile() {
    fs.writeFileSync('data/eventi.json', JSON.stringify(gEventies, null, 2))
}