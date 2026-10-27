// ==========================================
// 1. ДАННЫЕ
// ==========================================

const data = {
    "Герберт Брайн / Фрэнк": {
        "Предыстория Дюны": [
            { 
                name: "Охота за Харконненами", 
                pages: 30, 
                genre: "Фантастика", 
                rate: 3, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-09-23", 
                sessions: { start: "2025-09-23", end: "2025-09-23" },
                daysToRead: 1,
                status: "Прочитано"
            },
            { 
                name: "Батлерианский джихад", 
                pages: 721, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2022-11-26", 
                sessions: { start: "2022-11-19", end: "2022-11-26" },
                daysToRead: 8,
                status: "Прочитано"
            },
            { 
                name: "Мек для порки", 
                pages: 15, 
                genre: "Фантастика", 
                rate: 3, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-09-30", 
                sessions: { start: "2025-09-26", end: "2025-09-30" },
                daysToRead: 2,
                status: "Прочитано"
            },
            { 
                name: "Крестовый поход машин", 
                pages: 822, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2022-11-30", 
                sessions: { start: "2022-11-26", end: "2022-11-30" },
                daysToRead: 5,
                status: "Прочитано"
            },
            { 
                name: "Лики мучеников", 
                pages: 11, 
                genre: "Фантастика", 
                rate: 7, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-09-30", 
                sessions: { start: "2025-09-30", end: "2025-09-30" },
                daysToRead: 1,
                status: "Прочитано"
            },
            { 
                name: "Битва за Коррин", 
                pages: 822, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2022-12-03", 
                sessions: { start: "2022-11-30", end: "2022-12-03" },
                daysToRead: 4,
                status: "Прочитано"
            },
            { 
                name: "Орден Сестер", 
                pages: 546, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2022-12-08", 
                sessions: { start: "2022-12-03", end: "2022-12-08" },
                daysToRead: 6,
                status: "Прочитано"
            },
            { 
                name: "Ментаты Дюны", 
                pages: 506, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2022-12-14", 
                sessions: { start: "2022-12-08", end: "2022-12-14" },
                daysToRead: 7,
                status: "Прочитано"
            },
            { 
                name: "Красная чума", 
                pages: 18, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2022-12-14", 
                sessions: { start: "2022-12-14", end: "2022-12-14" },
                daysToRead: 1,
                status: "Прочитано"
            },
            { 
                name: "Навигаторы Дюны", 
                pages: 567, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2022-12-17", 
                sessions: { start: "2022-12-14", end: "2022-12-17" },
                daysToRead: 4,
                status: "Прочитано"
            },
            { 
                name: "Императорский двор", 
                pages: 70, 
                genre: "Фантастика", 
                rate: 5, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-10-01", 
                sessions: { start: "2025-10-01", end: "2025-10-01" },
                daysToRead: 1,
                status: "Прочитано"
            },
            { 
                name: "Лезвие крисножа", 
                pages: 100, 
                genre: "Фантастика", 
                rate: 7, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-10-02", 
                sessions: { start: "2025-10-02", end: "2025-10-02" },
                daysToRead: 1,
                status: "Прочитано"
            },
            { 
                name: "Дом Атрейдесов", 
                pages: 817, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2024-01-05", 
                sessions: { start: "2022-12-17", end: "2024-01-05" },
                daysToRead: 114,
                status: "Прочитано"
            },
            { 
                name: "Дом Харконненов", 
                pages: 836, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-09-23", 
                sessions: { start: "2024-01-06", end: "2025-09-23" },
                daysToRead: 11,
                status: "Прочитано"
            },
            { 
                name: "Дом Коррино", 
                pages: 672, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-10-21", 
                sessions: { start: "2025-10-02", end: "2025-10-21" },
                daysToRead: 9,
                status: "Прочитано"
            },
            { 
                name: "Свадебный шелк", 
                pages: 13, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-10-22", 
                sessions: { start: "2025-10-22", end: "2025-10-22" },
                daysToRead: 1,
                status: "Прочитано"
            },
            { 
                name: "Принцесса Дюны", 
                pages: 512, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2026-02-07", 
                sessions: { start: "2025-10-22", end: "2026-02-07" },
                daysToRead: 3,
                status: "Прочитано"
            },
            { 
                name: "Дюна. Герцог Каладана", 
                pages: 448, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2026-05-29", 
                sessions: { start: "2026-02-07", end: "2026-05-29" },
                daysToRead: 2,
                status: "Прочитано"
            },
            { 
                name: "Дюна. Леди Каладана", 
                pages: 576, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: null,
                sessions: { start: null, end: null },
                daysToRead: 0,
                status: "В планах"
            },
            { 
                name: "Дюна. Наследник Каладана", 
                pages: 576, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: null,
                sessions: { start: null, end: null },
                daysToRead: 0,
                status: "В планах"
            }
        ],
        "Дюна": [
            { 
                name: "Дюна", 
                pages: 640, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: "2025-10-21", 
                sessions: { start: "2025-10-21", end: "2025-10-21" },
                daysToRead: 1,
                status: "Прочитано"
            },
            { 
                name: "Дети дюны", 
                pages: 0, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: null,
                sessions: { start: null, end: null },
                daysToRead: 0,
                status: "В планах"
            },
            { 
                name: "Бог-император дюны", 
                pages: 0, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: null,
                sessions: { start: null, end: null },
                daysToRead: 0,
                status: "В планах"
            },
            { 
                name: "Еретики Дюны", 
                pages: 0, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: null,
                sessions: { start: null, end: null },
                daysToRead: 0,
                status: "В планах"
            },
            { 
                name: "Капитул Дюны", 
                pages: 0, 
                genre: "Фантастика", 
                rate: 8, 
                summary: "Краткое резюме книги",
                plot: "Подробный сюжет книги",
                dateFinished: null,
                sessions: { start: null, end: null },
                daysToRead: 0,
                status: "В планах"
            }
        ]
    }
};

