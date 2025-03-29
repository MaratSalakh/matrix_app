# Переменные
NPM = npm
NPM_RUN = $(NPM) run
SERVER_PORT = 3000

.PHONY: install dev build lint clean

# Установка зависимостей
install:
	$(NPM) install

# Запуск dev-сервера (обычно на порту 3000)
dev:
	$(NPM_RUN) dev

# Продакшн-сборка
build:
	$(NPM_RUN) build

# Запуск тестов (Jest/Vitest)
start:
	$(NPM_RUN) start

# Проверка линтером (ESLint)
lint:
	$(NPM_RUN) lint

# Очистка node_modules и кэша
clean:
	rm -rf node_modules .next dist
	$(NPM) cache clean