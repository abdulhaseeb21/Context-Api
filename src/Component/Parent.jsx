import Child from './Child'
const Parent = ({ num }) => {
    return (
        <div>
            <h2>Parent</h2>
            <Child num={num} />
        </div>
    )
}
export default Parent