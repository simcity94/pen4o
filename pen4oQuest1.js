function pen4oQuest1(sideA, sideB, sideC){
  if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
    console.log(`The Triangle of Truth with sides ${sideA}, ${sideB}, and ${sideC} has been validated. Pen4o, you may begin your journey!`);
      console.log("Great Success");
  } else {
    console.log(`The Triangle of Truth with sides ${sideA}, ${sideB}, and${sideC} is invalid. Pen4o remains stuck!`);
      console.log("Fail!");
  }
}
pen4oQuest1(1, 2, 3)
