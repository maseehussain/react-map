import axios from "axios";

export function get_all_companies() {
    axios.get(`https://run.mocky.io/v3/7cb595ed-2882-4dc7-8179-d38d0b9c9d13`)
    .then(res => {
        const companies = res.data;
        console.log(companies);
    })
    .catch(function (error) {
        console.log(error);
    })   
};