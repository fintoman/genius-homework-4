const pattern = /^[А-ЯІЇЄҐ][а-яіїєґ]+ [А-ЯІЇЄҐ][а-яіїєґ]+$/;
const name = 'Іван Петров';

if (pattern.test(name)) {
  console.log("Ім'я та прізвище валідні.");
} else {
  console.log("Ім'я та прізвище не валідні.");
}
