//let Animal = prompt("What animal do you have?", "Dog");
//let AnimYear = prompt("Age of your animal?", 1);
function calculateAge() {
  let Animal;
  let AnimYear;
  if (document.getElementById("dog").checked) {
    Animal = "Dog";
  } else if (document.getElementById("cow").checked) {
    Animal = "Cow";
  } else if (document.getElementById("chinchilla").checked) {
    Animal = "Chinchilla";
  }
  AnimYear = Number(document.getElementById("age").value);
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
  let Message = `Your ${Animal} is ${AnimYear} years old, that corresponds to ${HumYear} human years.`;
  document.getElementById("message").innerHTML = Message;
}
//document.write(calculateAge(Animal, AnimYear));
