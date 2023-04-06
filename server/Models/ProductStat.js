import mongoose from "mongoose";
 

const ProductStatSchema = new mongoose.Schema({
 
    productId:String,
    yearlySalesTotal:Number,
    yearlyTotalSoldUnits:Number,
    year:Number,
    monthlyData:
        [
            {
                month:String,
        totalSales:Number,
        totalUnits:Number,
            }
        ],
        dailyData:{
            data:String,
            totalSales:Number,
            totalUnits:Number,
        }
    

  
   
},{
    timestamps:true
})

const ProductStat = mongoose.model("ProdcutStat",ProductStatSchema);

export default ProductStat;