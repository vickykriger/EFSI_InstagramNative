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

        // Rutas directas relativas a la carpeta public
        const seisUsuarios = [
          {
            nombre: 'SofiVicky',
            imagen: '/sofiVicky.jpg', 
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
            imagen: '/valuAilu.JPG',
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
            imagen: '/ceciClari.JPG',
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
            imagen: '/fioEli.JPG',
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
            imagen: '/santiAgus.JPG',
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
            imagen: '/warriors.JPG',
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
        {/* Barra lateral izquierda */}
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

        {/* CONTENEDOR PRINCIPAL: Divide la pantalla en Feed (Izquierda) y Sugerencias (Derecha) */}
        <View style={styles.contentWrapper}>
          
          {/* LADO IZQUIERDO: Solo el feed conserva el ScrollView */}
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

          {/* LADO DERECHO: La barra de sugerencias fija al costado (solo si no estás viendo un perfil o post) */}
          {!postSeleccionado && !usuarioSeleccionado && (
            <View style={styles.suggestionsSection}>
              <SuggestionsBar listaSugeridos={usuarios} onSelectUser={setUsuarioSeleccionado} />
            </View>
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
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
    maxWidth: 1000,        
    marginHorizontal: 'auto',
    width: '100%',
  },
  mainContent: {
    flex: 1,
    maxWidth: 600,          
    backgroundColor: '#ffffff',
  },
  scrollPadding: {
    paddingBottom: 32,
    paddingTop: 20,
  },
  feedSection: {
    flexDirection: 'column',
    width: '100%',
  },
  suggestionsSection: {
    width: 350,   
    paddingHorizontal: 24,
    marginTop: 24,
    display: 'flex', 
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