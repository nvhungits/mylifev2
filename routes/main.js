import express from 'express';
import { GetImages, UPDATE, CREATE, DELETE, GetImageById, GetImageBySlug, GetImagesByQueries, UpdateMultiple, UPLOAD, GoogleFiles, SyncImageGoogleFiles, GetImagesByQueriesAndLimit } from '../controllers/image.controller.js';
import { CreateCompany, DeleteCompany, GetCompanies, GetCompaniesByQueries, GetCompanyById, Updatecompany } from '../controllers/company.controller.js';
import { CreateProperty, DeleteProperty, GetProperties, GetPropertiesByQueries, GetPropertyById, UpdateProperty } from '../controllers/property.controller.js';
import { CreateMyOrder, DeleteMyOrder, GetMyOrderById, GetMyOrders, GetMyOrdersByQueries, UpdateMyOrder } from '../controllers/myorder.controller.js';

import multer from 'multer';

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage });

const router = express.Router();

router.get('/images', GetImages);
router.get('/images/files', GoogleFiles);
router.get('/images/:imageId', GetImageById);
router.get('/images/slug/:slug', GetImageBySlug);
router.put('/images/mutilple', UpdateMultiple);
router.patch('/images/:imageId', UPDATE);
router.put('/images/:imageId', UPDATE);

//Google Drive
router.put('/images/sync/:categoryId', SyncImageGoogleFiles);
router.post('/images', CREATE);
router.post('/images/upload', upload.single('file'), UPLOAD);

router.post('/images/queries', GetImagesByQueries);
router.post('/images/queries/limit/:limit', GetImagesByQueriesAndLimit);
router.delete('/images/:imageId', DELETE);

router.get('/companies', GetCompanies);
router.get('/companies/:companyId', GetCompanyById);
router.patch('/companies/:companyId', Updatecompany);
router.put('/companies/:companyId', Updatecompany);
router.post('/companies', CreateCompany);
router.post('/companies/queries', GetCompaniesByQueries);
router.delete('/companies/:companyId', DeleteCompany);

router.get('/properties', GetProperties);
router.get('/properties/:propertyId', GetPropertyById);
router.patch('/properties/:propertyId', UpdateProperty);
router.put('/properties/:propertyId', UpdateProperty);
router.post('/properties', CreateProperty);
router.post('/properties/queries', GetPropertiesByQueries);
router.delete('/properties/:propertyId', DeleteProperty);

router.get('/orders', GetMyOrders);
router.get('/orders/:MyOrderId', GetMyOrderById);
router.patch('/orders/:MyOrderId', UpdateMyOrder);
router.put('/orders/:MyOrderId', UpdateMyOrder);
router.post('/orders', CreateMyOrder);
router.post('/orders/queries', GetMyOrdersByQueries);
router.delete('/orders/:MyOrderId', DeleteMyOrder);

export default router;