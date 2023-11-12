const Total = (props) => {
  
  return (
    <div>
      <p>
       total exercises are: {props.sum}
      </p>
    </div>
  )
}  



const App = () => {

  const course = {
    name:'Half Stack application development',
    parts : [
      {
    name:'Fundamentals of React',
   exercises : 10
  },
    {
    name:'Using props to pass data',
   exercises : 7
  },
   {
    name:'State of a component',
   exercises : 14
  }
]
}
  const sum = 31

  return (
    <div>
      
      {course.name}
      <p>{course.parts[0].name}:{course.parts[0].exercises}</p>
      <p>{course.parts[1].name}:{course.parts[1].exercises}</p>
      <p>{course.parts[2].name}:{course.parts[2].exercises}</p>

      <Total sum = {sum}/>
      
    </div>
    
  )
}

export default App
