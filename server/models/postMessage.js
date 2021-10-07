import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    product: String,
    remarks: String,
    name: String,
    creator: String,
    condition: String,
    budget: String,
    contact: String,
    brand: String,
    paymentMethod: String,
    tags: [String],
    qty: Number,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;