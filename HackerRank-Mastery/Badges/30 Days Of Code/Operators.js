/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = (meal_cost / 100) * tip_percent;
    let tax = (tax_percent / 100) * meal_cost;
    let total_cost = meal_cost + tip + tax;
    console.log(Math.round(total_cost));
}
