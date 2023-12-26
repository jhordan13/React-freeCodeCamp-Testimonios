import './App.css';
import TestimonioComponent from './components/Testimonio';

function App() {

  const perfiles = [
    {
      nombre: "Rild Richard",
      image: "perfil1.jpg",
      pais: "Suecia",
      puesto: "Ingeniero de Software",
      company: "Spotify",
      descripcion: `Siempre he luchado con el aprendizaje de JavaScript. He 
      tomado muchos cursos, pero el curso gratuito de CodeCamp 
      fue el que se quedó. Estudiar JavaScript, así como 
      estructuras de datos y algoritmos en freeCodeCamp me dio 
      las habilidades y la confianza que necesitaba para 
      conseguir mi trabajo de ensueño como ingeniero de software 
      en Spotify`
    },
    {
      nombre: "Sarah Chima",
      image: "perfil2.jpg",
      pais: "Nigeria",
      puesto: "Ingeniero de Software",
      company: "ChatDesk",
      descripcion: `FreeCodeCamp era la puerta de entrada a mi carrera 
      como desarrollador de software. El currículum bien estructurado 
      llevó mi conocimiento de codificación de un nivel inicial total a 
      un nivel muy seguro. Era todo lo que necesitaba para conseguir mi 
      primer trabajo de devo en una compañía increíble.`
    },
    {
      nombre: "Shawn Wang",
      image: "perfil3.jpg",
      pais: "Singapur",
      puesto: "Ingeniero de Software",
      company: "Amazon",
      descripcion: `Es aterrador cambiar de carrera. Sólo me ganó la confianza 
      de que podía codificar trabajando a través de los cientos de horas de 
      lecciones gratuitas en el CodeCamp gratuito. En un año tuve un trabajo 
      de seis cifras como ingeniero de software. FreeCodeCamp cambió mi vida.`
    }
  ]

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros ex alumnos sobre FreeCodeCamp:</h1>
        {/* <TestimonioComponent perfil={perfiles[0]} />
        <TestimonioComponent perfil={perfiles[1]} />
        <TestimonioComponent perfil={perfiles[2]} /> */}
        {perfiles.map((perfil, index) => (
          <TestimonioComponent key={index} perfil={perfil} />
        ))}
      </div>
    </div>
  );
}

export default App;
