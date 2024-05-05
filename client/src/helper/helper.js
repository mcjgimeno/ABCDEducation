import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'
import { jwtDecode } from "jwt-decode";

export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth  */
export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}

/** post server data */
export async function postServerData(url, result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/users/login`, { username, password });
        console.log(response);
        const { token } = response.data;
        localStorage.setItem('token', token);
        return true;
    } catch (error) {
        return false;
    }
};

function withAuth(WrappedComponent) {
    return function EnhancedComponent(props) {
      const token = localStorage.getItem('token');
      const currentPath = window.location.pathname;
      if (token && currentPath !== '/a/login') {
        return <WrappedComponent {...props} />;
      }
      return <Navigate to={'/'} />;
      
    };
  }
  
  export default withAuth;
  
