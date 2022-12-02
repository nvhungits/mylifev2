import mongoose from 'mongoose';
import MyOrder from '../models/myorder.model.js';
import Image from '../models/image.model.js';

// create new
export function CreateMyOrder(req, res) {
    var total = 0;
    if(req.body && req.body.products){
        req.body.products.forEach((product,index) => {
            product.sequense = index;
            total += (product.price*product.quantity);
        });
    }
    const record = new MyOrder({
        _id: mongoose.Types.ObjectId(),
        ...req.body,
        status: "New",
        total: total,
        createdOn: new Date(),
        createdBy: req.body.createdBy ? req.body.createdBy : "admin"
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

// Get all
export function GetMyOrders( req, res){
    MyOrder.find().then((results) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all MyOrders',
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
export function GetMyOrdersByQueries( req, res){
    const fields = req.body.fields;
    MyOrder.find(req.body, fields).then((results) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all MyOrders By Request Body ' + fields,
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
export function GetMyOrderById( req, res){
    const id = req.params.MyOrderId;
    MyOrder.find({_id: id}).then(results => {
        if(results && results.length <= 0){
            return res.status(404).json({
                success: true,
                message: `Can not found MyOrder ID = ${id}`,
            });
        }
        const orderDetails = results[0];
        Image.find({_id: orderDetails.imageId}).then(resultImage => {
            console.log("resultImage", resultImage)
            orderDetails.image = resultImage && resultImage.length > 0 ? resultImage[0] : null;
            return res.status(200).json({
                success: true,
                message: `MyOrder by ID ${id}`,
                result: orderDetails,
            });
        })
        
        
    }).catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
    });
}

// update
export function UpdateMyOrder(req, res) {
    const id = req.params.MyOrderId;
    const updateRecord = req.body;
    updateRecord.updatedOn = new Date();
    if(!updateRecord.updatedBy)
        updateRecord.updatedBy = "admin";
    MyOrder.updateOne({ _id:id }, { $set:updateRecord }).exec().then(() => {
        res.status(200).json({
          success: true,
          message: 'MyOrder is updated',
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
export function DeleteMyOrder(req, res) {
    const id = req.params.MyOrderId;
    MyOrder.findByIdAndRemove(id).exec().then((result)=> res.status(204).json({
        success: true,
        message: `Deleted`,
        result: result
    })).catch((err) => res.status(500).json({
        success: false,
        error: err.message
    }));
}