import { useEffect, useState } from "react";
import InputText from "../components/InputText";
import { getFeching } from "../utils/helper";

export default function CreateArea(props) {
  const [data, setData] = useState({ name: "", description: "" });
  const [areasDad, setAreasDad] = useState([]);
  const [areasDadVisible, setArasDadVisible] = useState([]);
  const [areaDad, setAreaDad] = useState("");

  const handleChangeDescription = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const handleChangeName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data: ", data);
  };

  useEffect(() => {
    getFeching(`area/all`).then((data) => {
      setAreasDad(data.data);
      /* filtrar lista de objetos por una condicion */
      let lista = data.data.filter((el) => !el.idareadad);
      /* insertar iten al principio */
      // lista.unshift({
      //   idarea: lista[lista.length - 1].idareadad,
      //   name: "ninguno",
      // });

      //console.log(lista);
      setArasDadVisible(lista);
    });
  }, []);

  const handleChangeAreaDad = async (e) => {
    console.log("selecteds : ",areasDadVisible);
    console.log("Dad: ",areasDad);
    if (e.target.value === "null") {
      //get items filtrados from array
      let lista = areasDad.filter((el) => !el.idareadad);
      setArasDadVisible(lista);
    }else{
      
      let lista = areasDad.find((el) => el.idarea == e.target.value);
      
      //console.log({areasDad});
      let newList = [...lista.children];
      console.log({newList});
      setAreaDad(lista.name);
      console.log(lista.idarea);
      newList.unshift({ idarea: lista.idareadad, name: "regresar" });
      setArasDadVisible(newList);
      //await promise 3 seconds
      
    }

  };

  const handleback = (e) => {
    /* find all item with condition in array*/
    console.log(e.target.value);
    let item = areasDad.find((el) => el.idarea == e.target.value);
    console.log(item);

    let lista = areasDad.filter((el) => el.idareadad == item.idareadad);
    lista.unshift({
      idarea: lista[lista.length - 1].idarea,
      name: item.idareadad ? "regresar" : "ninguno",
    });
    setArasDadVisible(lista);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText
          id="area"
          name="name"
          type="text"
          placeholder="nombre"
          value={data.name}
          onChange={handleChangeName}
        />

        <InputText
          id="description"
          name="description"
          type="text"
          placeholder="descripcion"
          value={data.description}
          onChange={handleChangeDescription}
        />
        <InputText
          id="idareadad"
          name="areadad"
          type="text"
          placeholder="area padre"
          value={areaDad}
          disabled={true}
        />
        <select>
          {areasDadVisible.map((el, key) => (
            <option
              onClick={handleChangeAreaDad}
              key={key}
              value={`${el.idarea}`}
            >
              {el.name}
            </option>
          ))}
        </select>
        <br></br>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}
