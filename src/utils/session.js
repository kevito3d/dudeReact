
export const getUsuario = () => {
    const userStr = localStorage.getItem("usuario");
    if (userStr) return JSON.parse(userStr)
    else return null;
}

export const getToken = () => {
    return localStorage.getItem("token") || null ;
}

export const getPermiso = () => {
    return localStorage.getItem("permiso") || null ;
}


export const setUsuarioSession = (respuesta) => {
    localStorage.setItem("token", respuesta.token,);
    localStorage.setItem("usuario", respuesta.usuario.usuario);
    localStorage.setItem("permiso", respuesta.usuario.permiso);
}

export const removeUsuarioSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("permiso");
//prueba
}