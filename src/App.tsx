import MainLayout from './Layout/MainLayout'
import AppRouter from './router/AppRouter'
const App = () => {
  return (
    <MainLayout children={<AppRouter/>}></MainLayout>
  )
}

export default App
