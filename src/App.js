import { useDispatch, useSelector } from "react-redux";
import { inputChange } from "./actions";
import { getSearchInput } from "./selectors";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const searchInput = useSelector(getSearchInput);
  const onInputChange = (event) => {
    dispatch(inputChange(event.target.value));
  };

  

  return (
    
    <div className="App">
    <h2>Kindly paste your message here...</h2>
      <input
        id="search"
        name="search"
        class="search"
        placeholder="what's your message..?"
        onChange={onInputChange}
        
      />
    
      <div className="clock">
	<span id="seconds">5</span>
</div>
<h3></h3>
      <b>Delayed input message:</b> {searchInput}
    </div>
  );
}
