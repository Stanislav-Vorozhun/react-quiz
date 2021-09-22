import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-e9d64-default-rtdb.europe-west1.firebasedatabase.app/'
})