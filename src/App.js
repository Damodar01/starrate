import { useState } from "react";
import './App.css';
import { FaCentercode, FaStar } from "react-icons/fa";
import Axios from "axios";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function App() {
  let [currentValue, setCurrentValue] = useState(0);
  let [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = (value) => {
    setCurrentValue(value)
    
  }
   
  const handleMouseOver = (newHoverValue) => {
   hoverValue= setHoverValue(newHoverValue)
    
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  } 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const feedback =e.target.feed.value;
    const address =e.target.address.value;

    const data={
      feedback:feedback,
       hoverValue:currentValue,
       address:address,
      
    }

    console.log(data);

    // const instance = Axios.create({
    //   baseURL: 'http://localhost:6000/api/',
      
    // });

    // instance.get('requests/all').then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err);
    // })
  
    // Axios.get('https://localhost:6000/api/')
    
   
    // console.log(first,hoverValue);
    // axios.post('/requests/add',data)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
     Axios.get('/api/requests/all').then((res)=>{
      console.log(res)
     }).catch((err)=>{
      console.log(err)
     })


    //  Axios.post('/feedback/all',data).then(function(responce){
    //   console.log(responce)
    //  }).catch(function(error){
    //   console.log(error)
    //  })

   }


  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
      <h2> Rate our work </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea name="address"
        placeholder="Address"
        style={styles.text}
      />

      <textarea name="feed"
        placeholder="What's your experience?"
        style={styles.textarea}
      />

      <button 
        style={styles.button}
      >
        Submit
      </button>
      </form>
      
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form:{
    display:"flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 300,
    padding: 10,
    margin: "20px 0",
    borderRadius: 5,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
   
  },
  textarea: {
    display: "flex",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
    alignItems: "center",
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    display:"flex",
  },
  

};




export default App;
 