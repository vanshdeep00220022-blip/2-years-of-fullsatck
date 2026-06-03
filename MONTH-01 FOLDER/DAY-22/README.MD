# Day 22: JavaScript Type Conversion & Coercion 🎭

Welcome to Day 22 of my **2-Year Full Stack Development Challenge**! Today, I explored how JavaScript converts data from one type to another. Understanding this is critical for preventing weird bugs in production.

## 📊 Challenge Status
**Day 22 of 730** 🗓️
- **Phase:** 1 (Frontend Mastery)
- **Topic:** JavaScript Type Conversion

## 📝 What I Learned Today

JavaScript handles type conversion in two distinct ways:

### 1. Explicit Conversion (Type Casting)
This is when *we* intentionally tell JavaScript to convert a value using built-in functions.
* **To Number:** `Number("42")` becomes `42`
* **To String:** `String(100)` becomes `"100"`
* **To Boolean:** `Boolean(1)` becomes `true` (Note: `0`, `""`, `null`, `undefined`, and `NaN` are always `false` - these are known as "falsy" values).

### 2. Implicit Conversion (Type Coercion)
This is when JavaScript automatically converts values behind the scenes to make an operation work. This is where JS gets weird!

* **String Concatenation:** If you use the `+` operator with a string, JS converts everything to a string.
  * `"3" + 2` ➡️ `"32"` (String)
* **Mathematical Operations:** If you use `-`, `*`, or `/`, JS converts strings to numbers!
  * `"3" - 2` ➡️ `1` (Number)
  * `"6" / "2"` ➡️ `3` (Number)

## 💡 The Unary Plus Operator `+`
A quick trick to convert a string to a number is adding a `+` in front of it:
`let x = +"45"; // x is now the number 45`

## 📂 Files in this Repository
* `conversion.js` - My code experiments testing the boundaries of JS implicit and explicit coercions.

---
*Follow my journey as I code my way to becoming a Full Stack Developer!*
#2YearDevChallenge #JavaScript #WebDevelopment #Frontend
