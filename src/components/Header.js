// import React from 'react' //we dont need it
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} onClick={onAdd} text={showAdd ? 'Close' : 'Add'}/>
        </header>
    )
}
//default props 
Header.defaultProps = {
    title : 'Task Tracker'
}
Header.propTypes = {
    title : PropTypes.string.isRequired
}
// css in js
// const headingStyle = {
//     color : 'red',
//     backgroundColor : 'black'
// }
export default Header
