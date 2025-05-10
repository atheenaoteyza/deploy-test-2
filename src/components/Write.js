import React, { useRef, useState } from "react";
import { app, auth } from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Write = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const saveData = async () => {
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;

  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const user = userCredential.user;

  //     // Store user in the database
  //     const db = getDatabase(app);
  //     const userRef = ref(db, `users/${user.uid}`);
  //     try {
  //       await set(userRef, {
  //         email,
  //         uid: user.uid,
  //         invoices: {},
  //       });
  //       alert("User successfully registered and data saved to the database.");
  //     } catch (dbError) {
  //       alert("error db");
  //     }
  //   } catch (error) {
  //     console.error("Error during registration:", error.message);
  //   }
  // };
  //       <input type="text" placeholder="Email" ref={emailRef} />
  //      <input type="password" placeholder="Password" ref={passwordRef} />

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "nature/fruits"));
    set(newDocRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2,
    })
      .then(() => {
        alert("data saved success");
      })
      .catch((error) => {
        alert("error", error.message);
      });
  };

  return (
    <>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <button onClick={saveData}>save</button>
    </>
  );
};
