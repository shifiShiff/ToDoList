import axios from 'axios';

const apiUrl = "http://localhost:5137"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    const result = await axios.post(`${apiUrl}/`,{
      Name:name,
      IsComplete:false
    })    
    return {result};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    console.log('setCompleted', { id, isComplete });
    const result = await axios.put(`${apiUrl}/items/${id}?iscomplete=${isComplete}`, {
    });
      
    return {result};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')

    const result = await axios.delete(`${apiUrl}/items/${id}`, {
    });

  }
};
