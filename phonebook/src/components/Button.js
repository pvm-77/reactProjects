import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} style={{borderRadius:'30px'}} type="button" className="btn btn-outline-info"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                title="create contact">
                <AiOutlineUserAdd style={{ color: '#2d1e2f', fontSize: '30px' }} />
            </button>
        </div>
    )
}

export default Button