EFSI_InstagramNative/
│
├── App.js
├── app.json
├── index.js
├── package.json
├── tsconfig.json
├── assets/
├── public/
└── src/
    ├── api.ts
    ├── interfaz.ts
    └── components/
        ├── CommentSection.tsx
        ├── FooterLinks.tsx
        ├── GridItem.tsx
        ├── NavItem.tsx
        ├── PostCard.tsx
        ├── Profile.tsx
        ├── ProfileGrid.tsx
        ├── ProfileHeader.tsx
        ├── ProfileView.tsx
        ├── SideBar.tsx
        ├── SingularPostView.tsx
        ├── StoriesBar.tsx
        ├── StoryCircle.tsx
        ├── SuggestionsBar.tsx
        ├── SuggestionsList.tsx
        ├── UserProfileMini.tsx
        └── UserSuggestionsList.tsx
```

`src/interfaz.ts` define los tipos centrales usados por la aplicación:

- `Comentario`
  - `nombreUsuario: string`
  - `comentario: string`
  - `fotoUsuario: string`
  - `likeado: boolean`
- `Publicacion`
  - `imagen: string`
  - `nombreUsuario: string`
  - `descrpcion: string`
  - `likes: number`
  - `comentarios: Comentario[]`
  - `fecha: string`
- `User`
  - `nombre: string`
  - `imagen: string`
  - `biografia: string`
  - `cantPublicaciones: number`
  - `cantSeguidores: number`
  - `cantSeguidos: number`
  - `publicaciones: Publicacion[]`

`App.js`
- Componente raíz de la app.
- Carga los datos desde `src/api.ts` en el `useEffect` inicial.
- Construye un arreglo hardcodeadode usuarios con publicaciones e imágenes.
- Controla el estado de la vista principal y decide qué pantalla renderizar.
- Desde aquí se derive la lógica de selección de usuario y publicación.

`src/components/SideBar.tsx`
- Presenta el encabezado tipo logo de Instagram.
- No consume props.


`src/components/StoriesBar.tsx`
Props:
- `usuarios: User[]`
- `onSelectUser: (user: User) => void`
Descripción:
- Renderiza un carrusel horizontal con las historias de cada usuario.
- Al pulsar una historia llama a `onSelectUser(user)`.
- Permite seleccionar un perfil desde el feed.
- Es un componente de interacción específico, reutilizable como lista de historias.

`src/components/PostCard.tsx`
Props:
- `publicacion`
- `imagenUsuario`
- `onSelect`
- `onSelectUser`
Descripción:
- Muestra la tarjeta de cada post con avatar, nombre de usuario, imagen, likes y descripción.
- `onSelect` abre vista de post singular.
- `onSelectUser` abre perfil del autor.
- Componente de publicación que muestra la vista de un post.
- Separa la presentación de cada post del listado en `App.js`.

`src/components/SuggestionsBar.tsx`
Props:
- `listaSugeridos: User[]`
- `onSelectUser: (user: User) => void`
Descripción:
- Muestra al usuario actual sugerido y una lista de sugerencias.
- Incluye un subcomponente `UserProfileMini` para renderizar el perfil pequeño.
- Agrega `FooterLinks` en la parte inferior.
- Separa el panel de sugerencias del resto del feed.

`src/components/UserProfileMini.tsx`
Props:
- `usuario: User`
Descripción:
- Renderiza mini perfil con avatar y texto.
- Botón `Switch` está presente como UI visual.
- Componente reutilizable para mostrar el usuario actual o sugerido.

`src/components/FooterLinks.tsx`
Descripción:
- Renderiza enlaces de pie de página estilo Instagram con año dinámico.
- Componente de presentación independiente para mantener la barra de sugerencias limpia.

`src/components/ProfileView.tsx`
Props:
- `usuarioSeleccionado: User`
- `setUsuarioSeleccionado: React.Dispatch<React.SetStateAction<User | null>>`
- `setPostSeleccionado: React.Dispatch<React.SetStateAction<Publicacion | null>>`
Descripción:
- Muestra la vista de perfil de un usuario seleccionado.
- Presenta información y grid de publicaciones.
- Permite volver al feed con `setUsuarioSeleccionado(null)`.
- Permite seleccionar una publicación para ver el post singular.
- Componente de detalle que muestra un solo perfil y su contenido.

`src/components/SingularPostView.tsx`
Props:
- `postSeleccionado: Publicacion`
- `setPostSeleccionado: React.Dispatch<React.SetStateAction<Publicacion | null>>`
Descripción:
- Vista detallada de una publicación seleccionada.
- Renderiza autor, imagen, likes, descripción y comentarios.
- Botón para volver al feed.
- Componente de detalle independiente para el post.
- Aísla la visualización completa de una publicación del listado general.
`src/components/Profile.tsx`, `ProfileHeader.tsx`, `ProfileGrid.tsx`, `GridItem.tsx`

- `Profile.tsx`
  - Prop: `usuario: User`
  - Composición: `ProfileHeader` + `ProfileGrid`.
- `ProfileHeader.tsx`
  - Prop: `usuarioSeleccionado`
  - Renderiza avatar y estadísticas.
- `ProfileGrid.tsx`
  - Prop: `publicaciones: Publicacion[]`
  - Mapea publicaciones a `GridItem`.
- `GridItem.tsx`
  - Prop: `publicacion: Publicacion`
  - Usa `useState(false)` local para simular hover táctil.
  - Renderiza el overlay de likes y comentarios cuando está presionado.
Justificación:
- Estructura en capas que separa encabezado de perfil, grid de publicaciones y celda individual.
- Permite reutilizar la lógica de grid en la vista de perfil sin duplicar código.
- `GridItem` encapsula la interacción táctil y el detalle visual de cada mini-post.

`src/components/CommentSection.tsx`
Props:
- `listaComentarios: Comentario[]`
Descripción:
- Renderiza la lista de comentarios de un post o mensaje vacío cuando no hay comentarios.
- Componente auxiliar de comentarios que puede reutilizarse en vistas detalladas de post.

Flujo de datos y props
- `usuarios`: lista de usuarios con publicaciones.
  - Se define con `useState([])`.
  - Se carga mediante `api.get('images/search?limit=10')` en `useEffect`.
- `cargando`: booleano de estado de carga.
  - Se define con `useState(true)`.
  - Controla si se muestra el `ActivityIndicator`.
- `postSeleccionado`: publicación actualmente seleccionada.
  - Se define con `useState(null)`.
  - Cambia cuando el usuario pulsa un post en el feed.
- `usuarioSeleccionado`: usuario seleccionado para vista de perfil.
  - Se define con `useState(null)`.
  - Cambia cuando el usuario pulsa un avatar o nombre.


Lógica de selección y navegación

- `setPostSeleccionado(post)` abre la vista de post singular.
- `setUsuarioSeleccionado(usuarioDelPost)` abre el perfil del autor.
- `setUsuarioSeleccionado(null)` vuelve al feed desde `ProfileView`.
- `setPostSeleccionado(null)` vuelve al feed desde `SingularPostView`.

6. Estados globales vs locales

Estados a nivel global (`App.js`)

- `usuarios`: controla los datos de la app.
- `cargando`: control de estado de carga.
- `postSeleccionado`: controla si se muestra `SingularPostView`.
- `usuarioSeleccionado`: controla si se muestra `ProfileView`.

Estados locales

- `GridItem.tsx`: `const [hovered, setHovered] = useState(false)`.
  - Solo controla el estado táctil/visual de la miniatura de post.


- Diseño de Figma utilizado como referencia: [https://www.figma.com/community/file/1004033523744290376](https://www.figma.com/es-es/comunidad/file/1235135369163092252/instagram-web-ui-recreated)

Pasos para ejecutar:

-npm i
-npx expo start --w