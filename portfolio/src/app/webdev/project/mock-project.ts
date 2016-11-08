import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Materiały dydaktyczne',
    techs: ['PHP', 'XML', 'BOOTSTRAP3', 'CSS3', 'HTML5'],
    info: `Serwis internetowy Materiały dydaktyczne to projekt w języku php wykonany na zaliczenie przedmiotu
          Technologie WEB i JAVA. Istnieje w nim trzy typy użytkowników: student, nauczyciel i administrator.
          Nauczyciel może wrzucać na serwer pliki nadając im atrybuty nazwy, hasła oraz widoczności. 
          Może też usunąć, pobrać lub edytować wrzucony plik. Student może pobierać tylko widoczne pliki,
          które są (niekoniecznie) zabezpieczone hasłem. W projekcie zastosowałem technologię XML jako bazę
          danych, hasła do plików i kont użytkowników są szyfrowane. Całość dopełnia framework bootstrap,
          który zapewnia responsywność serwisu.`,
    path: './assets/img/projects/materialy-dydaktyczne/',
    imgs: ['1.png', '2.png', '3.png', '4.png']
  },
  {
    id: 2,
    name: 'Rivers',
    techs: ['PHP', 'SQL', 'BOOTSTRAP3', 'CSS3', 'HTML5'],
    info: `Strona internetowa rivers.pl, przystosowana do urządzeń mobilnych. 
          Projekt jest napisany w języku php, przy użyciu bazy danych phpmyadmin. 
          Widoki stworzone są w frameworku Bootstrap 3, przy zachowaniu standardów HTML5 i CSS3.`,
    path: './assets/img/projects/rivers/',
    imgs: ['1.png', '2.png', '3.png']
  },
  {
    id: 3,
    name: 'Magnetic',
    techs: ['PHP', 'BOOTSTRAP3', 'CSS3', 'HTML5'],
    info: `Strona internetowa magnetic.org.pl, przystosowana do urządzeń mobilnych. 
          Projekt jest napisany w języku php. 
          Widoki stworzone są w frameworku Bootstrap 3, przy zachowaniu standardów HTML5 i CSS3.`,
    path: './assets/img/projects/magnetic/',
    imgs: ['1.png', '2.png', '3.png', '4.png']
  }
];