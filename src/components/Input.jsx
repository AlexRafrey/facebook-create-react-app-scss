import React from 'react';

function Input({type, name, placeholder, st}) {
   return(
				<input 
					type={type}
					name={name} 
					placeholder={placeholder}
					className="form-input"
					style={st}
					/>
	);
}

export default Input;