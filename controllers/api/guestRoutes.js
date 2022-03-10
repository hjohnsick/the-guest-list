const express = require('express');
const router = express.Router();
const {GuestList, Food} = require('../../models');


router.get('/', (req, res) => {
    GuestList.findAll({
        where: {
            id: req.session.user_id
        },
        include: [
            {
                model: Food,
                attributes: ['food']
            }
        ]
        
    })
    .then((dbGuestData) => {
        if(!dbGuestData) {
            res.status(404).json({message: 'no guest found for this user'});
            return;
        }
        res.json(dbGuestData);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});



router.post('/', (req, res) => {
    GuestList.create({

    })
    .then((dbGuestData) => res.json(dbGuestData))
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
})

router.put('/:id', (req, res) => {
    GuestList.update({

    },
    {
        where: {
            id: req.params.id
        }
    },
    )
    .then((dbGuestData) => {
        if(!dbGuestData) {
            res.status(404).json({message: 'no guest list found with this id'});
            return;
        }
        res.json(dbGuestData);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
     
});

router.delete('/:id', (req, res) => {
    GuestList.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((dbGuestData) => {
        if(!dbGuestData) {
            res.status(404).json({message: 'no guest list found with this id'});
            return;
        }
        res.json(dbGuestData);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json(error);
    });
});








module.exports = router;