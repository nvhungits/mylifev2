import mongoose from 'mongoose';
import Company from '../models/company.model.js';

// create new
export function CreateCompany(req, res) {
    const name = req.body.name;
    Company.find({name: name}).then(result => {
        if(result && result.length > 0){
            return res.status(400).json({
                success: false,
                message: `Can not create with duplicate name = ${name}`,
            });
        }
        else{
            const record = new Company({
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
export function GetCompanies( req, res){
    Company.find().then((results) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all Companies',
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
export function GetCompaniesByQueries( req, res){
    const fields = req.body.fields;
    Company.find(req.body, fields).then((results) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all companies By Request Body ' + fields,
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
export function GetCompanyById( req, res){
    const id = req.params.companyId;
    Company.find({_id: id}).then(results => {
        if(results && results.length <= 0){
            return res.status(404).json({
                success: true,
                message: `Can not found Company ID = ${id}`,
            });
        }
        return res.status(200).json({
            success: true,
            message: `company by ID ${id}`,
            result: result,
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
export function Updatecompany(req, res) {
    const id = req.params.companyId;
    const updateRecord = req.body;
    Company.updateOne({ _id:id }, { $set:updateRecord }).exec().then(() => {
        res.status(200).json({
          success: true,
          message: 'Company is updated',
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
export function DeleteCompany(req, res) {
    const id = req.params.companyId;
    Company.findByIdAndRemove(id).exec().then((result)=> res.status(204).json({
        success: true,
        message: `Deleted ${id}\n${result}`
    })).catch((err) => res.status(500).json({
        success: false,
        error: err.message
    }));
}