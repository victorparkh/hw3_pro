points = 0;

first_answer = prompt("Сколько будет 2+2?");
first_answer = first_answer.trim();

if (first_answer == 4 || first_answer == "четыре" || first_answer == "four") {
  points += 10;
} else {
  alert("Не верно");
}

second_answer = prompt("Солнце встает на востоке?");
second_answer = second_answer.trim();
second_answer = second_answer.toLowerCase();

if (second_answer == "+" || second_answer == "yes" || second_answer == "да") {
  points += 10;
} else {
  alert("Не верно");
}

third_answer = prompt("Сколько будет 5/0?");
third_answer = third_answer.trim();
third_answer = third_answer.toLowerCase();

if (third_answer == "бесконечность" || third_answer == "infinity") {
  points += 10;
} else {
  alert("Не верно");
}

fourth_answer = prompt("Какого цвета небо?");
fourth_answer = fourth_answer.trim();
fourth_answer = fourth_answer.toLowerCase();

if (
  fourth_answer == "синего" ||
  fourth_answer == "голубого" ||
  fourth_answer == "blue"
) {
  points += 10;
} else {
  alert("Не верно");
}

fifth_answer = prompt(
  "Какой правильный ответ на главный вопрос жизни, вселенной и всего такого"
);
fifth_answer = fifth_answer.trim();
fifth_answer = fifth_answer.toLowerCase();

if (fifth_answer == 42) {
  points += 10;
} else {
  alert("Не верно");
}

alert(`Ваш результат: ${points} баллов`);
