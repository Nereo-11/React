import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiUsers } from "../../services/apiUsers";

interface PrivateRouteProps {
    children: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const userAPI: apiUsers = new apiUsers()
  
    // estado de autenticación
    const isAuthenticated = userAPI.isLoged()
  
    useEffect(() => {
        if (!isAuthenticated) {
            // Redirige al login si no está autenticado
            navigate('/login');
          }
    }, [isAuthenticated, navigate]);
    
    if (!isAuthenticated) {
        // Mientras redirige, no renderiza el contenido
        return null;
      }

  
    // Si está autenticado, renderiza los hijos (children) que se pasen al componente
    return <>{children}</>;
  };
  
  export default PrivateRoute;