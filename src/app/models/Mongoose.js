import mongoose, {Schema} from "mongoose";


const Userschema = new Schema(
    {
        name : { type:String ,required:true},
        phoneNumber: { type:Number ,required:true},
        stream:  {type: String,required: true,
        enum: ['PCM', 'PCB', 'PCMB'],}
    },
    {
        timestamps:true,
    }
)

const UserModel = mongoose.models.User || mongoose.model("User", Userschema);
export default UserModel;