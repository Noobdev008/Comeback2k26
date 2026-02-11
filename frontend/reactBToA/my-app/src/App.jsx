import './App.css'
import Welcome from './component/Welcome'
import Header from './component/Header'
import Footer from './component/Footer'
import Bio from './component/Bio'

function App() {

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
      <Bio city="Bahriach"
        age="28"
        skills="Developer"
      />
      <Footer footer="Footer"/>
    </div>
    </>
  )
}

export default App
