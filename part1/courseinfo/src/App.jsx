/*const App = () => {
  console.log('rajat ka component')
  const now = new Date()
  const a= 10
  const b= 20
  console.log(now, a+b)
// Any JavaScript code within the curly braces is evaluated and the result
 //of this evaluation is embedded into the defined
 //place in the HTML produced by the component.
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  )
}
export default App

//JSX
//It seems like React components are returning HTML markup. However, 
//this is not the case. The layout of React components is mostly written using
// JSX. Although JSX looks like HTML, we are dealing with a way to write 
//JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.
/*
After compiling, our application looks like this:

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
*/

//course information Step 1

const Header = (props) => {
  return (
    <div>
      <p>
         {props.course}
      </p>
    </div>
  )

} 

const Content = (props) => {
  return (
    <div>
      
        {props.part1}  {props.exercises1}<br/>
        {props.part2}  {props.exercises2}<br/>
        {props.part3}  {props.exercises3}
        
      
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
       total exercises are: {props.sum}
      </p>
    </div>
  )
}  

//course information Step 2
  /*const Part = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]
*/

const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const sum = 31

  return (
    <div>
      <Header course={course}/>

      <Content part1={part1} exercises1={exercises1}/>
      <Content part2={part2} exercises2={exercises2}/>
      <Content part3={part3} exercises3={exercises3}/>

      <Total sum = {sum}/>
    </div>
  )
}

export default App
