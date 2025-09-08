import dados from '../models/dados.js'

const { herois } = dados;

const getAllHerois = (req, res) => {
    let resultado = herois;

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
};

export { getAllHerois };