const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

module.exports = {
    index(req, res) {
        Pet.find({}, (err, pets) => {
            res.json({
                result: 'success',
                pets
            })
        })
    },

    create (req, res) {
        Pet.create (req.body, (err, pet) => {
            if(err) {
                return res.json ({
                    errors: err.errors
                });
            }
            res.json({
                result: 'success', 
                pet
            });
        });
    }, 

    getOne(req, res) {
        Pet.findById(req.params.id, (err,pet) => {
            if(err){
                return res.json({
                    errors: err
                });
            }
            res.json({
                result: 'success',
                pet
            })
        })
    },

    update(req,res) {
        Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            },
            (err, pet) => {
                if(err) {
                    return res.json ({
                        errors: err.errors
                    });
                }
                res.json ({
                    result: 'success',
                    pet
                })
            }
        )
    },

    delete(req,res) {
        Pet.findByIdAndDelete(req.params.id, (err) => {
            if(err){
                return res.json({
                    errors: err
                });
            }
            res.json({
                result: 'success',
            })
        })
    }





}