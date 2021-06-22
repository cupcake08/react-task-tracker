
import PropTypes from 'prop-types'

function Button({color,text,onClick}) {
    return (
        <button onClick = {onClick} style = {{backgroundColor:color}} className='btn'>{text}</button>
    )
}
Button.defaultProps = {
    color: 'black',
    text: 'Add'
}
Button.proptype = {
    text : PropTypes.string,
    color : PropTypes.string
}
export default Button
