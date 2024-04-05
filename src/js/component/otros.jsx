<input type="text"
				onchange={(event) => setInputValue(event.target.value)}
				value= {inputValue}
				onKeyPress={(event) => {
					if (event.key === "enter") {
						setTodoList (todoList.concat([inputValue]));
						setInputValue("");
					}
				}}
				placeholder= "Que Necesitas?"></input>

				const {inputValue, setInputValue} = useState ("");
	const {todoList, setTodoList} = useState ([]);



	<i class="fas fa-trash-alt"></i>