# Day 23: The Ultimate JS Data Types & Coercion Cheat Sheet 📝

Welcome to Day 23 of my **2-Year Full Stack Development Challenge**! Today, I took a step back to consolidate everything I've learned about JavaScript Data Types, Type Coercion, and Comparison Operators into a single, easy-to-read cheat sheet. 

## 📊 Challenge Status
**Day 23 of 730** 🗓️
- **Phase:** 1 (Frontend Mastery)
- **Topic:** Consolidation & Documentation

## 🧠 The Master Summary Table

| Data Type | Example | `typeof` returns | Mutable? |
| :--- | :--- | :--- | :--- |
| **String** | `"Hello"` | `"string"` | No (Stored by Value) |
| **Number** | `42`, `3.14` | `"number"` | No (Stored by Value) |
| **BigInt** | `9007199254740991n`| `"bigint"` | No (Stored by Value) |
| **Boolean** | `true`, `false` | `"boolean"`| No (Stored by Value) |
| **Undefined**| `let x;` | `"undefined"`| No (Stored by Value) |
| **Null** | `let y = null;` | `"object"` 🐛 | No (Stored by Value) |
| **Symbol** | `Symbol('id')` | `"symbol"` | No (Stored by Value) |
| **Object** | `{ name: "JS" }` | `"object"` | Yes (Stored by Ref) |
| **Array** | `[1, 2, 3]` | `"object"` | Yes (Stored by Ref) |

## ⚖️ Equality Quick Reference
* **Loose Equality (`==`):** Converts types before comparing. (e.g., `"5" == 5` is `true`)
* **Strict Equality (`===`):** Compares value AND type. (e.g., `"5" === 5` is `false`)
* **Rule of Thumb:** Always use `===` to prevent unexpected bugs!

## 📂 Files in this Repository
* `cheatsheet.js` - My heavily commented code acting as a quick-reference guide for all these concepts.

---
*Follow my journey as I code my way to becoming a Full Stack Developer!*
#2YearDevChallenge #JavaScript #WebDevelopment #Frontend
