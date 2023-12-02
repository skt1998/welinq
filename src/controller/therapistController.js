import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_lINK
});

export default {

    getTherapist: async function () {

        try {
            const response = await instance.get()
            return response;
        } catch (error) {
            alert("Something went wrong")
            return error.response;
        }
    },

}