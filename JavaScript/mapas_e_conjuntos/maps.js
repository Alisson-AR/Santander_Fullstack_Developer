function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Aizawa', 'Admin');
usuarios.set('Toshinori', 'Admin');
usuarios.set('Bakugou', 'User');
usuarios.set('Kaminari', 'User');

console.log(getAdmins(usuarios));