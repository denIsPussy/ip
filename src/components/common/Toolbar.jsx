export default function Toolbar(props) {
    function add() {
        props.onAdd();
    }
    return (
        <div className="mb-5" role="group">
            <div className={"category-text-width mb-2"} style={{color: 'white', fontFamily: '"iviSans Medium"'}}>Добавить фильм</div>
            <button type="button" className={"btn"} style={{color: 'white', backgroundColor: '#312b45', width: 'fit-content'}} onClick={add}>Добавить</button>
        </div>
    );
}