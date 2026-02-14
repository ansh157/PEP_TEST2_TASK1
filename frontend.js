const form = document.querySelector(".form-div");
const messageList = document.getElementById("messageList");

const API = "http://localhost:3000";


async function loadMessages() {
  try {
    const res = await fetch(`${API}/all`);
    const data = await res.json();

    messageList.innerHTML = "";

    data.forEach(msg => {
      const li = document.createElement("li");

      const btn = document.createElement("button");
      btn.innerText = "Open Message";

      btn.onclick = async () => {
        try {
          const openRes = await fetch(`${API}/open/${msg._id}`);
          const result = await openRes.json();

          if (!openRes.ok) {
            alert(result.message);
          } else {
            alert("Message: " + result.content);
          }

        } catch (error) {
          console.log(error);
        }
      };

      li.innerText = `Unlocks At: ${new Date(msg.unlockAt).toLocaleString()} `;
      li.appendChild(btn);
      messageList.appendChild(li);
    });

  } catch (error) {
    console.log(error);
  }
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const content = document.getElementById("content").value;
  const unlockAt = document.getElementById("unlockAt").value;

  try {
    const res = await fetch(`${API}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content, unlockAt })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Message Created!");
    form.reset();
    loadMessages();

  } catch (error) {
    console.log(error);
  }
});


loadMessages();
