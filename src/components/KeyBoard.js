import '../style/KeyBoard.css'
function KeyBoard(props) {
    return (
        <div className='keyBoard'>
            {props.KeyBoard.map(letter =>
                <button  onClick={(e) => clickLetter(letter, props)}>{letter}</button>
            )}
        </div>
    )
}
export default KeyBoard;

function clickLetter(letter, props){
    props.clickLetter(letter);
}