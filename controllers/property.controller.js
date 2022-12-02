import mongoose from 'mongoose';
import Property from '../models/property.model.js';

// create new
export function CreateProperty(req, res) {
    const name = req.body.name;
    Property.find({name: name}).then(result => {
        if(result && result.length > 0){
            return res.status(400).json({
                success: false,
                message: `Can not create with duplicate name = ${name}`,
            });
        }
        else{
            const record = new Property({
                _id: mongoose.Types.ObjectId(),
                ...req.body
            });
        
            return record.save().then((newRecord) => {
                return res.status(201).json({
                    success: true,
                    message: 'Created successfully',
                    result: newRecord,
                });
            }).catch((error) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                    error: error.message,
                });
            });
        }
    }).catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
    });
}

// Get all
export function GetProperties( req, res){
    Property.find().then((results) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all Properties',
          results: results,
        });
    }).catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
    });

}
export function GetPropertiesByQueries( req, res){
    const fields = req.body.fields;
    Property.find(req.body, fields).then((results) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all Properties By Request Body ' + fields,
          results: results,
        });
    }).catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
    });

}
export function GetPropertyById( req, res){
    const id = req.params.PropertyId;
    Property.find({_id: id}).then(results => {
        if(results && results.length <= 0){
            return res.status(404).json({
                success: true,
                message: `Can not found Property ID = ${id}`,
            });
        }
        return res.status(200).json({
            success: true,
            message: `Property by ID ${id}`,
            result: results,
        });
        
    }).catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
    });
}

// update
export function UpdateProperty(req, res) {
    const id = req.params.PropertyId;
    const updateRecord = req.body;
    Property.updateOne({ _id:id }, { $set:updateRecord }).exec().then(() => {
        res.status(200).json({
          success: true,
          message: 'Property is updated',
          result: updateRecord,
        });
    }).catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message
        });
    });
}

// delete
export function DeleteProperty(req, res) {
    const id = req.params.PropertyId;
    Property.findByIdAndRemove(id).exec().then((result)=> res.status(204).json({
        success: true,
        message: `Deleted ${id}\n${result}`
    })).catch((err) => res.status(500).json({
        success: false,
        error: err.message
    }));
}