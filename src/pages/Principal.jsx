import React from 'react';
import { Link } from "react-router-dom";

const Principal = () => {
	return (
		<div>
			<div>Soy el navegador
				<nav>
					<ul>
						<li>
							<h1>Nuestros seguros</h1>
							<ul>
								<li>
									<h4>Salud</h4>
								</li>
								<li>
									<h4><Link to='/Ssm/'>Hogar</Link></h4>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
			<div>Soy el carousel</div>
		</div>
	);
};

export default Principal;