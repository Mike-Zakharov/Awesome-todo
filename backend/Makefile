// Принудительно убить порт
kill:
	netstat -ano | findstr :3000
	taskkill /pid 11500 /f
	@echo "✅ Процесс на порту 3000 убит"