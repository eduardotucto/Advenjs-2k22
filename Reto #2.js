function countHours(year, holidays) {
	const holidaysDate = holidays.map(holiday => `${holiday}/${year}`)
	const recoverableHolidays = holidaysDate.filter(holiday => {
		const d = new Date(holiday)
		const weekDay = d.getDay()
		const weekDaysNumber = [6, 0] // Sabado y domingo
		return !weekDaysNumber.includes(weekDay)
	})
	const extraHours = recoverableHolidays.length * 2
	return extraHours
}


const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año