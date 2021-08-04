import React, { useState }  from 'react';
import axios from "axios"





export default function ImagesUpload() {

  
  
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")

  const submit = async event => {
      event.preventDefault()
      const data = new FormData()
      data.append("image", file)
      data.append("description", description)
      const result = await axios.post("/posts", data)
      console.log(result)
  }
 

  return (                  
            <div>
            <h1> App3000</h1>
            <form onSubmit={submit}>
                <input
                    filename={file}
                    onChange={e => setFile(e.target.files[0])}
                    type="file"
                    accept="image./*"
                >    
                </input>
                <input 
                onChange={e => setDescription(e.target.value)}
                type="text"
                >
                </input>
                <button type="submit">Submit</button>
                
               
                
            </form>
            </div>
            
        

             
      
    
  );
}
