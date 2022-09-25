# **v0.1.2**

## In the **Errorhandler** class **static** methods were added.

<br>
<br>
<br>

# **v0.1.3**

## **Set** and **Get** values have been added to the class properties.

<br>
<br>
<br>

# **v0.1.4**

## ✔️ **New** methods have been added:

- **add()** // Add a list of numbers.
- **val()** // Converts and you get the numeric value of the
  currency.

<br>
<br>
<br>

# **v0.1.5**

## Now you can perform the basic Math operations 🧐💯

<br>

## 🔄 **Update** in the argument of the method **add()** move from a "List" => "number".

- add(currency: number) // Add number

## ✔️ **New** methods have been added:

- **subtract()** // Substract number
- **multiply()** // Multiply number
- **divide()** // Divide number

<br>
<br>
<br>

# **v0.1.6**

## Fixed some bugs 🐞

<br>
<br>
<br>

# **v0.1.7**

## ✔️ **New** methods have been added:

- **setup()** // Set values to the properties you want
- **isDecimal()** // Check if the value is a decimal number

## ✔️ **New** static methods are here

- **_static_ isNumber(value)** // Check if the value is a
  number
- **_static_ isDecimal(value)** // Check if the value is a
  decimal number

## Fixed some bugs 🐞

<br>
<br>
<br>

# **v0.1.8**

## Fixed some bugs 🐞

<br>
<br>
<br>

# **v1.0.0**

## ✔️ **New** methods have been added:

- **modulo()** // Get the module of an operation

<br>
<br>
<br>

# **v1.1.0**

## ✔️ **New** methods have been added:

- **format()** // Format the currency value with the separators
  you set in your setup

## ✔️ Now you can get your currency with all the values, only by placing **'full'** in the settings 💯

## ✔️ You can use the **Separators _class_** to configure separators. <br> Now you can import the class and configure them :D

```js
import Boldor, { Separators } from 'boldor'

const myCashSetup = {
  currency: 120000.25,
  precision: 'full',
  separators: new Separators(['.', ',']), // Or ['.', ',']
  lang: 'en',
}

const myCash = new Boldor(myCashSetup)

console.log(myCash.format()) // Output: 120.000,25

```
