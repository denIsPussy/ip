export default function FilmsBar(props) {
  function edit(id) {
      props.onEdit(id);
  }

  function remove(id) {
      props.onRemove(id);
  }
  return (
    <>
      {props.items.map((item) => (
          <div key={item.id} className="col-xl-2 col-lg-4 col-6 mt-2">
            <img src={item["image"]} className="img-fluid rounded-3" alt="" />
              <div className="text-center container text-truncate p-0" style={{color: "white"}}>
                {item.name}, {item.movieTracking}, {item.rating}
              </div>
              <button href="#" className="btn text-center d-flex justify-content-center mt-2" style={{color: 'white', fontFamily: '"iviSans Medium"', backgroundColor: '#312b45'}} onClick={(e) => remove(item.id, e)}> Удалить </button>
              <button href="#" className="btn text-center d-flex justify-content-center mt-2" style={{color: 'white', fontFamily: '"iviSans Medium"', backgroundColor: '#312b45'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(e) => edit(item.id, e)}> Изменить </button>
          </div>
      ))}
    </>
  );
}
