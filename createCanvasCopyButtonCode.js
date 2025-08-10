document.querySelectorAll(".copyBtn").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = targetElement.innerText.replace(/<br>/g, "\n");
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
      button.textContent = "Copied!";
      setTimeout(() => button.textContent = "Copy", 1500);
    });
  });