// ==========================================
// 2. ЛОГИКА
// ==========================================

// Преобразуем вложенный объект в плоский массив книг
function flattenData(data) {
    let books = [];
    for (let authorName in data) {
        let author = data[authorName];
        for (let cycleName in author) {
            let booksInCycle = author[cycleName];
            booksInCycle.forEach(book => {
                books.push({
                    ...book,
                    author: authorName,
                    cycle: cycleName
                });
            });
        }
    }
    return books;
}

// Глобальный массив книг
let allBooks = flattenData(data);

// Элементы DOM
const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search-input');
const genreFilter = document.getElementById('genre-filter');
const statusFilter = document.getElementById('status-filter');

// Инициализация
function init() {
    if (!tableBody || !searchInput || !genreFilter || !statusFilter) {
        console.error("Не найдены элементы DOM. Проверьте index.html.");
        return;
    }

    populateGenreFilter();
    renderTable(allBooks);
    updateStats(allBooks);
    
    // Слушатели событий
    searchInput.addEventListener('input', handleFilter);
    genreFilter.addEventListener('change', handleFilter);
    statusFilter.addEventListener('change', handleFilter);
}

// Заполняем фильтр жанров
function populateGenreFilter() {
    const genres = [...new Set(allBooks.map(b => b.genre))].sort();
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

// Фильтрация
function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    const selectedStatus = statusFilter.value;

    const filteredBooks = allBooks.filter(book => {
        const matchesSearch = book.name.toLowerCase().includes(searchTerm) || 
                              book.author.toLowerCase().includes(searchTerm);
        const matchesGenre = !selectedGenre || book.genre === selectedGenre;
        const matchesStatus = !selectedStatus || book.status === selectedStatus;

        return matchesSearch && matchesGenre && matchesStatus;
    });

    renderTable(filteredBooks);
    updateStats(filteredBooks);
}

// Отрисовка таблицы
function renderTable(books) {
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = document.createElement('tr');
        
        const statusClass = book.status === 'Прочитано' ? 'status-read' : 
                            book.status === 'Читаю' ? 'status-reading' : 'status-planned';

        // Форматируем статистику чтения
        let statsText = "0";
        if (book.daysToRead > 0) {
            statsText = book.daysToRead;
        }

        row.innerHTML = `
            <td>${book.author}</td>
            <td><strong>${book.name}</strong></td>
            <td>${book.cycle}</td>
            <td>${book.pages}</td>
            <td class="summary-cell">${book.summary || '-'}</td>
            <td>${book.rate}</td>
            <td class="plot-cell">${book.plot || '-'}</td>
            <td class="${statusClass}">${statsText}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Обновление статистики
function updateStats(books) {
    const totalBooks = books.filter(b => b.status === 'Прочитано').length;
    const totalPages = books.filter(b => b.status === 'Прочитано').reduce((sum, b) => sum + b.pages, 0);
    const ratedBooks = books.filter(b => b.status === 'Прочитано' && b.rate > 0);
    const avgRate = ratedBooks.length > 0 
        ? (ratedBooks.reduce((sum, b) => sum + b.rate, 0) / ratedBooks.length).toFixed(1) 
        : '0.0';
    const totalDays = books.filter(b => b.status === 'Прочитано').reduce((sum, b) => sum + b.daysToRead, 0);

    document.getElementById('stat-books').textContent = totalBooks;
    document.getElementById('stat-pages').textContent = totalPages;
    document.getElementById('stat-avg').textContent = avgRate;
    document.getElementById('stat-days').textContent = totalDays;
}

// Запуск
document.addEventListener('DOMContentLoaded', init);