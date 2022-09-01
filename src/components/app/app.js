import { Component } from 'react';


import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/emloyers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Illia Horb' , salary: 500 , increase: false , star: true ,  id: 1},
                {name: 'Dan Mil' , salary: 2100 , increase: true , star: false ,  id: 2},
                {name: 'Kris Rock' , salary: 4200 , increase: false , star: false ,  id: 3},
                {name: 'Zak Bil' , salary: 300 , increase: false , star: false ,  id: 4},
                {name: 'Rob Kiss' , salary: 7000 , increase: false , star: false ,  id: 5}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 6
    }

  

    deleteItem = (id) => {
        this.setState(({data})=> {
            return {
                data: data.filter(el => el.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            star: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    } 


    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return  {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }
    onToggleStar = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return  {...item, star: !item.star}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }


        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterOn = (items, filter) => {
        switch (filter) {
            case 'star':
                return items.filter(item => item.star);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    changeSalary = (newSalary, name) => {
        this.setState(({data}) => ({
            data: data.map(person => {
                if(person.name === name) {
                    return {...person, salary: newSalary}
                }
                return person
            })
        }))
    }
    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterOn(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo employees={employees} increase={increase}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data={visibleData}
                    onDeleted={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleStar={this.onToggleStar}
                    changeSalary={this.changeSalary}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
            
        );
    }
}

export default App;