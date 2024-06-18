const mongoose = require('mongoose');
const canditateSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    party:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    votes:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true
            },
            votedAt:{
                type: Date,
                default:Date.now()
            }
        }
    ],
    voteCount:{
        type:String,
        default:0
    }
});


const Candidate = mongoose.model('Candidate',canditateSchema);
module.exports=Candidate;