import './app-filter.css'

const AppFilter = (props) => {
    const ButtonsData = [
        {name: 'all' , descr: 'Все сотрудники'},
        {name: 'star' , descr: 'На повышение'},
        {name: 'moreThen1000' , descr: 'Зп больше 1000$'}
    ];
    const buttons = ButtonsData.map(({name, descr}) => {
        const active = props.filter === name;
        const clazz = active ? ' btn-light' : ' btn-outline-light'
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {descr} 
            </button>
        )
    })

        return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;