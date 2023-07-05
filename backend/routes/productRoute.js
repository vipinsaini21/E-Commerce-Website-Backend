const express = require("express");
const {
	getAllProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductDetails,
	createProductReview,
	deleteReview,
	getProductReviews,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Creating route for products

// Route For Getting all products
router.route("/products").get(getAllProducts);

// Route for creating Products
router
	.route("/admin/product/new")
	.post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// Route for Updating Products
router
	.route("/admin/product/:id")
	.put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
	.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// Route for getting product details
router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
	.route("/reviews")
	.get(getProductReviews)
	.delete(isAuthenticatedUser, deleteReview);

module.exports = router;
