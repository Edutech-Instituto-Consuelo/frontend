export interface Curso {
  id: number;
  titulo: string;
  instrutor: string;
  imagem: string;
  avaliacao: number;
  numeroAvaliacoes: number;
  preco: number; 
}

const cursosPopulares: Curso[] = [
    {
        id: 1,
        titulo: "Bootcamp FullStack Java + React",
        instrutor: "Guilherme Clemente",
        imagem: "https://wordpress-cms-gc-prod-assets.quero.space/uploads/2021/07/Cursos-de-faculdade.jpg",
        avaliacao: 4.8,
        numeroAvaliacoes: 2341,
        preco: 49.99
    },

    {
        id: 2,
        titulo: "Desenvolvimento Mobile",
        instrutor: "Matheus Viana",
        imagem: "https://www.cursosrapidosgratis.com.br/site/seo/img/cursos-online.jpg",
        avaliacao: 4.7,
        numeroAvaliacoes: 2094,
        preco: 54.99

    },

    {
        id: 3,
        titulo: "Python para Iniciantes",
        instrutor: "Caroliny Gonçalves",
        imagem: "https://concursossc.com.br/wp-content/uploads/2023/03/cursos-profissionalizantes-gratuitos.jpg",
        avaliacao: 4.9,
        numeroAvaliacoes: 3210,
        preco: 59.99
    }

];

export default cursosPopulares;