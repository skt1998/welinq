import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api-container-ph3rhhnyiq-uc.a.run.app/"
});

export default {

    getTherapist: async function () {
      console.log("env",process.env.API_lINK)

        try {
            const response = await instance.get("therapists")
            return response;
        } catch (error) {
            alert("Something went wrong")
            return error.response;
        }
    },

}