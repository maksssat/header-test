function simpleNav1() {
  let nav = document.getElementById("nav1");

  if (nav.className === "responsive") {
    nav.className -= "responsive";
  } else {
    nav.className = "responsive";
  }
}

function simpleNav2() {
  let nav = document.getElementById("nav2");
  let overflow = document.getElementById("overflow");
  if (nav.className === "responsive") {
    nav.className -= "responsive";
  } else {
    nav.className = "responsive";
  }

  if (overflow.className === "responsive") {
    overflow.className -= "responsive";
  } else {
    overflow.className = "responsive";
  }
}

function simpleNav3() {
  let nav = document.getElementById("nav3");

  if (nav.className === "responsive") {
    nav.className -= "responsive";
  } else {
    nav.className = "responsive";
  }
}

function simpleNav4() {
  let nav = document.getElementById("nav4");

  if (nav.className === "responsive") {
    nav.className -= "responsive";
  } else {
    nav.className = "responsive";
  }
}
