// js/script.js - обновлённая версия
document.addEventListener('DOMContentLoaded', function() {
    const serviceFilter = {
        // Конфигурация категорий
        categories: {
            'Сантехника': ['ванн', 'раковин', 'унитаз', 'смеситель', 'сифон'],
            'Электрика': ['розетк', 'выключатель', 'электропроводк'],
            'Бытовая техника': ['холодильник', 'стиральн', 'посудомоечн'],
            'Монтажные работы': ['установк', 'монтаж', 'демонтаж']
        },

        // Инициализация фильтра
        init() {
            const filterContainer = document.getElementById('service-filter');
            if (!filterContainer) return;

            // Создаём кнопки для каждой категории
            Object.keys(this.categories).forEach(category => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn';
                btn.textContent = category;
                btn.addEventListener('click', () => this.filterServices(category));
                filterContainer.appendChild(btn);
            });
        },

        // Фильтрация услуг по категории
        filterServices(category) {
            const services = document.querySelectorAll('.service-item');
            const keywords = this.categories[category];

            services.forEach(service => {
                const serviceText = service.textContent.toLowerCase();
                const isMatch = keywords.some(keyword => 
                    serviceText.includes(keyword.toLowerCase())
                );
                service.style.display = isMatch ? 'block' : 'none';
            });
        }
    };

    serviceFilter.init();
});
