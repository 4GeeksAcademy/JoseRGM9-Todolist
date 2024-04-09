import React, { useState } from "react";


//include images into your bundle


//create your first component
const TodoList = () => {
	const [inputValue, setInputValue] = useState ("");
	const [misTareas, setMisTareas] = useState ([]);

	return (
		<div className="containerPrincipal">
		<div className="container">
			<div className="titulo">
			<h1>Mis Tareas</h1>
			</div>
			<ul>		
				
				<input className="agregarTarea" type="text"
				onChange={(event) => setInputValue(event.target.value)}
				value= {inputValue}
				onKeyUp={(event) => {
					if (event.key === "Enter" && inputValue.length >= 3) {
						setMisTareas ([...misTareas, inputValue]);
						setInputValue("");
					}
				}}
				 placeholder= " Agrega Nueva Tarea">
					
				</input>
				
				{misTareas.map((item, index) => (
				<div className="tarea">
				<li>
					<span className="escritoTarea">{item} {""}</span>
					
					<i 
						className="fas fa-trash-alt icono-borrar"
						onClick={() => 
							setMisTareas (
								misTareas.filter (
									(tarea, currentIndex) =>
										index != currentIndex
								)
							)
						}						
					>
					</i>
					
				</li>
				</div>			
			))}
			</ul>
			<div className="contenedorTasks">
				{misTareas.length} tasks
			</div>
			<div className="contenedorTasks2">
			</div>
			<div className="contenedorTasks1">	
			</div>	
		</div>
		</div>
	);
};

export default TodoList;