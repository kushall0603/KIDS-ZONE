// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function show1() {
  document.getElementById("opt1").style.display = "block";
}

function show11() {
  var element = document.getElementById("opt1");
  element.style.display = element.style.display === "none" ? "block" : "none";
}

function show2() {
  document.getElementById("opt2").style.display = "block";
}

function show22() {
  var element = document.getElementById("opt2");
  element.style.display = element.style.display === "none" ? "block" : "none";
}

function hover(element) {
  element.style.color = "white";
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("opt1").style.display = "none";
  document.getElementById("opt2").style.display = "none";
});
