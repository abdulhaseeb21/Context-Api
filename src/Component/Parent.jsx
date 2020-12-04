import Child from './Child'
const Parent = () => {
    console.log('parent is rendering');
    return (
        <div>
            <h2>Parent</h2>
            <Child />
        </div>
    )
}
export default Parent