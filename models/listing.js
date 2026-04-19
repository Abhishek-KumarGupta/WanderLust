const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
     image: {
        type: String,
        default: "https://in.images.search.yahoo.com/search/images?p=images+unsplash&fr=mcafee&type=E210IN1589G0&imgurl=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1506038634487-60a69ae4b7b1%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxzZWFyY2h8NHx8ZnJlZXx8MHx8fHwxNjIzOTU3NjIy%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080#id=1&iurl=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1506038634487-60a69ae4b7b1%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxzZWFyY2h8NHx8ZnJlZXx8MHx8fHwxNjIzOTU3NjIy%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080&action=click",
        set: (v) =>
             v === ""
                ? "https://in.images.search.yahoo.com/search/images?p=images+unsplash&fr=mcafee&type=E210IN1589G0&imgurl=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1506038634487-60a69ae4b7b1%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxzZWFyY2h8NHx8ZnJlZXx8MHx8fHwxNjIzOTU3NjIy%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080#id=1&iurl=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1506038634487-60a69ae4b7b1%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxzZWFyY2h8NHx8ZnJlZXx8MHx8fHwxNjIzOTU3NjIy%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080&action=click"
                : v
    },
    price: {
            type: Number,
            required: true,
            min: 0,
            default: 0
    },
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;