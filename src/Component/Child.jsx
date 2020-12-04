import { useContext } from 'react'
import ValueContext from './ValueContext'

const Child = () => {
    console.log('Child is rendering');
    const val = useContext(ValueContext)
    return (
        <div>
            <h2>Child {val}</h2>
        </div>
    )
}
export default Child