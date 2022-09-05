import axios from "axios"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const getCourseDetails = async (cid, userID) => {
    const courseDetails = await axios.post('https://mk42-titan-imjst-backend.herokuapp.com/academics/get-course', { cid, userID });
    // const courseDetails = {
    //     courseName: "Management Economics",
    //     courseCode: "19HS61",
    //     examsData: [
    //         { examName: 'CIE 1 Test', maxMarks: 50, score: 44, quizzes: [{ testId: "ghbj" }] },
    //         { examName: 'CIE 1 Quiz', maxMarks: 10, score: 7, testId: "ghbj" },
    //         { examName: 'CIE 2 Test', maxMarks: 50, score: 49, testId: "ghbj" },
    //         { examName: 'CIE 2 Quiz', maxMarks: 10, score: 8, testId: "ghbj" },
    //         { examName: 'CIE 3 Test', maxMarks: 50, score: 47, testId: "ghbj" },
    //         { examName: 'CIE 3 Quiz', maxMarks: 10, score: 9, testId: "ghbj" },
    //     ]
    // }

    return courseDetails
}

const getQuizDetails = async (data) => {
    const quizDetails = await axios.get('https://mk42-titan-imjst-backend.herokuapp.com/api/quiz/' + data)
    return quizDetails;
}
const submitQuizData = async (answersData, qId, userID) => {

    const result = await axios.post('https://mk42-titan-imjst-backend.herokuapp.com/api/quiz/' + qId, { answersData, userID })
    return result;
}
const getUserDetails = async (data) => {
    const userData = await axios.post('https://mk42-titan-imjst-backend.herokuapp.com/api/login-user', data);
    if (userData.data !== "invalid email and password") {
        cookies.set('token', userData.data.authToken, { path: '/' });
        return userData.data
    } else {
        return null
    }

}
const getUserFulldata = async (data) => {
    const token = cookies.get('token');
    const userData = await axios.post('https://mk42-titan-imjst-backend.herokuapp.com/academics', { token });
    // console.log(userData)
    return userData;
}
const signUpNewUser = async (data) => {
    const tokenData = await axios.post('https://mk42-titan-imjst-backend.herokuapp.com/api/add-user', data);
    console.log(tokenData.data)
    cookies.set('token', tokenData.data, { path: '/' });
}
const submitExtraDetails = async (data) => {
    const token = cookies.get('token')
    const res = await axios.post('https://mk42-titan-imjst-backend.herokuapp.com/api/add-user-data', { data, token });
}

const isUserAuthenticated = () => {
    const token = cookies.get('token')

    if (cookies.get('token')) {
        console.log("cookie exists")
        return true;
    }
    return false;

    // const getResponse = async () => {
    //     const response = await axios.get('http://localhost:8000/api/authenticate', {
    //         headers: {
    //             'x-access-token': token
    //         }
    //     })
    //     console.log("token yes")
    //     console.log(response.data)
    //     return response.data.auth
    // }
    // return getResponse();
}
const getSubmissionData = async () => {
    const data = await axios.post("https://mk42-titan-imjst-backend.herokuapp.com/submission/")
}

export { getUserDetails, submitExtraDetails, submitQuizData, getQuizDetails, signUpNewUser, isUserAuthenticated, getUserFulldata, getCourseDetails }
