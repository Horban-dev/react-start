import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';




const EmployersList = ({data, onDeleted, onToggleIncrease, onToggleStar, changeSalary}) => { 
    const elements = data.map(item => {
        const {id, ...itemsProps} = item;
        return (
        <EmployersListItem 
        key={id} 
        {...itemsProps}
        onDeleted={() => onDeleted(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleStar={() => onToggleStar(id)}
        changeSalary={changeSalary}
        />
        )

    })

    return (
        <ul className="rpp-list list-group">
            {elements}
        </ul>
    );
}
export default EmployersList;