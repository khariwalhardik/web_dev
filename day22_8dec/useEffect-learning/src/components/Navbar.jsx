import React, { useEffect ,useState} from 'react'

const Navbar = ({result}) => {
    useEffect(() => {
    alert('Result value changed in navbar')
    }, [result])
    //clean up function
    useEffect(() => {
        //this will run when component is going to unmount, when we do conditional rendering
    return () => {
        alert('Component is going to unmount')
    }
    }, [])
    const [showbt,setshowbt]=useState(true)


    //creating new element in the dom

    const NewElememt=()=>{return (
        <div>
            <h6>Hello I am new element</h6>
        </div>
    )}
    //create list
    const [mylist,setmylist]=useState([{"title":"hey ","desc":"how are you "},{"title":"hello ",desc:"are you fine"},{title:"hi",desc:"how are you"}])
  return (
    <div>
      <h2>I am the NavBar with count Result={result}</h2>
      {showbt && <button onClick={()=>setshowbt(false)}>This is hidden button</button>}
      {/* this is called conditional rendering */}
      <button onClick={()=>setshowbt(!showbt)}>{showbt?"Hide":"Show"}</button>
      <NewElememt />
      {/* rendering list using map */}
      {mylist.map((item,index)=>{
          return (
              <div key={index}>{/* key is used to uniquely identify the element */}
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
              </div>
          )
      })}
    </div>
  )
}

export default Navbar
