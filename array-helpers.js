// Array Helper Functions

// 1. WRITE YOUR OWN VERSION OF THE INCLUDES METHOD (do not use array.includes)
// Function Name:   includes
// Parameters:      item: the item to search for
//                  anArray: the array to search in
// Purpose:         Search anArray for item.  Return true if item is in anArray, else return false.
// Return Value:    true or false, depending on whether item is in anArray

function includes(item, anArray) {
    // Traverse through array to find value equal to item
    for (let i = 0; i < anArray.length; i++) {
        // Item equal to value in array will return true
        if (item == anArray[i]) {
            return document.getElementById("perfect-grade").innerHTML = true;
        }
    }
    // If no value matches item, then return false
    return document.getElementById("perfect-grade").innerHTML = false;

}



// 2. WRITE YOUR OWN VERSION OF MATH.MIN (do not use Math.min)
// Function Name:   minItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The minimum value in anArray.

function minItem(anArray) {
    // Set min to 100 
    let min = 100;
    // Traverse through the array to find values less than 100
    for (let i = 0; i < anArray.length; i++) {
        // If values are less than minimum, new value becomes minimun
        if (min > anArray[i]) {
            min = anArray[i];
        }
    }
    // Return lowest value
    return document.getElementById("lowest-grade").innerHTML = min;

}


// 3. WRITE YOUR OWN VERSION OF MATH.MAX (do not use Math.max)
// Function Name:   maxItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The mmaximum value in anArray.

function maxItem(anArray) {
    // Set max to 0 
    let max = 0;
    // Traverse through the array to find values more than 100
    for (let i = 0; i < anArray.length; i++) {
        // If values are greater than maximum, new value becomes maximum
        if (max < anArray[i]) {
            max = anArray[i];
        }
    }
    // Return highest value
    return document.getElementById("highest-grade").innerHTML = max;
}


// 4. WRITE A FUNCTION TO DETERMINE THE AVERAGE OF ARRAY ITEMS
// Function Name:   arrayAverage
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the average of the values in anArray.
// Return Value:    The average of the values in anArray.

function arrayAverage(anArray) {
    // Set total sum as 0
    let sum = 0;
    // Traverse through the array while adding values together
    for (let i = 0; i < anArray.length; i++) {
        sum += anArray[i];
    }
    // Return sum divided by array length to equal total average
    return document.getElementById("ave-grade").innerHTML = (sum / anArray.length);
}