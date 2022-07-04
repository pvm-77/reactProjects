import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import StaticsFeedback from "./components/StaticsFeedback";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header />
      <Card text="Counter App" />
      {/* <Card text="Stop watch" /> */}
      {/* customer feedback   */}
      <div className="card w-50 mt-3 shadow mx-auto">
        <h5 className="card-header">Give Feedback</h5>
        <div className="card-body">
          <div
            className="btn-group d-flex justify-content-center"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <Button className="btn btn-danger" text="bad" />
            <Button className="btn btn-warning" text="neutral" />
            <Button className="btn btn-success" text="good" />
          </div>
          <h1 className='text-center'>Statics of  Feedback</h1>
          <div className='row'>
            <StaticsFeedback title='good' />
            <StaticsFeedback title='bad' />
            <StaticsFeedback title='neutral' />
          </div>


        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
