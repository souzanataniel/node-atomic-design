const Action = (Model) => {
    return (req, res) => {
        Model.find({}, (err, data) => {
            if (err) res.status(400).json(err);

            res.status(200).json(data);
        });
    };
};
module.exports = Action;