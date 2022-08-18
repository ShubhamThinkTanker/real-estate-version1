const Validator = require("validator");
const isEmpty = require("../isEmpty");


module.exports = function                           validateEstateStructure(data) {

    let errors = {};
     
    data.estate.complex = !isEmpty(data.estate.complex) ? data.estate.complex : "";
    data.estate.complex.floor_no = !isEmpty(data.estate.complex.floor_no) ? data.estate.complex.floor_no : "";
    data.estate.complex.start_no = !isEmpty(data.estate.complex.start_no) ? data.estate.complex.start_no : "";
    data.estate.complex.end_no = !isEmpty(data.estate.complex.end_no) ? data.estate.complex.end_no : "";
    

    if(data.estate.complex.length > 0){

        data.estate.complex.map((ele,i)=>{

            if(!Validator.isNumeric(ele.floor_no)){
                errors[`floor_no_${i}`] = "Floor no  contain only number"
            }
            if(Validator.isEmpty(ele.floor_no)){
                errors[`floor_no_${i}`] = "Floor no is required"
            }
        
            if(Validator.isEmpty(ele.start_no)){
                errors[`start_no_${i}`] = "Start no is required"
            }
           
            if(!Validator.isAlpha(ele.start_no) && !Validator.isNumeric(ele.start_no) && !Validator.isAlphanumeric(ele.start_no)){
                errors[`start_no_${i}`] = "Start no contain number or letter"
            }
            if(!Validator.isAlpha(ele.end_no) && !Validator.isNumeric(ele.end_no) && !Validator.isAlphanumeric(ele.end_no)){
                errors[`start_no_${i}`] = "End no contain number or letter"
            }
          
        })
    }



   


   
    return {
        errors,
        isValid: isEmpty(errors)
    };
};