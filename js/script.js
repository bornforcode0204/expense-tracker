    const headingEl = document.querySelector("#headingTotal");
// init value of expense at 0
    let totalExpense = 0;

    headingEl.textContent =  totalExpense;

    
    // onButtonClick add inputAmount to totalExpense
    function addExpenseTotal() {
        //  reading value from input amount
        const inputElement = document.querySelector("#inputAmount");
        const textAmount = inputElement.value;
        const expense = parseInt(textAmount, 10)
        totalExpense = totalExpense + expense;
        headingEl.textContent = totalExpense;
        
    }
    
   
//  get the button element
    const element = document.querySelector("#btnAddExpense");

    element.addEventListener("click", addExpenseTotal, false);

