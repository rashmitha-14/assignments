// if the guy is eligibible for loan or not
// if not enigible why is not eligible with reason we need to print


function checkLoanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number)
    : void {

    // Display initial message
    console.log("Loan Evaluation Result for: " + customerName);

    //Step-1: Check the credit score
    if (creditScore > 750) {
        // If the crediScore is above 750, the loan is automatically approved
        console.log(`Loan approved to ${customerName} with excellent credit score.`);
    } else if (creditScore >= 650) {
        //If credit scores between 650 and 750,further checks are needed
        // Step-2 :Check income
        if (income >= 50000) {
            // If the income  is atleast $50,000 ,check employeement status
            if (isEmployed) {
                // STEP-3 :Check the debt-to-income
                if (debtToIncomeRatio < 40.0) {
                    // If DTI is less than 40%,approve loan
                    console.log("Loan Approved :Meets the all criteria.");
                } else {
                    // If the DTI is 40% or greater,deny the loan 
                    console.log("Loan is Denied : debt-to- income ratio is too high.");
                }
            } else {
                // If the customer is unemployee,deny the loan
                console.log("Loan Denied : Customer is not employee.");
            }
        } else {
            // If the income is less than $50.000,deny loan
            console.log("Loan Denied : Income is less than required.");
        }
    } else {
        // If the credit score is below 650 ,deny loan
        console.log("Loan Denied : creditScore is too low.");
    }

}

// Calling th function and providing the value for parameter
checkLoanEligibility(
    "John Doe",
    720,
    55000.0,
    true,
    350.0
);