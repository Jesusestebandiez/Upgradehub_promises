const addItem = (item, colores) => {
    const promise = new Promise((resolve, reject) => {
        if (!colores) {
            reject('No existe el array mynombre');
        }

        setTimeout(function () {
            colores.push(item);
            resolve(list);
        }, 2000);
    });

    return promise;
};

const colores = ['Rojo', 'Azul', 'Verde'];

addItem('Amarillo', colores)
    .then((list) => {
        console.log(`El listado final es: ${colores.join(', ')}`);
    })
    .catch((err) => {
        throw new Error(err);
    });

addItem('Negro')
    .then((colores) => {
        console.log(`El listado final es: ${colores.join(', ')}`);
    })
    .catch((err) => {
        throw new Error(err);
    });