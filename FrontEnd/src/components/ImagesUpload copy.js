
//uses Express send pictures to mysql

import { useState, useEffect } from 'react'
import axios from "axios"

export default function ImagesUpload() {

  const [firstName, setFirstName] = useState("")
  const [submitform, setSubmitForm] = useState([])

  useEffect(() => {
    (async() => {
      const result = await axios.get('/submitform')
      setSubmitForm(result.data.submitform)
    })()
  }, [])

  const submit = async event => {
    event.preventDefault()
    const data = new FormData()
    data.append('firstName', firstName)
    const result = await axios.post('/submitForm', data)
    setSubmitForm([result.data, ...submitform])
  }

  return (                  
            <div>
            <h1> App3000</h1>
            <form onSubmit={submit}>
                
                <input 
                onChange={e => setFirstName(e.target.value)}
                type="text"
                >
                </input>
                
                <button type="submit">Submit</button>
                
               
                
            </form>
            <main>
        {submitform.map(post => (
          <figure key={post.id}>           
            <figcaption>{post.firstName}</figcaption>
          </figure>
        ))}
      </main>
            </div>
            
        

             
      
    
  );
}