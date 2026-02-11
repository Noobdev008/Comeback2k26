import './App.css'
import Welcome from './component/Welcome'
import Header from './component/Header'
import Footer from './component/Footer'
import Bio from './component/Bio'

function App() {
const mySkills = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "React" },
  { id: 3, name: "Node" }
];
  return (
    <>
    <div>
    <Header header="Header"
    />
     <Welcome 
        name="Developer" 
        salary="1.2L" 
        goal="AI Full Stack Master" 
      />
      <Bio 
      city="Bahriach"
      age="28"
     skills={mySkills}
/>
      <Footer footer="Footer"/>
    </div>
    </>
  )
}

export default App
