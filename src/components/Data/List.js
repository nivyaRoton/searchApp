import { React} from 'react'
import data from "../Data/ListData.json"
import Card from '../UI/Card';

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        
        <ul style={{listStyle:"none"}}>
            {filteredData.map((item) => (
                <Card>
                <li key={item.id}>
                    {item.text}
                    </li>
                    </Card>
            ))}
        </ul>
    )
}

export default List