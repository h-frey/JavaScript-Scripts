let opt = prompt(
  "You are at an entrance🚪 of a castle. Select 'Y' to begin or 'N' to return to your loser life",
  "Y"
);
if (opt === "Y" || opt === "y") {
  alert("Thanks for choosing not to be  a sore loser. Now let's play.");
  let name = prompt("But before we begin, what is your name", "name");
  alert(`Hello ${name}, so glad you joined me in this quest.`);
  let one = prompt(
    "There is a zombie right infront of you, you can burn it with fire(1) or chock it with a chain(2)"
  );
  if (one == 1) {
    alert("So you like fire , huh? Do you think you are pepper?");
  } else if (one == 2) {
    alert(
      "how brutal of you mate... Anyway a guy likes what a guy likes i guess"
    );
  } else {
    alert(
      "Do you have a clue of what instructions are dude😕☹! i said it is 1 or  2. Jeez what can a guy do to  get some freaking piece of mind"
    );
  }
} else {
  alert(
    "It is sad to see you go, you loser but here we aint no wimps so bye bye 🎢"
  );
}
