import dados from '../models/dados.js'

const { herois } = dados;

const getAllHerois = (req, res) => {
    let resultado = herois;

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
};

const getHeroiById = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const heroi = herois.find(i => i.id === id);

    if (heroi) {
        res.status(200).json
        (heroi);
    } else {
        res.status(400).json({
            erro: `Herói com id ${id} não encontradp!`
        })
    }
}
export { getAllHerois, getHeroiById };