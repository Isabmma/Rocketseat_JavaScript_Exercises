/*
Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra:
    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

function convertTemperature(temperature) {
  let splitTemperature = temperature.split("°")

  console.log(splitTemperature) //['25', 'C']

  let celcius = splitTemperature[1] === "C"
  let firenheight = splitTemperature[1] === "F"

  let numTemperature = Number(splitTemperature[0])

  console.log(numTemperature) //25

  let result
  let finalResult
 
  if (celcius) {
      result = numTemperature * 9/5 + 32
      finalResult = `${temperature} = ${result}°F`
  } else if (firenheight) {
      result = (numTemperature - 32) * 5/9
      finalResult = `${temperature} = ${result}°C`
  } else {
      "Insira novamente a temperatura no formato exemplo: 25°C ou 25°F"
  }

  return finalResult
}

console.log(convertTemperature("77°F")) // 77°F = 25°C