let Animal = prompt("What animal do you have?", "Dog");
let AnimYear = prompt("Age of your animal?", 1);
function calculateAge(Animal, AnimYear) {
  let conversionRate;
  switch (Animal) {
    case "Dog":
      conversionRate = 7;
      break;
    case "Cow":
      conversionRate = 14;
      break;
    case "Chinchilla":
      conversionRate = 25;
      break;
    default:
      throw Error(
        "Other animals than dogs, cats, and chinchillas are not supported."
      );
  }
  let HumYear = AnimYear * conversionRate;
  return `Your ${Animal} is ${AnimYear} years old, that corresponds to ${HumYear} human years.`;
}
document.write(calculateAge(Animal, AnimYear));
