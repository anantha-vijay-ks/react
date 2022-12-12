const Mydata =(props)=>{
    return(
      <h1>HI! {props.name},My Mail is {props.email}</h1>
    )
  }
  function User(){
    return(
      <>
      {/* <Mydata name="Anandh"/>*/}
      <Mydata name="Anandh" email='abcde,xyz'/>
      </>
    )
  }
  export default User