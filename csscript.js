function longestDescentPath(mountain) {
	const rows = mountain.length;

	// Створюємо копію гірського масиву для збереження найкращого спуску для кожної клітинки
	const dp = mountain.map(row => row.slice());

	// Обхід гори знизу вгору
	for (let i = rows - 2; i >= 0; i--) {
		for (let j = 0; j < mountain[i].length; j++) {
			// Оновлюємо найкращий спуск для поточної клітинки
			dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1] || 0);
		}
	}

	// Повертаємо найбільший спуск з верхнього рівня гори
	return dp[0][0];
}
// Приклад використання
const mountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];
console.log(longestDescentPath(mountain)); // Повинно вивести: 115
