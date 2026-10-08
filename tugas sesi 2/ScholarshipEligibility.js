function analyzeScholarship(studentName, averageScore, attendance, familyIncome, organizationMember) {
  // Basic requirement
  const isBasicRequirementPassed = averageScore >= 80 && attendance >= 90;

  // determination of scholarship category
  let category = "Not Eligible";

  if (isBasicRequirementPassed) {
    if (familyIncome <= 3000000 && organizationMember) {
      category = "Category A";
    } else if (familyIncome <= 5000000 && organizationMember) {
      category = "Category B";
    }
  }

  // Output
  console.log(`Student: ${studentName}`);
  console.log(`Average Score: ${averageScore}`);
  console.log(`Attendance: ${attendance}%`);
  console.log(`Family Income: Rp${familyIncome}`);
  console.log(`Organization Member: ${organizationMember}`);
  console.log(`Basic Requirement: ${isBasicRequirementPassed ? "Passed" : "Failed"}`);
  console.log(`Scholarship Category: ${category}`);
  console.log("-----------------------------------");
}

// three students (Zidane, Nabyl, Regith)
analyzeScholarship("Zidane", 88, 95, 2500000, true);
analyzeScholarship("Nabyl", 85, 92, 4500000, true);
analyzeScholarship("Regith", 92, 85, 2000000, true);