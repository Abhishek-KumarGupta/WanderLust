const express = require("express")
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage });


//Index + Create Route
router.route("/")
.get( wrapAsync(listingController.index))
.post( isLoggedIn,upload.single('listing[image]'), wrapAsync(listingController.createListing))



//New Route
router.get("/new", isLoggedIn, listingController.renderNewform )

//Show Route + Update Route + delete Route
router.route("/:id")
.get( wrapAsync(listingController.showListings))
.put( isLoggedIn,isOwner, validateListing, wrapAsync(listingController.updateListing))
.delete( isLoggedIn,isOwner, wrapAsync(listingController.destroyListing))


//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.renderEditform))



//Index Route
//router.get("/", wrapAsync(listingController.index));



//Show Route
//router.get("/:id", wrapAsync(listingController.showListings));


//Create Route
//router.post("/", isLoggedIn,validateListing, wrapAsync(listingController.createListing))


//Update Route
//router.put("/:id", isLoggedIn,isOwner, validateListing, wrapAsync(listingController.updateListing))


//Delete Route
//router.delete("/:id", isLoggedIn,isOwner, wrapAsync(listingController.destroyListing))


module.exports = router;