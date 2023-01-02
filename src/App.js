import MainList, { adder, subtractor } from './pages/MainList'

const App = () => {
  console.log(adder(1, 2))
  console.log(subtractor(3, 7))
  return (
    <>
      <div>Hello World</div>
      <MainList />
    </>
  );
}

export default App;
