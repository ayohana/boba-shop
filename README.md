# [Boba Shop](https://github.com/ayohana/boba-shop.git/)

#### Object Oriented JavaScript Exercise for [Epicodus](https://www.epicodus.com/), 01.31.2020

#### By [**Adela Darmansyah**](https://ayohana.github.io/portfolio/)

## Description

**This website is for a boba (aka _bubble tea_) company.** A user can choose one or more individual toppings (tapioca pearls, coffee jelly, egg pudding, etc) and a size to order a boba drink and see the final cost. The pricing is as follows:

* +¢50 per topping (except $1 for Egg Pudding)
* +¢50 for a Medium and +$1 for a Large

## Specs

<details>
  <summary>Click to expand!</summary>

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses index.html | Homepage with user input form |
| **Program Gathers User Input for a Topping** | `Checked Checkbox:` <br> "Tapioca Pearls" | `Console:` <br> "Tapioca Pearls" |
| **Program Gathers User Input for Multiple Toppings** | `Checked Checkbox:` <br> "Tapioca Pearls", "Egg pudding" | `Console:` <br> "Tapioca Pearls", "Egg pudding" |
| **Program Gathers User Input for Size**| `Checked Radio:` <br> "Small" | `Console:` <br> "Small" |
| **Program Saves a Drink Order in a Constructor**| `Checked Checkbox:` <br> "Tapioca Pearls" <br> `Checked Radio:` <br> "Small" | `Console:` <br> testDrink = {<br>toppings: ["Tapioca Pearls"], <br>size: "Small"<br>} |
| **Program Applies Pricing of a Specific Drink Size with Toppings**| `Checked Checkbox:` <br> "Tapioca Pearls" <br> `Checked Radio:` <br> "Small" | `Console:` <br> "3.50" |
| **Program Shows Order Confirmation of Drink Size, Toppings and Price on Checkout**| `Clicked Button:` "Checkout" | `Modal:` "Order Confirmation: 1 Small milk tea with Tapioca Pearls. Total = $3.50" |
| **Program Applies Special Pricing for Egg Pudding Topping**| `Checked Checkbox:` <br> "Egg Pudding" <br> `Checked Radio:` <br> "Small" | `Modal:` "Order Confirmation: 1 Small milk tea with Egg Pudding. Total = $4.00" |
</details>

## Setup/Installation Requirements

* Clone this [repository](https://github.com/ayohana/boba-shop.git/)
* Open `index.html` in your preferred web browser.
* _Order your boba drink!_

Or simply click on this [link](https://ayohana.github.io/boba-shop/) to open the web application.

## Known Bugs

No known bugs at this time.

## Support and contact details

Feel free to provide feedback via email: adela.yohana@gmail.com.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
  - Constructors
  - Prototypes
* jQuery
* Markdown

### License

This webpage is licensed under the MIT license.

Copyright (c) 2020 **Adela Darmansyah**