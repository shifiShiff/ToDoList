import axios from 'axios';

// הגדרת כתובת ה-API כברירת מחדל

// axios.defaults.baseURL =
//   process.env.REACT_APP_API_URL || "http://localhost:5137";

axios.defaults.baseURL =process.env.REACT_APP_API_URL;


// axios.defaults.baseURL = 'http://localhost:5137';

// ניתן גם להוסיף הגדרות נוספות
// axios.defaults.headers.common['Authorization'] = `Bearer YOUR_TOKEN_HERE`;
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.response.use(
    response => response, // מחזיר את התשובה כרגיל אם אין שגיאה
    error => {
      console.error('API Error:', error.response ? error.response.data : error.message);
      return Promise.reject(error); // מעביר את השגיאה להמשך הטיפול
    }
  );

export default axios;