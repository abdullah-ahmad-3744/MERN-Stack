import './App.css'
import Form from './components/Form'

function App() {

  return (
    <div className="min-h-screen w-full bg-[#EDF0EE] flex flex-col items-center px-5 py-12">
      <h1 className="text-[28px] font-semibold text-[#14181B] tracking-tight mb-8">
        Form Project
      </h1>
      <Form/>
    </div>
  )
}

export default App