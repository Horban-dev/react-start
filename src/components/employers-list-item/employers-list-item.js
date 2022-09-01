
import './employees-list-item.css';

const EmployersListItem = (props) => {
   
    const {name, salary, onDeleted, onToggleIncrease, onToggleStar, star, increase, changeSalary} = props;
    let classNames = "list-group-item d-flex justify-content-between ";
    if(star) {
        classNames += ' like'
    }
    if(increase) {
        classNames += ' increase';
    }
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleStar}>{name}</span>
            <input className="list-group-item-input" 
                   defaultValue={salary + '$'} 
                   onChange={(e) => changeSalary(e.target.value, name)}
                   />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm " 
                        onClick={onDeleted}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployersListItem;