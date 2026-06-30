import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import api from './src/api';
import SideBar from './src/components/SideBar';
import StoriesBar from './src/components/StoriesBar';
import PostCard from './src/components/PostCard';
import SuggestionsBar from './src/components/SuggestionsBar';
import ProfileView from './src/components/ProfileView'; 
import SingularPostView from './src/components/SingularPostView';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [postSeleccionado, setPostSeleccionado] = useState(null);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  useEffect(() => {
    const cargarUsuariosYFotos = async () => {
      try {
        const respuesta = await api.get('images/search?limit=10');
        const fotosGatos = respuesta.data;
        
        const seisUsuarios = [
          {
            nombre: 'SofiVicky',
            imagen: require('./assets/sofiVicky.jpg'), 
            biografia: 'Amo a mis michis más que a nada en el mundo. 🐾💕',
            cantPublicaciones: 2,
            cantSeguidores: 500,
            cantSeguidos: 120,
            publicaciones: [
              {
                imagen: fotosGatos[0]?.url || '',
                nombreUsuario: 'SofiVicky',
                descrpcion: '¡Hola a todos! Miren esta fotito mía. #michi #catlife',
                likes: 125,
                fecha: 'Hace 1 hora',
                comentarios: [
                  { nombreUsuario: 'ValuAilu', comentario: '¡Qué preciosidad! 😍', fotoUsuario: 'https://via.placeholder.com/150', likeado: false }
                ]
              },
              {
                imagen: fotosGatos[1]?.url || '',
                nombreUsuario: 'SofiVicky',
                descrpcion: 'Haciendo la siesta número 5 del día... 😴',
                likes: 430,
                fecha: 'Hace 5 horas',
                comentarios: [
                  { nombreUsuario: 'CeciClari', comentario: 'Te entiendo totalmente, amiga.', fotoUsuario: 'https://via.placeholder.com/150', likeado: true }
                ]
              }
            ]
          },
          {
            nombre: 'ValuAilu',
            imagen: require('./assets/valuAilu.JPG'),
            biografia: 'Buscando aventuras y un buen tazón de leche ⚔️🥛',
            cantPublicaciones: 1,
            cantSeguidores: 9800,
            cantSeguidos: 450,
            publicaciones: [
              {
                imagen: fotosGatos[2]?.url || '',
                nombreUsuario: 'ValuAilu',
                descrpcion: 'Hoy exploramos el jardín trasero. Todo bajo control. 🌿',
                likes: 850,
                fecha: 'Hace 3 horas',
                comentarios: []
              }
            ]
          },
          {
            nombre: 'CeciClari',
            imagen: require('./assets/ceciClari.JPG'),
            biografia: 'Odio los lunes. Amo la lasagna y dormir 🍕💤',
            cantPublicaciones: 2,
            cantSeguidores: 15000,
            cantSeguidos: 10,
            publicaciones: [
              {
                imagen: fotosGatos[3]?.url || '',
                nombreUsuario: 'CeciClari',
                descrpcion: '¿Alguien dijo lasagna? Es mi momento de brillar.',
                likes: 2300,
                fecha: 'Hace 30 min',
                comentarios: []
              },
              {
                imagen: fotosGatos[4]?.url || '',
                nombreUsuario: 'CeciClari',
                descrpcion: 'Por favor, no me despierten hasta el martes.',
                likes: 4100,
                fecha: 'Hace 18 horas',
                comentarios: []
              }
            ]
          },
          {
            nombre: 'FioEli',
            imagen: require('./assets/fioEli.JPG'),
            biografia: 'Una gatita muy fina y selectiva con sus humanos 👑',
            cantPublicaciones: 2,
            cantSeguidores: 3200,
            cantSeguidos: 580,
            publicaciones: [
              {
                imagen: fotosGatos[5]?.url || '',
                nombreUsuario: 'FioEli',
                descrpcion: 'Juzgando a mis humanos en silencio como siempre.',
                likes: 190,
                fecha: 'Hace 4 horas',
                comentarios: []
              },
              {
                imagen: fotosGatos[6]?.url || '',
                nombreUsuario: 'FioEli',
                descrpcion: 'Rayos de sol perfectos para mi tarde de spa. ☀️',
                likes: 250,
                fecha: 'Hace 2 días',
                comentarios: []
              }
            ]
          },
          {
            nombre: 'SantiAgus',
            imagen: require('./assets/santiAgus.JPG'),
            biografia: 'Convierto café en bugs y cazo ratones de biblioteca 💻🐭',
            cantPublicaciones: 2,
            cantSeguidores: 4100,
            cantSeguidos: 890,
            publicaciones: [
              {
                imagen: fotosGatos[7]?.url || '',
                nombreUsuario: 'SantiAgus',
                descrpcion: 'Mi teclado es el mejor lugar para dormir, no me importa tu código.',
                likes: 560,
                fecha: 'Hace 45 min',
                comentarios: []
              },
              {
                imagen: fotosGatos[8]?.url || '',
                nombreUsuario: 'SantiAgus',
                descrpcion: 'Buscando el bug... creo que me lo comí. 🐜',
                likes: 710,
                fecha: 'Hace 8 horas',
                comentarios: []
              }
            ]
          },
          {
            nombre: 'Warriors',
            imagen: require('./assets/warriors.JPG'),
            biografia: 'Ven por un café y llévate mimos gratis ☕🐾',
            cantPublicaciones: 1,
            cantSeguidores: 8300,
            cantSeguidos: 210,
            publicaciones: [
              {
                imagen: fotosGatos[9]?.url || '',
                nombreUsuario: 'Warriors',
                descrpcion: '¡Muffin los espera hoy para tomar el té! 🧁',
                likes: 640,
                fecha: 'Hace 2 horas',
                comentarios: []
              }
            ]
          }
        ];
        setUsuarios(seisUsuarios);

      } catch (error) {
        console.error('Error cargando los michis de la API:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarUsuariosYFotos();
  }, []);

  if (cargando) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#c13584" />
        <Text style={styles.loadingText}>Creando perfiles de michis... 🐈</Text>
      </View>
    );
  }

  const todasLasPublicaciones = usuarios.flatMap(u => u.publicaciones);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appLayout}>
        <SideBar
          onGoHome={() => {
            setUsuarioSeleccionado(null);
            setPostSeleccionado(null);
          }}
          onGoToProfile={() => {
            if (usuarios.length > 0) {
              setUsuarioSeleccionado(usuarios[0]);
              setPostSeleccionado(null);
            }
          }}
        />

        <ScrollView style={styles.mainContent} contentContainerStyle={styles.scrollPadding}>
          {usuarioSeleccionado ? (
            <ProfileView
              usuarioSeleccionado={usuarioSeleccionado}
              setUsuarioSeleccionado={setUsuarioSeleccionado}
              setPostSeleccionado={setPostSeleccionado}
            />
          ) : postSeleccionado ? (
            <SingularPostView
              postSeleccionado={postSeleccionado}
              setPostSeleccionado={setPostSeleccionado}
            />
          ) : (
            <View style={styles.feedSection}>
              <StoriesBar usuarios={usuarios} onSelectUser={setUsuarioSeleccionado} />

              {todasLasPublicaciones.map((post, index) => {
                const usuarioDelPost = usuarios.find(u => u.nombre === post.nombreUsuario);
                return (
                  <PostCard
                    key={index}
                    publicacion={post}
                    imagenUsuario={usuarioDelPost?.imagen}
                    onSelect={() => setPostSeleccionado(post)}
                    onSelectUser={() => {
                      if (usuarioDelPost) {
                        setUsuarioSeleccionado(usuarioDelPost);
                      }
                    }}
                  />
                );
              })}
            </View>
          )}
        </ScrollView>

        <View style={styles.rightSidebar}>
          {!postSeleccionado && !usuarioSeleccionado && (
            <SuggestionsBar listaSugeridos={usuarios} onSelectUser={setUsuarioSeleccionado} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  appLayout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fafafa',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollPadding: {
    paddingBottom: 32,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  feedSection: {
    flexDirection: 'column',
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
  },
  rightSidebar: {
    width: 320,
    minWidth: 320,
    paddingTop: 24,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    fontSize: 16,
    color: '#262626',
    fontWeight: '500',
    marginTop: 12,
  },
});