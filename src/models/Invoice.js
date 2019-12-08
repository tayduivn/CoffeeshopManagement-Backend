import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Create Schema

const InvoiceSchema = new Schema({
  //Không cần thuộc tính ID vì trong MongoDB sẽ tự tạo ID cho mình khi insert vào
  idMember: {
    type: String,
    required: true
  },
  idUser: {
    type: String,
    required: true
  },
  totalAmt: {
    type: Number,
    required: true,
    default: 0
  },
  createddate: {
    type: Date,
    required: false,
    default: new Date()
  },
  comments: {
    type: String,
    required: false
  }
});

const Invoice = mongoose.model("invoice", InvoiceSchema);

export default Invoice;