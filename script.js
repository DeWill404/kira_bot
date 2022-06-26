function onClick(ele) {
  if (ele.classList.contains("open")) {
    ele.classList.remove("open");
    document.querySelector(".bot-container").classList.remove("show");
    ele.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    height="32px"
    width="32px"
    role="img"
    alt="Chat icon"
    class="tawk-min-chat-icon"
  >
    <path
      fill="white"
      d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
    ></path>
  </svg>`;
  } else {
    ele.classList.add("open");
    document.querySelector(".bot-container").classList.add("show");
    ele.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    height="32px"
    width="32px"
    role="img"
    alt="Close icon"
    class="tawk-min-chat-icon"
  >
    <path
      fill="white"
      d="M466.24042,400.4053l272.927-275.99463c6.94586-8.76452,11.13092-20.00501,11.13092-32.20959 s-4.18506-23.42317-11.21857-32.29724l0.08765,0.10955c-8.76453-6.94588-20.005-11.13094-32.20959-11.13094 c-12.20453,0-23.42316,4.18505-32.29724,11.21858l0.10956-0.08765L401.84311,336.008L125.84851,60.0134 c-8.76452-6.94588-20.00501-11.13094-32.2096-11.13094s-23.42316,4.18506-32.29724,11.21858l0.10955-0.08765 C54.50535,68.77792,50.32029,80.01842,50.32029,92.223s4.18505,23.42317,11.21858,32.29724l-0.08764-0.10956l275.9946,275.99463 L61.45122,673.33234c-6.94588,8.76453-11.13094,20.005-11.13094,32.20959s4.18506,23.42316,11.21858,32.29724l-0.08765-0.1095 c8.19483,7.64703,19.2162,12.33606,31.33314,12.33606c0.83263,0,1.68717-0.02191,2.49789-0.06573h-0.10957 c0.54779,0.02191,1.20512,0.04382,1.86246,0.04382c11.32813,0,21.5388-4.71094,28.79144-12.29224l0.0219-0.02191 l275.99463-272.92703l272.92703,272.92703c7.2746,7.58136,17.48523,12.31415,28.81335,12.31415 c0.65735,0,1.29279-0.02191,1.95013-0.04382h-0.08765c0.72308,0.04382,1.55573,0.06573,2.38831,0.06573 c12.11694,0,23.16022-4.68903,31.37695-12.35797l-0.02185,0.02191c6.94586-8.76447,11.13092-20.005,11.13092-32.20959 c0-12.20453-4.18506-23.42316-11.21857-32.29724l0.08765,0.10956L466.24042,400.4053z"
    ></path>
  </svg>`;
  }
}

function closeChat() {
  document.querySelector(".bot-container").classList.remove("show");
  document.querySelector(".chat-btn").classList.remove("open");
  document.querySelector(".chat-btn").innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    height="32px"
    width="32px"
    role="img"
    alt="Chat icon"
    class="tawk-min-chat-icon"
  >
    <path
      fill="white"
      d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
    ></path>
  </svg>`;
}

async function addMessage(message) {
  if (message === "") return;

  document.getElementById("chat").value = "";

  let div;

  div = document.createElement("div");
  div.className = `message-block`;
  div.tabIndex = "-1";
  div.innerText = message;
  div.setAttribute(
    "data-date",
    new Date().toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
    })
  );

  document.querySelector(".bot-content").appendChild(div);
  div.focus();

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // async function postMessage() {
  const { data, status } = await axios.post(
    `https://ineuron-hackathon.herokuapp.com/api/chat/`,
    { message },
    config
  );

  if (!status) {
    div = document.createElement("div");
    div.className = `message-block reply`;
    div.tabIndex = "-1";
    div.innerText = "Sorry";
    div.setAttribute(
      "data-date",
      new Date().toLocaleString("en-us", {
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "numeric",
      })
    );

    document.querySelector(".bot-content").appendChild(div);
    div.focus();
    return;
  }

  div = document.createElement("div");
  div.className = `message-block reply`;
  div.tabIndex = "-1";
  div.innerText = data.Reply;
  div.setAttribute(
    "data-date",
    new Date().toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
    })
  );

  document.querySelector(".bot-content").appendChild(div);
  div.focus();
}
