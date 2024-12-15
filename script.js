document.getElementById("turingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("inputStrings").value;
    const strings = input.split(","); 
    const resultDiv = document.getElementById("result");

    if (strings.length === 0 || (strings.length === 1 && strings[0] === "")) {
      const result = document.createElement("div");
      result.className = "alert alert-danger mt-2";
      result.innerText = "Input kosong, tidak ada string yang diproses.";
      resultDiv.appendChild(result);
      return;
  } 

    resultDiv.innerHTML = ""; 
    checkStringsWithState(strings, resultDiv);
  });
  
  async function checkStringsWithState(strings, resultDiv) {
    const tapeContainer = document.getElementById("tape");
    const stateText = document.getElementById("currentState");
    for (let i = 0; i < strings.length; i++) {
      const str = strings[i].trim(); 
      const tape = str.split(""); 
      renderTape(tape, tapeContainer, 0);
      stateText.innerText = `Memproses string '${str}'...`;
      let isValid = true;
      for (let head = 0; head < tape.length; head++) {
        renderTape(tape, tapeContainer, head);
        stateText.innerText = `Head di posisi ${head}, simbol '${tape[head]}'...`;
        await delay(500);
        if (tape[head] !== "0" && tape[head] !== "1") {
          isValid = false;
          break;
        }
      }
  
      const result = document.createElement("div");
      result.className = `alert ${isValid ? "alert-success" : "alert-danger"} mt-2`;
      result.innerText = `String '${str}' ${isValid ? "valid" : "tidak valid"}!`;
      resultDiv.appendChild(result);
  
      if (!isValid) {
        stateText.innerText = `Proses dihentikan: string '${str}' tidak valid.`;
        break;
      }
      await delay(1000); 
    }
  }
  
  function renderTape(tape, container, headPosition) {
    container.innerHTML = ""; 
  
    tape.forEach((symbol, index) => {
      const cell = document.createElement("div");
      cell.className = "p-2 border text-center";
      cell.style.width = "40px";
      cell.style.backgroundColor = index === headPosition ? "#ffc107" : "#f8f9fa";
      cell.innerText = symbol;
      container.appendChild(cell);
    });
  }
  
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  