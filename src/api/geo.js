 import axios from "axios"

export class getCountry {
     async  GetIpInfo() {
         let city;
         await  axios.get('https://ipinfo.io?token=ffe0aa2e707f5a')
        .then( data => {
             city =  data
         });
        
         if(city){
             return city.data
         }else{
            return {
                city : '',
                country : 'EN'
            }
         }
       
       
    }

   
} 
var getCountryClass = new getCountry();

export default getCountryClass
