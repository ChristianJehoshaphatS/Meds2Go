const MainController = require('../controllers/mainController')

const router = require('express').Router()

//render main page, tampilan profile user dan find all medicines
router.get('/:idPatient', MainController.mainPagePatient)
//post ke invoices idPatient dan idMedicine dari params
router.post('/:idPatient/buy/:idMedicine', MainController.postInvoice)
// render halaman checkout obat
router.get('/:idPatient/checkout', MainController.checkout)
//post destroy
router.get('/:idPatient/checkout/complete', MainController.checkoutDestroy)

router.get('/:idPatient/thankyou', MainController.thankYouPage)







module.exports = router
