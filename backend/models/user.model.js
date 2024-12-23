const { default: mongoose } = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true, 
    },
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:[]
        }
    ],
    following:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:[]
        }
    ],
    profileImg:{
        type:String,
        default:"",
    },
    coverImg:{
        type:String,
        default:"",
    },
    // bios
    bios:{
        type:String,
        default:""
    },
    link:{
        type:String,
        default:""
    },
    likedPosts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Post",
            default:[]
        }
    ],
},
{
    timestamps:true
})

const User = mongoose.model("User", userSchema);
module.exports = User