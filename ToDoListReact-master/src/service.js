import axios from './api';
// import axios from 'axios';

// const apiUrl = "http://localhost:5137"

export default {
  // getTasks: async () => {
  //   const result = await axios.get(`${apiUrl}/items`)    
  //   return result.data;
  // },

  getTasks: async () => {
    console.log(process.env.REACT_APP_API_URL);
    
    const result = await axios.get(`/items`)    
    return result.data;
  },

  // addTask: async(name)=>{
  //   console.log('addTask', name)
  //   //TODO
  //   const result = await axios.post(`${apiUrl}/`,{
  //     Name:name,
  //     IsComplete:false
  //   })    
  //   return {result};
  // },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    const result = await axios.post(`/`,{
      Name:name,
      IsComplete:false
    })    
    return {result};
  },

  // setCompleted: async(id, isComplete)=>{
  //   console.log('setCompleted', {id, isComplete})
  //   //TODO
  //   console.log('setCompleted', { id, isComplete });
  //   const result = await axios.put(`${apiUrl}/items/${id}?iscomplete=${isComplete}`, {
  //   });
      
  //   return {result};
  // },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    console.log('setCompleted', { id, isComplete });
    const result = await axios.put(`/items/${id}?iscomplete=${isComplete}`, {
    });
      
    return {result};
  },

  // deleteTask:async(id)=>{
  //   console.log('deleteTask')

  //   const result = await axios.delete(`${apiUrl}/items/${id}`, {
  //   });

  // }

  deleteTask:async(id)=>{
    console.log('deleteTask')

    const result = await axios.delete(`/items/${id}`, {
    });

  }
};
