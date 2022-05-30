import React,{useState} from 'react'
import Display from './Display';
import Button from './Button';
const Card = (props) => {
    const [count, setCount] = useState(0);

    const counterDecreaseByOne = () => {
      console.log("decrease by one");
      setCount(count - 1);
    };
    const counterIncreaseByOne = () => {
      setCount(count + 1);
    };
    const counterSetToZero = () => {
      setCount(0);
    };
    return (
        <>
            <div className="card w-50 mt-3 shadow mx-auto">
                <h5 className="card-header">{props.text}</h5>
                <div className="card-body">
                    <Display counter={count} />

                    <div
                        className="btn-group d-flex justify-content-center"
                        role="group"
                        aria-label="Basic mixed styles example"
                    >
                        <Button
                            className="btn btn-danger"
                            onClick={counterDecreaseByOne}
                            text="minus"
                        />
                        <Button
                            className="btn btn-warning"
                            onClick={counterSetToZero}
                            text="zero"
                        />
                        <Button
                            className="btn btn-success"
                            onClick={counterIncreaseByOne}
                            text="plus"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card