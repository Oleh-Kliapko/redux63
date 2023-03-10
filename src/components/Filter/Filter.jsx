import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    return(
        <div>
      Find contacts by Name:
      <input
        type="text"
        placeholder="Start typing a name..."
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </div>

  );
}