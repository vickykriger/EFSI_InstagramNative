export interface Comentario{
    nombreUsuario: string;
    comentario: string;
    fotoUsuario: string;
    likeado: boolean;
}
export interface Publicacion{
    imagen: string;
    nombreUsuario: string;
    descrpcion: string;
    likes: number;
    comentarios: Comentario[];
    fecha: string;
}
export interface User{
    nombre: string;
    imagen: string;
    biografia: string;
    cantPublicaciones: number;
    cantSeguidores: number;
    cantSeguidos: number;
    publicaciones: Publicacion[];
}