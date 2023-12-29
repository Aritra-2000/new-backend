import mongoose from "mongoose";

const Schema = new mongoose.Schema({

    title: {
        type: String,
        require: [true, "Please enter course title"],
        minLength: [4, "Title must be at least 4 characters"],
        maxLength: [80, "Title can't exceed 80 characters"],
    },
    description: {
        type: String,
        required: [true, "Please enter course description"],
        minLength: [20, "Description must be at least 20 charecters"]
    },
    lectures: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            video: {
                public_id: {
                    type: String,
                    require: true,
                },
                url: {
                    type: String,
                    require: true,
                },
            },
        },
    ],

    poster: {
        public_id: {
            type: String,
            require: true,
        },
        url: {
            type: String,
            require: true,
        },
    },
    views: {
        type: Number,
        default: 0,
    },
    numOfVideos: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        require: true,
    },
    createdBy: {
        type: String,
        require: [true, "Enter the creator name"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },

});


export const Course = mongoose.model("Course", Schema);