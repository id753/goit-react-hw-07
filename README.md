### React + Vite

# Книга контактів

## Виконано рефакторинг коду застосунку «Книга контактів» https://github.com/id753/goit-react-hw-06.

 Видалено код, що відповідає за зберігання та читання контактів з локального сховища, тобто код пов’язаний з Redux Persist.
 Додано взаємодію з бекендом для зберігання контактів.

Бекенд. Створено свій персональний бекенд для розробки за допомогою UI-сервісу mockapi.io https://mockapi.io/.

Форма стану. Додано у стан Redux обробку індикатора завантаження та помилки HTTP-запитів. 

    Для цього змінено форму стану слайсу контактів, додавши властивості loading та error.
   
Операції. В папці redux створено файл contactsOps.js для зберігання асинхронних генераторів екшенів.

Використано функцію createAsyncThunk https://redux-toolkit.js.org/api/createAsyncThunk для оголошення операцій.
Для виконання HTTP-запитів використано бібліотеку axios.

Для коректного опрацювання помилки HTTP-запиту в середині операцій, використано конструкцію try...catch, та у блоці catch повернено результат виклику методу thunkAPI.rejectWithValue.

Функції-селектори:

    - Слайс контактів
    - Слайс фільтру

Мемоізація селекторів.
У файлі слайсу контактів contactsSlice.js створено та експортовано мемоізований селектор selectFilteredContacts за допомогою функції createSelector https://redux-toolkit.js.org/api/createSelector.

---
Розгорнуто на Vercel. </br>
Проект створений за допомогою Vite.</br>
Для кожного компонента у папці src/components є окрема папка, яка містить JSX файл самого React компонента та файл його стилів. Назва папки, файла компонента (з розширенням .jsx) та файла стилів (перед .module.css) однакова і відповідає назвам, вказаним у завданнях (якщо вони були)</br>
Для кожної сторінки у папці src/pages є окрема папка, яка містить JSX файл самого React компонента та файл його стилів.</br>
Для експорту компонентів використовується експорт за замовчуванням (export default).</br>
Використано Prettier.</br>
Використана бібліотека Redux Toolkit</br>
Стилізація виконана за допомогою CSS-модулів.</br>

---
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
