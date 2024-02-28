import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import R003ImportConponent from './component/R003ImportConponent';
// import R004LifecycleEx from './component/R004LifecycleEx';
// import R005LifecycleEx from './component/R005LifecycleEx';
// import R006LifecycleEx from './component/R006LifecycleEx';
// import R007LifecycleEx from './component/R007LifecycleEx';
// import R008LifecycleEx from './component/R008LifecycleEx';
// import R009Es6 from './component/R009Es6';
// import R012ClassPrototype from './component/R012ClassPrototype';
// import R013ArrowFunction from './component/R013ArrowFunction';
// import R014ForEach from './component/R014ForEach';
// import R015Map from './component/R015Map';
// import R016_Jquery from './component/R016_Jquery';
// import R017_Props from './component/R017_Props';
import R018_PropsDatatype from './component/R018_PropsDatatype';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <R003ImportConponent /> */}
      {/* <R004LifecycleEx /> */}
      {/* <R005LifecycleEx /> */}
      {/* <R006LifecycleEx prop_value='FromApp.js' /> */}
      {/* <R006LifecycleEx prop_value={{'a':'a','b':'b'}} /> */}
      {/* <R008LifecycleEx prop_value='FromApp.js' /> */}
      {/* <R009Es6 /> */}
      {/* <R012ClassPrototype /> */}
      {/* <R013ArrowFunction /> */}
      {/* <R014ForEach /> */}
      {/* <R015Map /> */}
      {/* <R016_Jquery /> */}
      {/* <R017_Props props_val="this is props" /> */}
      <R018_PropsDatatype
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohundred:"200"}}
        Function={console.log("FunctionProps: function!")}
        />
    </div>
  );
}

export default App;
