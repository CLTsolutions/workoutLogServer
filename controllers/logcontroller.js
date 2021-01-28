let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Log = require('../db').import('../models/log');

/***************************
       * LOG CREATE *
****************************/
router.post('/', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
        .then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }))
})

/******************************
    * GET ALL LOGS BY USER *
*******************************/
router.get("/", validateSession, (req, res) => {
    Log.findAll({ where: { owner_id: req.user.id } })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err }))
});

/******************************
    * GET LOGS BY LOG ID *
*******************************/
router.get("/:id", (req, res) => {
    Log.findAll({ where: { id: req.params.id } })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({ error: err }))
});

/***************************
    * UPDATE LOG ENTRY *
****************************/
router.put("/:id", validateSession, (req, res) => {
    const updateLog = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
    };

    const query = { where: { id: req.params.id, owner_id: req.user.id } };

    Log.update(updateLog, query)
        .then((logs) => res.status(200).json({ message: "Updated successfully.", logs }))
        .catch((err) => res.status(500).json({ error: err }))
});


/***************************
    * DELETE LOG ENTRY *
*****************************/
router.delete("/:id", validateSession, (req, res) => {
    const query = { where: { id: req.params.id, owner_id: req.user.id } };

    Log.destroy(query)
        // .then(() => res.status(200).json({ message: "Workout Log Removed"}))           
        // .catch((err) => res.status(500).json({ error: err }));     
        .then((recordsChanged) => {
            res.status(200).json({ message: `${recordsChanged} log(s) removed.` });
        },
        (err) => {
            res.status(500).json({ error: err });
        }
    ); 
});

module.exports = router;